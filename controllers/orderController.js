export let orderController = (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

export let orderAddress=(req,res)=>{
    res.send("succesfully address ")
}

export let ordermobile=(req,res)=>{
    let num = req.parems.mobile
    res.send(num)
}

export let ordercity=(req,res)=>{
    res.send(" city succesfully  ")
}