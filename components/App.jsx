/*
  Project Name: vite-preact-supabase
  License: MIT
  Created by: Lightnet
*/

import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Link to="/">Home</Link><span> | </span>
      <Link to="/about">About</Link>
      <h1>Bookkeeper!</h1>
    </div>
  );
}