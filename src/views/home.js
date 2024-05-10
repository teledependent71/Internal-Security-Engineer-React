import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Security Engineer</title>
        <meta property="og:title" content="Internal Security Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
