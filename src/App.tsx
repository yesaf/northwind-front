import React, { Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <Fragment>
        <GlobalStyle />
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home/></Layout>} />
                <Route path="/dash" element={<Layout><Dashboard/></Layout>} />

                <Route path="*" element={<Layout><h1>404</h1></Layout>} />
            </Routes>
        </Router>
    </Fragment>
  );
}

export default App;
