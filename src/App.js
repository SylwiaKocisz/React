import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Components/HomePage/HomePage';
import CatalogPage from './Components/CatalogPage/CatalogPage';
import AboutPage from './Components/AboutPage/AboutPage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/about" component={AboutPage} />
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


