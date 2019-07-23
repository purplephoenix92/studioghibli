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
        return this.state.characters.map((Characters, index) => {
            return(
                <p key={'Characters-' + index} >{Characters.name}</p>
            )
        })
// As listed above it is better to have props to have their own unique key, so that is why the key is referencing the particular page, and whereever it happens to be in the index
// This above endpoint was pulled from the API to give a complete list of characters. 
    }
    render() {
        return (
        <div>{this.renderCharacters()}</div>  
        )

    }
}

export default Characters; 