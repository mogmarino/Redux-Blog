import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { fetchUsers } from './features/users/usersSlice.js'
import { fetchPosts } from './features/posts/postsSlice.js'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


store.dispatch(fetchUsers());
store.dispatch(fetchPosts());


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)
