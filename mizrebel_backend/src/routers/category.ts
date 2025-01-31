import { Router } from "express";
import { authenticateUserJwtAdmin , authenticateUserJwtUser } from "../middleware";
const router = Router() ; 


// create a new category(admin)
router.post("/categories" ,authenticateUserJwtAdmin ,  (req , res)=>{

    
})


// update a categorory(admin)
router.patch("/categories/:id" , authenticateUserJwtAdmin , (req , res)=>{
    
})


// delete a category(admin)
router.delete("/categories/:id" , authenticateUserJwtAdmin , (req , res)=>{

})

// get all categories
router.get("/categories" ,authenticateUserJwtUser , (req , res)=>{

})

export default router ; 