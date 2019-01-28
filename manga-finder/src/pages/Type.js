import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Type extends Component {
  constructor(props){
    super(props)
    const{ match } = props
    const{ params } = match
    this.state = {
      type: params.type
    }
  }

  render() {
    const{ type } = this.state
    return(
      <div>
        <Link className='btn btn-primary' to='/'>Start Over</Link>
        <h1>Choose a Topic for {type}</h1>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='btn btn-primary' to={`/type/${type}/topic/dragon+ball`}>Dragon Ball</Link>
          </li>
          <li className='list-group-item'>
            <Link className='btn btn-primary' to={`/type/${type}/topic/attack+on+titan`}>Attack On Titan</Link>
          </li>
          <li className='list-group-item'>
            <Link className='btn btn-primary' to={`/type/${type}/topic/kochikame`}>KochiKame</Link>
          </li>
          <li className='list-group-item'>
            <Link className='btn btn-primary' to={`/type/${type}/topic/oishinbo`}>Oishinbo</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Type
