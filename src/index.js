import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './shared/page-wrapper/page-wrapper';
import { Outlet } from 'react-router-dom';
import Dashboard from './feature/dashboard/dashboard';
import './shared/scss/base.scss';

class App extends React.Component {
    render() {
        return (
          <Outlet />
        );
    }
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<PageWrapper />}>
          <Route index path='dashboard' element={<Dashboard />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'));