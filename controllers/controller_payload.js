const mercadopago= require("mercadopago");
const Order=require("../models/order")
mercadopago.configure({
    access_token:'TEST-8019769321834779-092217-d281738abe7f2432f62d5cf4d38fc263-705090051'
})
const payOrder= async (req, res) =>{
    
   
    let preference={
            items:[],
            back_urls: {
                success: "http://localhost:3000/send-order",
                failure: "http://localhost:3000",
                pending: "http://localhost:3000/send-order"
              },
    }
    

    req.body.cartItems.forEach(value=>{
        
        preference.items.push({
            title:value.name,
            unit_price:value.price,
            quantity:value.amount
        })
    
    })

  
    const response = await mercadopago.preferences.create(preference)
    
    const globalId=response.body.id;
    res.send(globalId);
}

const sendOrder= async(req,res)=>{

    const cartItems=[]
    
    req.body.cartItems.forEach(value=>{
        
        cartItems.push({
            product:value._id,
            amount:value.amount,
            subtotal:(value.price*value.amount)
        })

    })
    try {
       
        
        const consulta=new Order(
            {
            
            total:req.body.total,
            user:req.body.idUser,
            dispatched:false,
            description:cartItems
        }
        )
        const result=await consulta.save();
        
        res.send({result:true})
        
    } catch (error) {
        console.log(error)
        res.send({result:false})
    }
}



module.exports = { payOrder,sendOrder}