import { useState, useMemo } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { PropsWithChildren } from 'react';

function ThemeProvider({ children }: PropsWithChildren) {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Memoize the context value to prevent unnecessary rerenders
  const contextValue = useMemo(() => ({
    theme,
    toggleTheme: () => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }
  }), [theme]);

  
  const themeStyles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
    dark: {
      backgroundColor: '#222222',
      color: '#ffffff',
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div style={themeStyles[theme]}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;