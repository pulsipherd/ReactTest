import React from 'react';
import axios from 'axios';

class Beers extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    fetch("http://api.brewerydb.com/v2/?key=4a67a4e833fd9ccbd77588fbaa724c33&number=50").then(
      res => {
        return res.json();
      }).then(data => {
        let names = data.res.map((n) => {
          return (
            <div key={n.results}>
              <h1>{n.results}</h1>
            </div>
          )

        })
        this.setState({ names: names });
        console.log("state", this.state.names);
      })
  }

  render() {
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