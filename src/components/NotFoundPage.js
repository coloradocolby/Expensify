import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
const NotFoundPage = () => (
  <div>
    <Header />
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Yikes! Looks like that page doesn't exist. 🤦</h1>
        <div className="page-header__actions">
          <Link className="button" to="/dashboard">Go Home</Link>
        </div>
      </div>
    </div>  
  </div>
  
);

export default NotFoundPage;