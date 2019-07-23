import axios from "axios"
const searchimages = () => {

    axios.get('http://jsonplaceholder.typicode.com/todos',
        {
            params: {

                q: {},
            api_key: 'u01v1irwWhLtMyWRzhckeXuA0mPrIPfK'
            }

        })

        

};
// This is the .js file that I plan to build upon at a later point, with the goal being for the user to have a search
// bar to look up any character, location, or film, and then to have a GIF generate. 
export default searchimages 