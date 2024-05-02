import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { SectionSlogan } from './components/SectionSlogan/SectionSlogan';
import { SectionServices } from './components/SectionServices/SectionServices';
import { SectionSobre } from './components/SectionSobre/SectionSobre';
import { Footer } from './components/Footer/Footer';

import './css/App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <SectionSlogan />
        <SectionServices />
        <SectionSobre />
        <Footer />
      </>
    );
  }
}

export default App;
