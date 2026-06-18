import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type NavDropdownProps = {
  label: string;
  active: boolean;
  overHero?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
};

export function NavDropdown({ label, active, overHero = false, onOpenChange, children }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0, minWidth: 220 });

  const updatePosition = () => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    setPosition({
      top: rect.bottom + 4,
      left: rect.left,
      minWidth: Math.max(rect.width, 220),
    });
  };

  useEffect(() => {
    onOpenChange?.(open);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) return;

    updatePosition();
    const onScrollOrResize = () => updatePosition();
    window.addEventListener('scroll', onScrollOrResize, true);
    window.addEventListener('resize', onScrollOrResize);

    const closeOnOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener('mousedown', closeOnOutside);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize, true);
      window.removeEventListener('resize', onScrollOrResize);
      document.removeEventListener('mousedown', closeOnOutside);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          setOpen((current) => !current);
          if (!open) requestAnimationFrame(updatePosition);
        }}
        onMouseEnter={() => {
          setOpen(true);
          requestAnimationFrame(updatePosition);
        }}
        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors xl:px-3.5 ${
          overHero
            ? active
              ? 'bg-white/15 text-white'
              : 'text-white/90 hover:bg-white/10 hover:text-white'
            : active
              ? 'bg-brand-muted text-brand'
              : 'text-slate-600 hover:bg-slate-50 hover:text-brand'
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                ref={panelRef}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: 'fixed',
                  top: position.top,
                  left: position.left,
                  minWidth: position.minWidth,
                  zIndex: 9999,
                }}
                className="border border-slate-100 bg-white py-1 shadow-xl"
                onMouseLeave={() => setOpen(false)}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
