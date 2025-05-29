const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to EJS Page' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
