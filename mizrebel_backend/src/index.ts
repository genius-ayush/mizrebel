import express from "express";
import cors from 'cors' ;
import authRoutes from './routers/auth' ; 
import userRoutes from './routers/user' ;
import productRoutes from './routers/product' ; 
import categoryRoutes from './routers/category' ; 
import cartRoutes from './routers/cart' ; 

const app = express() ; 
const port = 3000 ; 

app.use(cors()) ;
app.use(express.json()) ; 

app.use('/auth' , authRoutes) ; 
app.use('/user' , userRoutes) ; 
app.use('/product' , productRoutes) ; 
app.use('/category' , categoryRoutes) ; 
app.use('/cart' , cartRoutes) ; 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})