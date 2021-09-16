const axios = require('axios');

axios.get('http://localhost:5000/products/items').then((response)=>{
        
        const result=response.data
        console.log(result)
        setItems(result)
    }).catch(err=>{
        if(err)
        console.log("Fetching error")
    })