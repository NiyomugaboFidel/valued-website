import { programs } from '../../data/content';
import { ProgramPageContent } from '../../components/sections/ProgramPageContent';

const program = programs.find((p) => p.id === 'connect-cheers')!;

export function ConnectCheers() {
  return <ProgramPageContent program={program} />;
}
