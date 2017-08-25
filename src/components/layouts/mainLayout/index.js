import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/layouts/mainLayout/Header';
import Navigation from 'components/layouts/mainLayout/Navigation';
import Footer from 'components/layouts/mainLayout/Footer';

const MainLayout = ({ children }) => (
  <div className='container'>
    <Header />
    <Navigation />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;