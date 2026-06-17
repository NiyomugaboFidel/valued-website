import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Reveal } from '../../motion/Reveal';

export function ApplySection() {
  return (
    <section className="bg-brand-section py-14 text-white sm:py-16 lg:py-20">
      <Reveal className="brand-section-inner container-main text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Ready to Join ValuEd?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-red-100/85 sm:text-base">
          Apply today and take the first step toward skills, confidence, and real opportunity.
        </p>
        <Button to="/apply" variant="white" size="lg" className="mt-7">
          Apply Now <ArrowRight size={16} />
        </Button>
      </Reveal>
    </section>
  );
}
