import jwt from 'jsonwebtoken'

const adminAuth=(req,res,next)=>{
    try {
        const token = req.header("Authorization")   
        console.log(token);
         
        if (!token) {
            return res.status(403).json({ message: "Access denied. No token provided." });
        }
        
        
        const Token_decode= jwt.verify(token,process.env.JWTKEY)
        if(Token_decode!=process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            res.json({success:false,message:"not authorized login access"})
        }
        next()

    } catch (error) {
        res.status(500).json({message:"something went wrong"})
        
    }
   
}
export default adminAuth;
