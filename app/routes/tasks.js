const express = require(`express`)
const router = express.Router()

const Task = require(`../models/Task`)

/**
 * GET: Returns one task with the task's id specified in the path
 */
router.get(`/:id`, async (req, res) => {
	try {
		const task = await Task.findById(req.params.id)
		if (!task) res.status(404).send(`Task with ID ${req.params.id} does not exist.`)
		else res.status(200).send(task)
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})

// TODO: Write 4 more handlers for create, read, update, and delete

router.post('/', async (req, res) => {
	const data = req.body; 

	try {

		const task = new Task ({
			UserId: req.user.Id,
            Text: data.Text,
            Done: false,
            Date: data.Date
		})
		if (task.Date == "") res.status(500).send('there is no date')
		if(task.Text == "") res.status(500).send('there is no text')
		const newTask = await task.save()
		if(!task) res.status(404).send(`Failed to create a task with information ${req.body}`)
		else res.status(200).send(task)
	} catch(error) {
		console.error(error)
		res.status(500).send('something went wrong.')
	}
})

router.get('/', async (req, res) => {
	try {
		const task = await Task.find({UserId: req.query.UserId})
		if(!task) res.status(404).send('There were no tasks in the database')
		else res.status(200).send(task)
	} catch (error) {
		console.error(error)
		res.status(500).send('something went wrong.')
	}
})

router.put('/:id', async (req, res) => {
	// try {
	// 	const newTask = await Item.findById(req.params.id).exec();
	// 	if (!newTask) res.status(404).send('There was no task to update with that ID number')

	// 	const task = await Task.findByIdAndUpdate(req.params.id, {$set:{Done:req.body.Done}})
		
	// 	if(!newTask) res.status(404).send('There was no task to update with that ID number')
	// 	else res.status(200).send(newTask); 
	// }
	// catch (error) {
	// 	console.error(error)
	// 	res.status(500).send('Something went wrong.')
	// }
	try {
		console.log(req.params.id)
		const item = await Item.findById(req.params.id).exec(); // Searching for item
		/*
		check if item
		return res.status(404).send("Not found")
		*/
		if (!item) return res.status(404).send("Not found") 
		console.log(item)
        item.set(req.body) // Toggline "done" feature
		const result = await item.save()
        res.send(result) // Returns status of "done" feature of item
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})

router.delete('/:id', async (req, res) => {
	try{
		const task = await Task.findByIdAndDelete(req.params.id)
		if(!task) res.status(404).send('There was no task by this id to delete')
		else res.status(200).send(task)

	} catch (error) {
		console.error(error)
		res.status(500).send("Something went wrong.")
	}
})

module.exports = router