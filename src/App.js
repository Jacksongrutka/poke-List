import { ThemeProvider } from './contexts/theme-contexts'
import { AppSection } from './components/AppSection';


function App() {
  return (
    <ThemeProvider>
      <AppSection/>
    </ThemeProvider>
  );
}

export default App;