/*
  Project Name: vite-preact-supabase
  License: MIT
  Created by: Lightnet
*/

import { Link } from "preact-router";

export default function NavMenu(){
  return (<div>
    <Link href="/">Home</Link><span> | </span>
    <Link href="/about">About</Link>
  </div>)
}