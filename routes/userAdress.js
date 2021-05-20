const express = require ('express')
const router = express.Router()
const UserAdress = require('../models/userAdress')

//Getting all
router.get('/', async (req,res)=>{
    try {
        const userAdress = await UserAdress.find()
        res.json({userAdress})
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

//Getting one
router.get('/:id', getUserAdress, (req,res)=>{
    res.send(res.userAdress)
})

//Creating one
router.post('/', async (req,res)=>{
    const userAdress = new UserAdress({
        name: req.body.name,
        userAdress: req.body.userAdress
    })
    try{
        const newUserAdress = await userAdress.save()
        res.status(201).json(newUserAdress)
    } catch (err){
        res.status(400).json({message: err.message})
    }
})

//Updating one
router.patch('/:id', getUserAdress, async (req,res)=>{
    if (req.body.name != null){
        res.userAdress.name = req.body.userAdress
    }
    if (req.body.userAdress != null){
        res.userAdress.userAdress = req.body.userAdress
    }
    try {
        const updateUserAdress = await res.userAdress.save()
        res.json(updateUserAdress)
    } catch (err){
        res.status(400).json({message: err.message})
    }
})

//Deleting one
router.delete('/:id', getUserAdress, async (req,res)=>{
    try {
        await res.userAdress.remove() 
        res.json({message: 'Adress '+res.userAdress.name+' deleted'})
    } catch (err){
        return res.status(500).json({message: message.err})
    }
})

async function getUserAdress (req, res, next) {
    let userAdress
    try{
        userAdress = await UserAdress.findById(req.params.id)
        if (userAdress == null){
            return res.status(404).json({message: 'Cannot find id'})
        }
    } catch (err){
        return res.status(500).json({message: err.message})
    }

    res.userAdress = userAdress
    next()

}
module.exports = router
