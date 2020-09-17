import express from 'express';
import signsRouter from './routes/signs';
import mongoose from 'mongoose';

// MongoDB Connection
const mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cgzvf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('open', () => {
  console.log('DB Connected');
});

db.on('error', () => {
  console.log('DB Connection failled');
});

const app = express();
app.use(express.json());

app.use('/signs', signsRouter);

app.listen(process.env.PORT, () => {
  console.log(`App is listening to localhost:${process.env.PORT} 🚀`);
});
