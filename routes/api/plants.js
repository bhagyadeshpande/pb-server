const express = require('express');
const router = express.Router();

// Load Plant model
const Plant = require('../../models/Plant');

router.get('/test', (req, res) => res.send('plant route testing!'));

router.get('/', (req, res) => {
  Plant.find()
    .then(plants => res.json(plants))
    .catch(err => res.status(404).json({ noplantsfound: 'No plants found' }));
});

router.get('/:id', (req, res) => {  
  const id = req.params.id;
  Plant.findById(id)
    .then(plant => res.json(plant))    
    .catch(err => res.status(404).json({ noplantfound: 'No plant found' }));       
});

router.post('/', (req, res) => {
  Plant.create(req.body)
    .then(plant => res.json({ msg: 'Plant added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this plant' }));
});

router.put('/:id', (req, res) => {  
  Plant.findByIdAndUpdate(req.params.id, req.body)
    .then(plant => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Plant.findByIdAndRemove(req.params.id, req.body)
    .then(plant => res.json({ mgs: 'Plant entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a plant' }));
});

module.exports = router;