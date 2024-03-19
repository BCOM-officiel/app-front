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
    { title: 'Équipe', url: '/equipe' },
    { title: 'Contact', url: '/contact' },
  ];

  return (
    <ThemeProvider theme={theme}> 
    
    </ThemeProvider>
  );
}

export default App;
