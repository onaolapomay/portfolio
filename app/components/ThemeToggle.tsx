'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="rounded-md border border-zinc-300 dark:border-zinc-700 p-2">
        <div className="h-4.5 w-4.5" />
      </button>
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
      className="rounded-md border border-zinc-300 dark:border-zinc-700 p-2"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-yellow-600" />
      ) : (
        <Moon size={18} className="text-black" />
      )}
    </button>
  );
}