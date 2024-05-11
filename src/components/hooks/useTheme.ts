import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type UseThemeReturn = [Theme, () => void]; 

export const useTheme = (initialTheme: Theme): UseThemeReturn => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark'); 
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, handleClick];
};
