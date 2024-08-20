const express = require('express');
const router = express.Router();
const Person = require('./../models/person');


//POST route to add a person
router.post('/', async (req, res) => {

  try{
    const data = req.body // Assuming the request body contains the person data
  
    //create a new Person document using the mongoose model
    const newPerson = new Person(data)
  
    //save the new person to the database 
    const response = await newPerson.save();
    console.log(response)
    console.log('data saved');
    res.status(200).json(response);
  }
  
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
  }
  })

  //GET method to get a  person

  router.get('/',async (req, res) =>{
  try{
    const response = await Person.find();
    console.log('data saved');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
  }
})

//Worktype
router.get('/:workType', async(req, res)=>{
  try{
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){

      const response = await Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error: 'Invalid work type'});
    }
  

  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
  }
})
  
module.exports = router;