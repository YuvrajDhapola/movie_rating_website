import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage.jsx'
import PopularPage from './pages/PopularPage/PopularPage.jsx'
import TopRated from './pages/TopRated/TopRated.jsx'
import Upcoming from './pages/Upcoming/Upcoming.jsx'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/top_rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </Router>
  )
}

export default App
