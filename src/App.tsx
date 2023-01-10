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
import Suppliers from './components/suppliers/Suppliers';
import Products from './components/products/Products';
import Orders from './components/orders/Orders';
import Employees from './components/employees/Employees';
import Customers from './components/customers/Customers';


function App() {
  return (
    <Fragment>
        <GlobalStyle />
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home/></Layout>} />
                <Route path="/dash" element={<Layout><Dashboard/></Layout>} />
                <Route path="/suppliers" element={<Layout><Suppliers/></Layout>} />
                <Route path="/products" element={<Layout><Products/></Layout>} />
                <Route path="/orders" element={<Layout><Orders/></Layout>} />
                <Route path="/employees" element={<Layout><Employees/></Layout>} />
                <Route path="/customers" element={<Layout><Customers/></Layout>} />

                <Route path="*" element={<Layout><h1>404</h1></Layout>} />
            </Routes>
        </Router>
    </Fragment>
  );
}

export default App;
