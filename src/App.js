import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import classes from './App.module.css';
import Frontpage from './containers/Frontpage/Frontpage';
import Projects from './containers/Projects/Projects';
import Skills from './containers/Skills/Skills';
import Aux from './hoc/auxiliary';
import classesNav from './components/Navigation/Navbar/Navbar.module.css';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <Aux className={classes.App}>
      {/* <Navbar /> */}
      <header>
        <div className={classesNav.navbar}>
          <ul>
            <a href='#home' >Home</a>
            <a href='#projects' >Projects</a>
            <a href='#skills' >Skills</a>
            <a href='#footer'>Links</a>
          </ul>
        </div>
      </header>
      <ScrollableAnchor id='home' >
        <Frontpage />
      </ScrollableAnchor>
      <ScrollableAnchor id='projects'>
        <Projects />
      </ScrollableAnchor>
      <ScrollableAnchor id='skills' >
        <Skills />
      </ScrollableAnchor>
      <ScrollableAnchor id='footer'>
        <Footer />
      </ScrollableAnchor>
    </Aux>
  );
}

export default App;
