import express from 'express'

const app = express()

app.get('/test',(req:any,res:any)=>{
    res.write("welcome to gcp test page")
})
app.listen(8056,()=>{
    console.log("server running at 8056")
})