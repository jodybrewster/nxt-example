import * as React from 'react'

import App, { Container } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { Grommet, Box } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import Router from 'next/router'
import Cookies from 'js-cookie'

import Nav from "../components/Nav";
import { title } from "./_document";
import { StateProvider } from '../components/State';


// Any global CSS variables and selectors we want
const GlobalStyle = createGlobalStyle`
  :root {
    --padding: 2rem;
    --max-width: 75rem;
  }

  body {
    background-color: #F3F7F9;
    margin: 0;
  }

  hr {
    border: 1px solid #e3e3e3;
    width: 100%;
  }

  h1, h2, h3 {
    font-weight: 400 !important;
  }

  form { 
    width: 100%;
  }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
  padding: var(--padding);
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    const initialState = {
      user: null
    };

    const reducer = (state, action) => {
      console.log(action);

      switch (action.type) {

        case 'authUser':
          if (action.user && action.user.email) {
            console.log(action.user.email);
            Cookies.set('user', action.user.email);
            Router.replace('/');
          }
          
          return {
            ...state,
            user: action.user
          };
        
        default:
          return state;
      }
    };

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
          <Grommet theme={hpe}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <Nav />
              <Main>
                <Component {...pageProps} router={router} />
              </Main>
            </StateProvider>
          </Grommet>   
        <GlobalStyle />
      </>
    );
  }
}
