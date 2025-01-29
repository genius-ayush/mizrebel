import { Router } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() ; 

const router = Router() ; 


router.post('/register' , (req , res)=>{

    const {name , email , password} = req.body ; 
    
    
})

router.post('/login' , (req , res)=>{

})

export default router ; 