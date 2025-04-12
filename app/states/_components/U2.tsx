'use client';

import userCounterUserStore from '@/stores/counter.store';

export default function U2() {
  console.log('Rendering U2');
  const getSortedUsersByName = userCounterUserStore.use.getSortedUsersByName();

  const users = getSortedUsersByName();

  return (
    <div>
      <h2>Users</h2>
      <ul>
        { users.map((user) => (
          <li key={ user.id }>{ user.name }</li>
        )) }
      </ul>
    </div>
  );
}
