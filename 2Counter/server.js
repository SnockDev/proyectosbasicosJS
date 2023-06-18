import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'contador.html'));
});

app.listen(3000, () => {
  console.log('Escuchando en http://127.0.0.1:3000');
});