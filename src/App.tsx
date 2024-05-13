
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';



const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}> 
    
    </ThemeProvider>
  );
}

export default App;
