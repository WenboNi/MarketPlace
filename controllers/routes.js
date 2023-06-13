const { User } = require('./models/index');
const { Landscape } = require('./models/index');

// C R U D

app.get('/user', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{ model: Landscape}]
        });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
})

app.post('/user', async (req, res) => {
    const { body : { fullname, age, height, occupation } } = req;
    try {
        const users = await User.create({
            fullname, age, height, occupation
        });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
})

//READ
app.get('/', (req, res) => {
    Landscape.findAll({
        include: [{ model: User}]
    }).then(results => {
        res.status(200).json(results);
    }).catch(err => res.status(500).json(err))
})

//CREATE
app.post('/', (req, res) => {
    Landscape.create({
        weeded: req.body.weeded,
        dogPeed: req.body.dogPeed,
        isGrassAlive: req.body.isGrassAlive,
        squareFootage: req.body.squareFootage,
        user_id: req.body.user_id
    }).then(results => {
        res.status(200).json(results);
    }).catch(err => res.status(500).json(err))
})

//UPDATE
app.put('/:id', (req, res) => {
    Landscape.update(
        {
            squareFootage: req.body.squareFootage,
        },
        {
            where: {
                landscape_id: req.params.id
            }
        }
    ).then(results => {
        res.status(200).json(results);
    }).catch(err => res.status(500).json(err))
})

//DELETE
app.delete('/:id', (req, res) => {
    Landscape.destroy({
        where: {
            landscape_id: req.params.id
        }
    }).then(results => {
        res.status(200).json(results);
    }).catch(err => res.status(500).json(err))
})

app.get('/seed', (req, res) => {
    Landscape.bulkCreate(seed()).then(res.send('Success!')).catch(err => res.json(err));
})

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on ${PORT}`);
    })
})