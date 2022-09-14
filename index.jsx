/*
  Project Name: vite-preact-supabase
  License: MIT
  Created by: Lightnet
*/

// https://reactrouter.com/en/main/getting-started/tutorial
// https://bytemeta.vip/repo/preactjs/preact-router/issues/324

import "./styles.css";

import { h, render } from 'preact';
import { Suspense, lazy  } from 'preact/compat';
import Router from 'preact-router';

//import App from "./components/App";
//import Home from './pages/index.jsx';
import { Loading } from "./components/Loading";
import AuthProvider from "./components/auth/AuthProvider";

const Home = lazy(() => import('./pages/index'));
const About = lazy(() => import('./pages/about'));

const Main = () => (
<AuthProvider>
  <Suspense fallback={<Loading />}>
    <Router>
      <Home path="/" />
      <About path="/about"/>
    </Router>
  </Suspense>
</AuthProvider>
);

render(<Main />, document.body);

if (import.meta.hot) { //< module.hot
  //console.log(import.meta.hot)
  //import.meta.hot.accept() //< module.hot.accept()
  //import.meta.hot.dispose(dispose) //< module.hot.dispose(dispose)
  //console.log("Hot Reload...")
}
/*

*/
