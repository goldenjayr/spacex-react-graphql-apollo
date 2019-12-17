const app = require('express')()
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const PORT = process.env.PORT || 7000

// ALlow cross-origin
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})