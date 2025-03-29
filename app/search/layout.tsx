import TextCursor from '@/components/reactbits/TextAnimations/TextCursor/TextCursor';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <section className={ `
    flex min-h-full w-full flex-col items-start justify-start
  ` }>{ children }</section>;
}
