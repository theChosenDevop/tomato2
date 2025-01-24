import mongoose from "mongoose"

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://theChosenDevop:b5uiQBQOt6fmd9DT@foodapp.niiyf.mongodb.net/?retryWrites=true&w=majority&appName=foodApp').then(() => {console.log('DB connected');
    }).catch((error) => console.log(error))
}

export default connectDB;