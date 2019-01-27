import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import HumanReadable from '../components/HumanReadable'

class Topic extends Component {
  constructor(props){
    super(props)
    const{ match } = props
    const{ params } = match
    this.state = {
      type: params.type,
      topic: params.topic,
      works: [],
    }

    fetch("https://api.jikan.moe/v3/search/character?q=naruto")
    .then((result)=> result.json())
    .then((jsonBody)=>{
      const{ results } = jsonBody
      this.setState({ works: results })
      console.log(results)
    })
  }
  render() {
    const{ topic, type, works } = this.state
    return(
      <div>
        <Link to={`/type/${type}`}>Back to {type}</Link>
        <h1>Results for "<HumanReadable value={topic} />" in <HumanReadable value={type}></HumanReadable></h1>
        <ul>
          {works.map((work) =>
            <li key={work.mal_id} >
              {work.name}
              <img src={work.image_url} alt={work.name} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Topic
