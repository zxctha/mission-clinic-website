import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve index.html as the main entry point
app.get('*', (req, res, next) => {
    // If the request doesn't have an extension, it might be a page
    if (!path.extname(req.path)) {
        res.sendFile(path.join(__dirname, 'index.html'));
    } else {
        next();
    }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
