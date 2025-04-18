import { Search } from 'lucide-react';
import { Params } from 'next/dist/server/request/params';
import Typography from '../typography/Typography';

export function BreadCrumbSegmentIcon({ path, params, isLast }: { path: string; params: Params; isLast?: boolean }) {
  if (path === 'poke') {
    return <Search />;
  }

  return null;
}

export function BreadCrumbSegmentTitle({ path, isLast }: { path: string; isLast?: boolean }) {
  if (path === 'poke') {
    return (
      <Typography
        className={cn({
          'text-muted-foreground': isLast,
        })}
      >
        Pokemon
      </Typography>
    );
  }

  return (
    <Typography
      className={cn({
        'text-muted-foreground': isLast,
      })}
    >
      {startCase(path)}
    </Typography>
  );
}
