import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import { setFlash } from "../actions/flash";
import { connect } from "react-redux";
import { setHeaders } from "../actions/headers";
import axios from 'axios';

class BreweryDrop extends Component {
  state = {
    loaded: false,
    token: '',
    redirect: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    axios.get("/api/brewery_db_token")
      .then(res => {
        const { data: token, headers } = res;
        dispatch(setHeaders(headers))
        this.setState({ token, loaded: true });
      })
      .catch(res => {
        dispatch(setHeaders(res.headers));
        dispatch(setFlash('Error setting up alcohol. Just quit, already!', 'red'));
      });
  }

  render() {
    const beers = this.state
    return (
      <h1>'Your list is ready for you!'</h1>
      
    )
  }

}

export default BreweryDrop;