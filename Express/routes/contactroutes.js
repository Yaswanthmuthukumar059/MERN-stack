const express = require('express')
const router = express.router('Router')
const contact = require('../models/contactmodel')
router.get('/all',async(req,res) => {
    try{
        const contacts = await contact.find()
        return res.status(200).json(contacts)
    } catch(error) {
        return res.status(500).json({message: error.message})
    }
})
router.post('/add', async (req,res) => {
    try{
        const newcontact = new contacts(req.body)
        const { name, phone } = newcontact
        if(!phone || !name) {
            return res.status(400).json({message: "All fields required"})
        }
        await newcontact.save()
        return res.status(200).json(newcontact)
    } catch(error) {
        return res.status(500).json({message: error.message})
    }
})
module.exports=router
router.put('/edit/:id', async (req,res) => {
    try{
        const id = req.params.id
        const existingcontact = await Contacts.findOne({_id: id})
        if(!existingcontact) {
            return res.status(400).json({message: "Contact not found"})
        }
        const updatedproduct = await Contacts.findByIdAndUpdate(id, req.body, { new:true})
    }catch (error) {
        return res.status(500).json({message: error.message})
    }
})
router.delete('/delete/:id', async (req,res) => {
    try{
        const id = req.params.id
        const existingcontact = await Contacts.findOne({_id: id})
        if(!existingcontact) {
            res.status(404).json({message:"contact not found"})
        }
        await Products.findByIdAndDelete(id)
        return res.status(200).json({message:"contact deleted"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
})
module.exports = router