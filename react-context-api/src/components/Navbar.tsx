import { useTheme } from '../hooks/useTheme.ts';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className={`navbar ${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </nav>
  );
}

export default Navbar;
