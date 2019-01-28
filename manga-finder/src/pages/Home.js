import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/bootstrap.min.css'

class Home extends Component {
  render() {
    return(
      <div>
        <h3>Start your search here.</h3>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='btn btn-primary' to="/type/anime">Anime</Link>
          </li>
          <li className='list-group-item'>
            <Link className='btn btn-primary' to="/type/people">People</Link>
          </li>
          <li className='list-group-item'>
            <Link className='btn btn-primary' to="/type/character">Characters</Link>
          </li>
        </ul>
      </div>
    )
  }
}


export default Home
