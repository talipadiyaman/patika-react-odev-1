import axios from "axios";

async function getData (Number) {
    const { data: users1 } = await axios ( 
        ("https://jsonplaceholder.typicode.com/users/1")
       );
    
    const { data: posts } = await axios ( 
            ("https://jsonplaceholder.typicode.com/posts?userId=1")
        );
    
       console.log("users1", users1);
       console.log("posts", posts);
    }
    export default getData(3);

