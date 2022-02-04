import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import COLOR from './styles/color';
import { Container } from './styles/styledComponents';
import ClassicList from './components/ClassicList';
import EventList from './components/EventList';
import './App.css';

type ThemeType = {
  primary: string;
  background: string;
  text: string;
};

const defaultTheme: ThemeType = {
  primary: COLOR.GREEN,
  background: COLOR.GREY_LIGHT,
  text: COLOR.BLACK,
};
function App() {
  const [theme, setTheme] = useState(defaultTheme);
  //TODO: Add logic to change theme
  return (
    <ThemeProvider theme={{ colors: theme }}>
      <Container>
        <ClassicList />
        <EventList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
