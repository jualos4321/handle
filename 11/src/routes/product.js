import { Router, query } from "express";

const products = []
let id = 0

const router = Router()

router.get('/', (req, res) =>{

    const limiting = req.query.limit

    if(limiting = 0){
        res.send(products)
       }else{
        res.send(products.slice(limiting))
       }
   
})

router.get('/', (req,res) =>{
    const limit = req.query.limit
    const query = query.find()
    if(limit = 0){
        limit = 10
        res.send(limit)
       }else{
        res.send(limit)
       }
{ $sort: {asc: 1} {desc: -1}}

})

router.get('/:pid', (req,res) =>{
    res.send(req.params.pid.find(req => req.pid === pid))
})

router.post('/', (req, res) =>{
    id++
    const pid = id
    const newContent = req.body
    products.push(newContent)
    products.push(pid)
    res.status(200).send({ data : newContent})
})

router.put('/:pid', (req, res) =>{
    const newUpdate = req.body
    products.push(newUpdate)
    products.push(pid)
    res.status(200).send({ data : newUpdate})
})

router.delete('/:pid', (req, res) =>{
     const borrar = (req.params.pid.find(req => req.pid === pid))
     borrar = []
})

export default router;