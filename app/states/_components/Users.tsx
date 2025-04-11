'use client';

import { Button } from '@/components/ui/button';
import userCounterUserStore from '@/stores/counter.store';

export default function Users() {
  console.log('Rendering Users');
  //const { addUser, removeUser, clearUsers } = userCounterUserStore();
  const users = userCounterUserStore((state) => state.users);
  const addUser = userCounterUserStore((state) => state.addUser);
  const removeUser = userCounterUserStore((state) => state.removeUser);

  const handleAddUSer = () => {
    addUser({
      email: 'test@test.com',
      id: Date.now(),
      name: `User ${Date.now()}`,
    });
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div>Users</div>
      <div>
        { users.map((user) => {
          return (
            <div key={ user.id }>
              <div>{ user.name }</div>
            </div>
          );
        }) }
      </div>
      <div className="flex flex-row gap-x-2">
        <Button onClick={ handleAddUSer }>Add user</Button>
      </div>
    </div>
  );
}
