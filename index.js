import express from 'express'
import randomPuppy from 'random-puppy'

const port = 3001

const app = express()

app.get('/', async (req, res) => {
	try {
		const subReddits = ['dankmemes', 'meme', 'memes']
		const random = subReddits[Math.floor(Math.random() * subReddits.length)]

		let img = await randomPuppy(random)
		if (img.endsWith('.mp4')) img = await randomPuppy(random)

		res.status(200).json({ url: img })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message, code: 500 })
	}
})

app.listen(port, () => {
	console.log('listening on port 3001')
})
