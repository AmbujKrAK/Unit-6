const connect = require('./configs/db')
const app = require('./index')

let PORT = 5000

app.listen(PORT, async () => {
    try {
        await connect()
        console.log(`Listening to ${PORT}`)
    } catch (error) {
        console.log(error);
    }
})
