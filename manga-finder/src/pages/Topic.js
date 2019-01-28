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
      loading: true,
      works: [],
    }

    fetch(`https://api.jikan.moe/v3/search/${params.type}?q=${params.topic}`)
    .then((result)=> result.json())
    .then((jsonBody)=>{
      const{ results } = jsonBody
      if(results){
        this.setState({ works: results, loading: false })
      }
    })
    .catch((e)=>{
      this.setState({loading: false})
    })
  }
  render() {
    const{ loading, topic, type, works } = this.state
    return(
      <div>
        <Link className='btn btn-primary' to={`/type/${type}`}>Back to {type}</Link>
        <h1>Results for "<HumanReadable value={topic} />" in <HumanReadable value={type}></HumanReadable></h1>
        { loading &&
          <h1>Loading</h1>
        }
        {!loading &&
          <div className='card-columns'>
            {works.map((work) =>
              <Link key={work.mal_id} to={`/type/${type}/topic/${topic}/work/${work.mal_id}`}>
                <div className='card' >
                  <img src={work.image_url} alt={work.name} />
                  <div className='card-img-overlay'>
                    <span className='badge badge-secondary'>
                      {work.name}
                    </span>
                  </div>
                </div>
              </Link>
            )}
          </div>
        }
      </div>
    )
  }
}

export default Topic
