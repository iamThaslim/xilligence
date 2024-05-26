import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './config/dbConnect.js';
import userRoutes from './routes/userRoute.js';
import patientRoutes from './routes/patientRoute.js';

const PORT = process.env.PORT || 8080;

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const startServer = async () => {
    try {
        await connectToDatabase();
        // Start server after database synchronization
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error creating DB & tables', error);
    }
};

startServer();

app.get('/', (req, res) => {
    res.send('Server is Running')  
})

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/patient', patientRoutes);




