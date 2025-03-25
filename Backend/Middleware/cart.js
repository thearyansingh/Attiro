import jwt from "jsonwebtoken"
const cartAuth=async(req,res,next)=>{
    const token = req.headers["authorization"];
1
if(!token){
    res.json({success:"false",message:"user not authenticated"});
}
try {

const Token_decode=jwt.verify(token,process.env.JWTKEY)
// console.log(Token_decode);

    req.body.userId=Token_decode.id; 
    next();
} catch (error) {
    res.json({success:"false",message:"server error"});
    
}
}

export default cartAuth