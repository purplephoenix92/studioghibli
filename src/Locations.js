import React from 'react';
import axios from 'axios'; 

class Locations extends React.Component {

    constructor() {

        super();
        this.state = {
            loading: true
        }
    }


    async componentDidMount() {
        const res = await fetch("https://ghibliapi.herokuapp.com/locations");
        const json = await res.json()
        console.log(json) 
        this.setState({locations: json, loading: false})

    }
// Above is the location endpoint. As opposed to using the endpoint that would have a '?' that would 
// only be searching for certain items. I wanted to pull from the entire available list for locations
    searchimages() {

      axios.get('http://jsonplaceholder.typicode.com/todos',
      {
          params: {

              q: {},
          api_key: 'u01v1irwWhLtMyWRzhckeXuA0mPrIPfK'
          }

      })

    }

    renderLocations() {
        console.log(this.state)
        if (this.state.loading) return <div>Loading</div>
        return this.state.locations.map(Location => {
          return (
            <p>{Location.name}</p>
          )
        })
      }
      render() {
        return (
          <div>{this.renderLocations()}</div>
        )
    
      }
    
}

export default Locations; 