import { stats } from '../../../data/content';
import { StatCounter } from '../../ui/StatCounter';
import { Stagger, StaggerItem } from '../../motion/Reveal';

export function StatsStrip() {
  return (
    <section className="hidden bg-brand-section py-10 lg:block">
      <Stagger className="container-main grid grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} light />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
