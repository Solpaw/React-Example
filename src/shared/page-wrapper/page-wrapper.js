import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import './page-wrapper.scss';

class PageWrapper extends React.Component {

  componentDidMount() {
  }

    render() {
      return (
        <div className='container-fluid g-0'>
          <div className='row g-0 flex-nowrap'>
            <Sidebar className="col-3 d-none d-md-block" />
            <Outlet className="col-md col-12" />
          </div>
        </div>
      );
    }
}

export default PageWrapper;