import { Button } from '@/components/ui/button';
import ClientHydrate from '@/components/utils/ClientHydrate';

import Users from './_components/Users';
import Counter from './_components/Counter';

export default function Page() {
  console.log('Rendering Page');
  return (
    <div className="flex w-2xl flex-col gap-y-4">
      <div>Counter</div>
      <ClientHydrate>
        <Counter />
      </ClientHydrate>

      <div>Users</div>
      <Users />
    </div>
  );
}
