import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router-dom';
import PageWrapper from './shared/components/page-wrapper/page-wrapper';
import Dashboard from './feature/dashboard/dashboard';
import './shared/scss/base.scss';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<PageWrapper />}>
        <Route index element={<Dashboard />}/>
      </Route>
      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'));