import { Router } from "express";

const router = Router()

const cart = []
let id = 0

router.post('/', (req, res) =>{
  id++
  const pid = id
  const newContent = req.body
  products.push(newContent)
  products.push(pid)
  res.status(200).send({ data : newContent})
})


router.get('/:cid', (req, res) =>{
  const ids = cart.map(cid)
  res.send(res.status(200).send(ids))
})

router.post('/:cid/product/:pid', (req, res) =>{
  // no se como hacer el ultimo post
})



export default router;