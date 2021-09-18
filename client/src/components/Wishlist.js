import React from "react";
import axios from "axios";
import ItemWishlist from "./ItemWishlist";

function Wishlist() {
  const [items, setItems] = React.useState([]);
  const [user, setUser] = React.useState("");

  function deleteAll()
  {
    axios.get('http://localhost:5000/wishlist/delete')
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
          setUser(response.data);
        }
      })
      .catch((err) => {
        if (err) {
          setUser("");
        }
      });

    axios
      .get(`http://localhost:5000/wishlist/view/${user}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        if (err) console.log("Fetching error");
      });
  }, []);

  return (
    <div>
      <h2>{user}</h2>
      {items.map((item) => {
        return (
          <ItemWishlist
            key={item.name}
            title={item.name}
            src={item.imgSrc}
            price={item.price}
          />
        );
      })}

      <div><button className="red deleteAll" onClick={deleteAll}>Delete All</button></div>
    </div>
  );
}

export default Wishlist;
