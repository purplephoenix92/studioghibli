import React, { Component } from 'react';


// import People from './People';
class Films extends Component {

  constructor() {

    super();

    this.state = {
      loading: true

    };
  }
  async componentDidMount() {
    const res = await fetch("https://ghibliapi.herokuapp.com/films")
    const json = await res.json()
    console.log(json)
    this.setState({ films: json, loading: false })

  }

  // Above is the location endpoint. As opposed to using the endpoint that would have a '?' that would 
  // only be searching for certain items. I wanted to pull from the entire available list for films.
  // Below the function here says that if this.state.loading was true(which it says in the above async component didMount)
  // Then this would map the film list to the webpage for people to view. WIthin the API, the title is the specific component within that
  //  unique ID that I wanted displayed, that is why it returns film.title on the page. 

  renderFilms() {
    console.log(this.state)
    if (this.state.loading) return <div>Loading</div>
    return this.state.films.map(film => {
      return (
        <p>{film.title}</p>
      )
    })
  }
  render() {
    return (
      <div>{this.renderFilms()}</div>
    )

  }


}

export default Films;




