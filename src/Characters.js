import React from 'react';

class Characters extends React.Component {

    constructor() {

        super();
        this.state = {
            loading: true
        } 
    }


    async componentDidMount() {
        const res = await fetch("https://ghibliapi.herokuapp.com/people");
        const json = await res.json()
        console.log(json)
        this.setState({ characters: json, loading:false})

    }
    renderCharacters (){
        console.log(this.state)
        if (this.state.loading) return <div>Loading</div>
        return this.state.characters.map(character => {
            return(
                <p>{character.name}</p>
            )
        })

    }
    render() {
        return (
        <div>{this.renderCharacters()}</div>  
        )

    }
}

export default Characters; 