import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about-section">
  
  <p>
    Welcome to <strong>Movie Ratings</strong>, your go-to platform for discovering and exploring movies from around the world. Powered by the <strong>TMDB API</strong>, this app lets you:
  </p>
  <ul>
    <li>🔍 <strong>Search</strong> for your favorite movies in real time</li>
    <li>📊 <strong>Filter</strong> by rating to find the best of the best</li>
    <li>♾️ <strong>Scroll infinitely</strong> through popular, top-rated, and upcoming movies</li>
    <li>🌗 <strong>Toggle between dark and light themes</strong> for a comfortable viewing experience</li>
  </ul>
  <p>
    Built using <strong>React</strong>, <strong>Axios</strong>, and reusable components, this web app is designed to be fast, responsive, and enjoyable—whether you’re a casual viewer or a movie enthusiast.
  </p>
</section>


  )
}

export default About
