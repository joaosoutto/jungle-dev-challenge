import './App.css';

import Header from './components/Top/Header/Header';
import Hero from './components/Top/Hero/Hero';
import Sarah from './components/Top/Sarahs/Sarah';
import Body from './components/Middle/Body/Body';
import BottomBody from './components/Bottom/bottomBody/BottomBody';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Sarah />
      <Body />
      <BottomBody />
    </>
  );
};

export default App;
