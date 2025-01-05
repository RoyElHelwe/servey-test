import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from Express with TypeScript!' });
});

app.listen(PORT, () => {
  console.log(`Express server is running at http://localhost:${PORT}`);
});
