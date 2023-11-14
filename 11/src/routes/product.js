import { Router } from "express";

const products = []
let id = 0

const router = Router()

router.get('/', (req, res) =>{

    const limiting = req.query.limit

    if(limiting = []){
        res.send(products)
       }else{
        res.send(products.slice(limiting))
       }
   
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