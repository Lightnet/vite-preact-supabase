# vite-preact-supabase

# Packages:
- vite
- preact
- express
- @supabase/supabase-js

# Information:
  Simple set up for preact, router, page, auth and supabase.

Base on set up guide.

https://supabase.com/docs/guides/with-react

# Supabase Notes:
  Make sure that date format is correct type for sql else it will reject insert or update.

  Still learning the sql query. One is how to manage the access role and permissions for write, update, insert, delete and other features.
```
  postgresql
```
# Notes:
- Suspense log error.

```jsx
import Home from './pages/index.jsx';
import { Loading } from "./components/Loading";

const About = lazy(() => import('./pages/About'));

const Main = () => (
  <Suspense fallback={<Loading />}>
    <Router>
      <Home path="/" />
      <About path="/about"/>
    </Router>
  </Suspense>
);
```

# .env
```
VITE_SUPABASE_URL=""
VITE_SUPABASE_ANON_KEY=""
```