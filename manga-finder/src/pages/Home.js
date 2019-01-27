import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return(
      <div>
        <h3>Start your search here.</h3>
        <ul>
          <li>
            <Link to="/type/manga">Manga</Link>
          </li>
          <li>
            <Link to="/type/anime">Anime</Link>
          </li>
          <li>
            <Link to="/type/people">People</Link>
          </li>
          <li>
            <Link to="/type/character">Characters</Link>
          </li>
        </ul>
      </div>
    )
  }
}


export default Home
