import React, { Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';


function App() {
  return (
    <Fragment>
        <GlobalStyle />
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home/></Layout>} />

                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </Router>
    </Fragment>
  );
}

export default App;
