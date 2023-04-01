import {Fragment} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import Collection from './components/Collection';
import Questions from './components/Questions';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <main>
      <Header />
      <About />
      <Features />
      <Collection />
      <Questions />
      <JoinUs />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
