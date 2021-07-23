//import pages
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import OurWork from './Pages/OurWork';

//Router

import {Switch, Route, useLocation} from 'react-router-dom';
import MovieDetail from './Pages/MovieDetail';

//animation
import {motion} from 'framer-motion';
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      
      
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route>
            <MovieDetail path="/work/:id" />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
