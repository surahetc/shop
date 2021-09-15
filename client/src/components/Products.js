import React from 'react';
import Item from './Item';
const axios = require('axios');


function Products() {

    const [items,setItems]=React.useState("");

        React.useEffect(()=>{
            axios.get('/products/items').then((response)=>
            {
                setItems(response.data)
            }).catch((err)=>{
                console.log(err);
            });
            
            console.log(items)
        },[]);
    return (
        
        <div>
            <h3>All the items in stock</h3>
            <Item title="Iphone" price="100000" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000"/>
            <Item title="Iphone" price="100000" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000"/>
            <Item title="Iphone" price="100000" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000"/>
        </div>
    )
}

export default Products
