import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import scrollToComponent from 'react-scroll-to-component';

class Map extends Component {
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoia2FuZ3AxODMiLCJhIjoiY2o4a25wdnB4MGZjaTJ3bXZrZ3lqanl4ZyJ9.15XvXGwFuUbl5uhPOEW2QA';
        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/kangp183/cj94myyyonrxj2qp9l1uc3v5l',
          center: [-111.728694, 40.310700],
          zoom: 17.5
        });
    
        map.on('load', () => {
          var marker = new mapboxgl.Marker().setLngLat([-111.72867, 40.31083]).addTo(map);
    
        });
        
        
        this.props.scrollMap(this.refs.scroll)
    }
    render() {
        
        
        return (
            <div ref="scroll">
                 <div  id="map"></div> 
            </div>
        )
    }
    
}
   
export default Map;