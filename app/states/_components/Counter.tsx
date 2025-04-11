'use client';

import { Button } from '@/components/ui/button';
import userCounterUserStore from '@/stores/counter.store';

export default function Counter() {
  console.log('Rendering Counter');
  //const { incrementCount, decrementCount } = userCounterUserStore();
  const count = userCounterUserStore((state) => state.count);
  const incrementCount = userCounterUserStore((state) => state.incrementCount);
  const decrementCount = userCounterUserStore((state) => state.decrementCount);

  const handleOnAddOne = () => {
    incrementCount();
  };

  const handleOnMinusOne = () => {
    decrementCount();
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div>Current Count: { count }</div>
      <div className="flex flex-row gap-x-2">
        <Button onClick={ handleOnAddOne }>Add One</Button>
        <Button onClick={ handleOnMinusOne }>Minus One</Button>
      </div>
    </div>
  );
}
