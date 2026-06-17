import { programs } from '../../data/content';
import { ProgramPageContent } from '../../components/sections/ProgramPageContent';

const program = programs.find((p) => p.id === 'vsep')!;

export function Vsep() {
  return <ProgramPageContent program={program} />;
}
