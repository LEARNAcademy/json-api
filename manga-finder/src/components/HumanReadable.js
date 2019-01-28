import React, { Component } from 'react'

class HumanReadable extends Component {
  render() {
    const { value } = this.props
    return(
      <span>
        {value.replace("+", " ")}
      </span>
    )
  }
}

export default HumanReadable
