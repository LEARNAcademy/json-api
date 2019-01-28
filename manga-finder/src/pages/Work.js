import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Work extends Component {
  constructor(props){
    super(props)
    const{ match } = props
    const{ params } = match
    this.state = {
      type: params.type,
      topic: params.topic,
      loading: true,
      work: null,
    }

    fetch(`https://api.jikan.moe/v3/${params.type}/${params.id}`)
    .then((result)=> result.json())
    .then((jsonBody)=>{
      if(jsonBody){
        this.setState({ work: jsonBody, loading: false })
      }
    })
    .catch((e)=>{
      this.setState({loading: false})
    })
  }
  render() {
    const{ type, topic, work } = this.state

    return(
      <div>
        {!work &&
          <h3>Loading</h3>
        }
        {work &&
          <div>
            <Link className='btn btn-primary' to={`/type/${type}/topic/${topic}`}>Back to {topic}</Link>

            <h2>{work.title}</h2>
            <div className='card'>
              <img src={work.image_url} alt={work.title} className='card-img-top'/>
              <div className='card-body'>
                <dl>
                  <dt>premiered</dt>
                  <dd>{work.premiered}</dd>

                  <dt>rating</dt>
                  <dd>{work.rating}</dd>
                </dl>
                <p>{work.synopsis}</p>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Work
