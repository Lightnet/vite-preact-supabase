import { createContext, h } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import { supabase } from '../../libs/supabaseclient'
import Avatar from './Avatar'

const Account = ({ session }) => {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  useEffect(() => {//upload url image event for update
    if(avatar_url){
      updateProfile()
    }
  }, [avatar_url])

  const getProfile = async () => {
    try {
      setLoading(true)
      const { user } = session

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        console.log(data)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const updateProfile = async (e) => {
    if(typeof e?.preventDefault === 'function'){
      e.preventDefault()
    }

    try {
      setLoading(true)
      const { user } = session
      console.log(avatar_url)

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }
      console.log(updates);

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div aria-live="polite">
      {loading ? (
        'Saving ...'
      ) : (
        <>
          <div>Email: {session.user.email}</div>
          <div>
            <label htmlFor="username">Name</label>
            <input
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="url"
              value={website || ''}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div>
            <Avatar
            url={avatar_url}
            size={150}
            onUpload={(url) => {
              console.log("UPLOADED:", url)
              setAvatarUrl(url)
              //updateProfile()//does not work
            }}
            />
          </div>
          <div>
            <button className="button primary block" disabled={loading} onClick={updateProfile}>
              Update profile
            </button>
          </div>
        </>
      )}

      
      <button
        type="button"
        className="button block"
        onClick={() => supabase.auth.signOut()}
      >
        Sign Out
      </button>
    </div>
  )
}

export default Account