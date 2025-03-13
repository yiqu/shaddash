'use client';

import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme, UseThemeProps } from 'next-themes';

import { Button } from '@/components/ui/button';

import { Skeleton } from '../ui/skeleton';

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme }: UseThemeProps = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOnThemeUpdate = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Skeleton className="h-4 w-4 rounded-full" />
      </Button>
    );
  }

  return (
    <Button variant="outline" size="icon" onClick={ handleOnThemeUpdate }>
      { theme === 'dark' ?
        <Sun />
      : <Moon /> }
    </Button>
  );
}
