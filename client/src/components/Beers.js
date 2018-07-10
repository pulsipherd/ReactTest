import React from 'react';
import axios from 'axios';

class Beers extends React.Component {
  state = { beer: {}, edit: false }

  componentDidMount() {
    axios.get(`/api/all_beers`)
      .then(res => this.setState({ beer: res.data }))
  }

  render() {
    let { beers } = this.state;
    return (
      <div>
        <ul>
          { beers.map( b =>
            <li key={b.id}>
              {b.name}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Beers;