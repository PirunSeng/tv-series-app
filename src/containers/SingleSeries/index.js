import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';

class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount(){
    const { id } = this.props.match.params;

    fetch(`http://api.tvmaze.com/shows/${id}`)
    .then(response => response.json())
    .then(json => this.setState({ show: json }));
  }

  render(){
    const { show } = this.state;

    return(
      <div>
        { show === null && <Loader /> }
        {
          show !== null
          &&
          <div>
            <p>Name : { show.name }</p>
            <p>Premior : { show.premiered }</p>
            <p>Type : { show.type }</p>
            <p>
              <img alt="Show Image" src={show.image.medium} />
            </p>
            <Link to="/">
              Go to Series List
            </Link>
          </div>
        }
      </div>
    )
  }
}

export default SingleSeries;
