import { connectDB } from './DB/connectDB'
import { sendMessage } from './Kafka/producer'
import { getAllUsers } from './Service/getAllUser'
connectDB()
let users = await getAllUsers()
// console.log("users", users)

for (let i = 0; i < 100; i++) {
    // sendMessage(JSON.stringify(JSON.stringify(users) + i))
    sendMessage("Hihihi")
}

// await sendMessage(JSON.stringify(users))

