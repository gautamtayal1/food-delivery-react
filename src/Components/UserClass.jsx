import React from 'react'

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  render() {
    const { name, location } = this.props;

    return(
      <div className='user-card'>
        <h1>Count: {this.state.count}</h1>
        <button 
        onClick={() => {
          this.setState({
            count: this.state.count +1
          })
        }}
        >Increase</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @gautamtayal65</h4>
      </div>
    )
  }
}