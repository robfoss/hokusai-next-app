import React from 'react';
import Head from 'next/head';
import Header from '../navigation/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hokusai tribute</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='This is a tribute page of hokusai' />
        <meta name='keywords' content='Hokusai, art, paint' />
        <meta name='author' content='Foss the Developer' />
      </Head>
      <Header />
      <div className='container'>{children}</div>
    </>
  );
};

export default Layout;
