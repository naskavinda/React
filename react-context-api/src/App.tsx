import './App.css'
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import ThemeProvider from './providers/ThemeProvider';

function App() {

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App
