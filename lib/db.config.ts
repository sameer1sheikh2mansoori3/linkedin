import mongoose, { connection } from "mongoose"

let isConnect = connection || Boolean

const connectDb = async () => {
    if (isConnect) {
        console.log(`hurray !!!!! db is connect`)
        return;
    }
    try {
        const connect = await mongoose.connect(process.env.MONOGO_URL!)
        console.log(`hurray !!!!! db is connect`)
    } catch (error) {
        console.log(`error in connection`, error)
        return
    }

}
export default connectDb;