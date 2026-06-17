import { programs } from '../../data/content';
import { ProgramPageContent } from '../../components/sections/ProgramPageContent';

const program = programs.find((p) => p.id === 'innovakidz')!;

export function InnovaKidz() {
  return <ProgramPageContent program={program} />;
}
