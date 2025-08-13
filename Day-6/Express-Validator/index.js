import express from 'express';
import { query } from 'express-validator';

const app = express();


app.use(express.json());


app.get("/hello",query('name').notEmpty()  ,(req, res)=>{
  res.send(`Hello , ${req.query.name}`);
})

app.listen(3000, ()=>{
  console.log("Server is running on port 3000");
})