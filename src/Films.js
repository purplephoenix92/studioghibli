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




