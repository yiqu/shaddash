import SearchInput from '@/components/home/SearchInput';
import { TeaSelectionComboBox } from '@/components/home/TeaSelection';

export default function Home() {
  return (
    <section className="flex flex-col gap-2">
      <section className="mb-2">Welcome!</section>
      <SearchInput />
      <TeaSelectionComboBox />
      <section className="h-[100rem]">Welcome!</section>
    </section>
  );
}
