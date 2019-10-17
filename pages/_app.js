import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
// import component
import Layout from '../components/Layout';
import SWRegister from '../public/sw-register';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Yutazon.me</title>
        </Head>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <SWRegister />
      </Fragment>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll;
  }

  body {
    font-family: "open sans", "helvetica neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    word-wrap: break-word;
    font-kerning: normal;
    color: #323335;
    background-color: #fefefe;
    min-height: 100vh;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
