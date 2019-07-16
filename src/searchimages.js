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

export default searchimages 