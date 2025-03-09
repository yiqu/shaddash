import { ReactNode } from 'react';

export default function MutedRoundBackground({ children }: { children: ReactNode }) {
  return <div className={ `
    bg-muted/50 min-h-[100vh] flex-1 rounded-xl
    md:min-h-min
  ` }>{ children }</div>;
}
