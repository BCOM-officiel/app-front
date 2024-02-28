import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import TeamMemberCard from './components/TeamMemberCard';


const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
});

function App() {
  const pages = [
    { title: 'Accueil', url: '/' },
    { title: 'Talents', url: '/talents' },
    { title: 'Événements', url: '/evenements' },
    { title: 'Équipe', url: '/equipe' }
  ];

  return (
    <ThemeProvider theme={theme}> 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <TeamMemberCard
          firstName="Mickaël"
          profession="Formateur"
          imageUrl={logo}
          color="blue"
          textColor="white"
        />
        <Footer pages={pages} />
      </div>
    </ThemeProvider>
  );
}

export default App;
