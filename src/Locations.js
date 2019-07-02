import React from 'react';


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