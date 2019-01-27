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
        <h1>Choose a Topic for {type}</h1>
        <ul>
          <li>
            <Link to={`/type/${type}/topic/dragon+ball`}>Dragon Ball</Link>
          </li>
          <li>
            <Link to={`/type/${type}/topic/naruto`}>Naruto</Link>
          </li>
          <li>
            <Link to={`/type/${type}/topic/kochikame`}>KochiKame</Link>
          </li>
          <li>
            <Link to={`/type/${type}/topic/oishinbo`}>Oishinbo</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Type
