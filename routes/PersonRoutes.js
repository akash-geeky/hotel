const express = require('express')
const router = express.Router();
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);



router.post('/', async (req, res) => {
    try {
      
      const data = req.body; // assuming array of people
     
  
      const newPerson = new Person(data);
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    } catch (err) {
      console.log('err')
      res.status(500).json({ error:'Internal server error'});
    }
  });

  router.get('/', async (req, res) => {
    try {
      const data = await Person.find();
      console.log('data found');
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/:workType', async (req, res) => {
    try {
      const workType = req.params.workType;
      if (['chef', 'manager', 'waiter'].includes(workType)) {
        const response = await Person.find({ work: workType });
        console.log('response fetched');
        res.status(200).json(response); // <- status should be 200 here
      } else {
        res.status(404).json({ error: 'Invalid work type' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.put('/:id',async(req,res)=>{
    try{
      const personId = req.params.id;
      const updatedPersonData = req.body;
      const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
        new : true,
        runValidators : true,
      })
      if(!response){
        return res.status(404).json({error:'Person not found'})
      }
      console.log('data updated')
      res.status(200).json(response);;



    }catch(err){
      console.log('internal server error')
      res.status(500).json({error:'Internal server error'})

    }

  })

  module.exports = router;