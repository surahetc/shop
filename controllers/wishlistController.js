const user=require('../models/user')
const cart=require('../models/cart')
const {item}=require('../models/item')
const wishlist=require('../models/wishlist')


module.exports.delete = (req,res)=>
{
    wishlist.deleteMany({},err=>
        {
            res.send("not deleted all")
        })
}
















module.exports.view = (req,res)=>

{
    const {username,item:name}=req.params
    console.log("Hello");
    wishlist.findOne({username},(err,result)=>
    {
        if(err)
        {
            res.status(404)
        }
        if(result)
        {
            console.log(result.items)
            res.send(result.items)
        }
    })
}

module.exports.addItems = async (req,res) => {
    const {username,item:name}=req.params
    let itemData = await item.findOne({name})
    wishlist.findOne({username},async (err,wishlistData)=>
    {
        if(err)
        {
            console.log("Wishlist not found");
        }
        console.log(wishlistData)
        if(!wishlistData)
        {
            try{
                    const newWishlist=new wishlist();
                    newWishlist.username=username;
                    newWishlist.items.push(itemData);
                    console.log(newWishlist)
                    const result = await newWishlist.save()
                    console.log(result)
                    
            }
            catch(err)
            {
                console.log("error found")
            }
            
            

        }
        else 
        {
            let itemMatch=wishlistData.items.filter(itemin=>itemin.name==itemData.name)
                    //if item not in list
                    if(itemMatch.length<=0)
                    {
                        console.log("Item not in wishlist, have to save")
                        wishlistData.items.push(itemData)
                        wishlist.replaceOne({username},wishlistData,(err,prev=>
                            {
                                if(err)
                                {
                                    console.log("Error in saving new item")
                                }
                                else
                                {
                                    console.log("Saved!!!")
                                }
                            }))
                       
                        
                        
                    }
        }
    })













    // item.findOne({name},(err,itemData)=>
    // {
    //     if(err)
    //     console.log("ERROR ITEM NOT FOUND")
    //     else
    //     {
    //         // console.log(username,itemData)
    //         wishlist.findOne({username},async (err,wishlistData)=>
    //         {
    //             if(err)
    //                 console.log("Error in finding wishlist")

    //             if(!wishlistData)
    //             {
    //                 let newWishlist=new wishlist();
    //                 newWishlist.username=username;
    //                 newWishlist.items[0]=itemData
    //                 console.log(newWishlist)
    //                 // newWishlist.save((err,result)=>
    //                 // {
    //                 //     if(err)
    //                 //     {
    //                 //         console.log('data not saved')
    //                 //     }
    //                 //     if(result)
    //                 //     {
    //                 //         console.log('data saved')
    //                 //     }
    //                 // })
    //                 newWishlist.save();

                    
                                        

    //             }
    //             if(wishlistData)
    //             {

    //                 let itemMatch=wishlistData.items.filter(itemin=>itemin.name==itemData.name)
    //                 if(itemMatch.length>0)
    //                 {
    //                     console.log("Item already in wishlist")
    //                 }
    //                 else
    //                 {
    //                     console.log("Item not in wishlist, have to save")
    //                     wishlistData.items.push(itemData)
    //                     wishlist.replaceOne({username},wishlistData,(err,prev=>
    //                         {
    //                             if(err)
    //                             {
    //                                 console.log("Error in saving new item")
    //                             }
    //                             else
    //                             {
    //                                 console.log("Saved!!!")
    //                             }
    //                         }))
                       
                        
                        
    //                 }

                    
    //             }

               
    //         })
    //     }
    // })

    
    // <----------------------------------------------------------------------------->
    // try{
    //     var wishlistData=await wishlist.findOne({username})
    //     var itemData=await item.findOne({name})
    //     if(!itemData)
    //         res.status(404).send('Item not found!')


    //     console.log(itemData)
    //     const name=itemData.name;
    //     const price=itemData.price;
    //     const imgSrc=itemData.imgSrc;




        

    //     //if no wishlist exists then
    //     if(!wishlistData)
    //     {
            
    //         var newWishlist =  new wishlist();
            
    //         newWishlist.username=username;

            
    //         newWishlist.items.push({name:name,imgSrc:imgSrc,price:price})
    //         console.log(newWishlist)
            
    //         await newWishlist.save()

    //     }
    //     else
    //     {
    //         console.log("Wishlist present")
    //         const index=wishlistData.items.indexOf({name:name,imgSrc:imgSrc,price:price})
    //         console.log(index)
    //         if(index>-1)
    //         {
    //             res.send("Already added to wishlist")
    //         }
    //         else
    //         {
    //         wishlistData.items.push({_id:name,imgSrc,price})
    //         newWishlist2 =  new wishlist();
    //         newWishlist2=wishlistData
    //         console.log("Working")
    //         const data = await newWishlist2.save();
    //         console.log("Working")
    //         return res.status(201).send(data);

    //         }
            

    //     }

    // }
    // catch
    // {
    //     console.log("ERROR")

    // }

}