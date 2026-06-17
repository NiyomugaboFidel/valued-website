import { programs } from '../../data/content';
import { ProgramPageContent } from '../../components/sections/ProgramPageContent';

const program = programs.find((p) => p.id === 'valuexchange')!;

export function ValueXchange() {
  return <ProgramPageContent program={program} />;
}
