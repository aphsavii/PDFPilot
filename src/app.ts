import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
// app.use(cors({
//     origin: '*'
// }));
app.use(express.urlencoded({ extended: true }));


// Routes import
import embedRouter from './routes/embed.routes';
import queryRouter from './routes/query.routes';
// Routes
app.use('pdf-chatbot/embed',embedRouter);
app.use('pdf-chatbot/ask',queryRouter);
app.get('pdf-chatbot/', (req, res) => {
    res.send('Hello World!');
});

export default app;