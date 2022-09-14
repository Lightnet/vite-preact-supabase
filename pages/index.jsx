/*
  Project Name: vite-preact-supabase
  License: MIT
  Created by: Lightnet
*/

import NavMenu from "../components/NavMenu";

import Auth from "../components/auth/Auth";
import Account from "../components/auth/Account";
import { AuthContext } from '../components/auth/AuthProvider';
import { useContext } from "preact/hooks";

export default function Page(){

  const {session, setSession} = useContext(AuthContext);

  return (<>
    <NavMenu/>
    {!session ? (
      <Auth />
    ) : (
      <Account key={session.user.id} session={session} />
    )}
  </>)

}