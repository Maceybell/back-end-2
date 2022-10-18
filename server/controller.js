const houses = require('./db.json')
const nextHouse = 4


module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body

        let newHouse = {
            id: nextHouse,
            address,
            price,
            imageURL
        }

        

        houses.push(newHouse)
        res.status(200).send(houses)

        nextHouse ++
    },
    updateHouse: (req, res) => {
        let type = req.body.type
        let id = req.params.id
        let index = houses.findIndex(element => element.id === +id)
        if ( type === "plus"){
            houses[index].price+= 10000
            res.status(200).send(houses)
        } else if (type === "minus"){
            houses[index].price-= 10000
            res.status(200).send(movies)
        } else {
            res.sendStatus(400)
        }
    },
    deleteHouse: (req, res) =>{
        const deleteId = req.param.deleteId
        let index = houses.findIndex(element => element.id === +deleteId)
        houses.splice(index, 1)
        res.status(200).send(houses)
    } ,
}