import React, { Component, Fragment } from 'react';
// import isEmpty from 'lodash.isempty';

// examples:
import GoogleMap from './GoogleMap';


class Heatmap extends Component {
  
  state = {
    places: [{
      lat: 37,
      lng: 127
    }]
  };

  componentDidMount() {
    // fetch('places.json')
    //   .then(response => response.json())
    //   .then(data => this.setState({ places: data.results }));
    console.log(process.env.REACT_APP_MAP_KEY);
  }

  render() {
    const data = this.state.places.map(place => ({
      lat: place.lat,
      lng: place.lng,
      weight: Math.floor(Math.random() * Math.floor(5)),
    }));
    const heatmapData = {
      positions: data,
      options: {
        radius: 20,
        opacity: 1,
      },
    };

    return (
      <Fragment>
        { (
          <GoogleMap
            defaultZoom={13}
            defaultCenter={{lat: 37,lng: 127}}
            heatmap={heatmapData}
            bootstrapURLKeys={{
              key: "AIzaSyCO4bWlm05-FqeqtFvrE4TAcYQ2ZBc2SVU",
              libraries: ['visualization'],
            }}
          />
        )}
      </Fragment>
    );
  }
}

export default Heatmap;