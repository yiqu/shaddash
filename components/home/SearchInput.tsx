'use client';
import { Input } from '../ui/input';

export default function SearchInput() {
  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
  };

  return (
    <Input
      placeholder="Search for a boba tea..."
      onChange={ handleOnInputChange }
      className={ `w-[200px] justify-between` }
    />
  );
}
