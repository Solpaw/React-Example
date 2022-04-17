import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router-dom';
import PageWrapper from './shared/components/page-wrapper/page-wrapper';
import Dashboard from './feature/dashboard/dashboard';
import './shared/scss/base.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducers';

const store = createStore(
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

ReactDOM.render(
  <Provider store={store}>
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
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));