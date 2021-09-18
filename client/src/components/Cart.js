import React from "react";
import axios from "axios";



function Cart() {
  const [user, setUser] = React.useState("");
  const[items,setItems]=React.useState([])


  function handleBuy()
  {
    axios.get(`http://localhost:5000/cart/delete/${user}`)
    setItems([])
  }

  React.useEffect(() => {


    











    axios
      .get("http://localhost:5000/getUser", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          axios.get(`http://localhost:5000/cart/getItem/${response.data}`).then(response=>{

      setItems(response.data)
        
      })
          setUser(response.data);
        }
      })
      .catch((err) => {
        if (err) {
          setUser("Error");
        }
      });


      
  }
  
  
  
  
  
  
  
  
  
  
  
  , []);

  if(items.length===0 || user==="Error")
  return (
    <div>
      <h2>Please Login or Your cart is empty</h2>
    </div>
  );

  else
  return (
    <div>
      <h2>Welcome {user}, Here are your cart products</h2>


      {items.map((item)=>{
        return (<h3>{item.name}</h3>)

      })}

      <button className="deleteAll" onClick={handleBuy}>Buy</button>
    </div>
  );
}

export default Cart;
