'use client';

import { RotateCcw } from 'lucide-react';

import { reauthUser } from '@/server/user/users';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

export default function ReauthButton() {
  const handleReauth = async () => {
    await reauthUser();
  };

  return (
    <DropdownMenuItem className="cursor-pointer" onClick={ handleReauth }>
      <RotateCcw />
      Reauthenticate
    </DropdownMenuItem>
  );
}
