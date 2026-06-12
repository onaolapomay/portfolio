'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
      className="rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 transition-colors p-2"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}