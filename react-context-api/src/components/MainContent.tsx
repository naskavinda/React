import { useTheme } from "../hooks/useTheme";

function MainContent() {
  const { theme } = useTheme();
  
  return (
    <main className={`content ${theme}`}>
      <h2>Welcome to our app!</h2>
      <p>Current theme: {theme}</p>
    </main>
  );
}

export default MainContent;