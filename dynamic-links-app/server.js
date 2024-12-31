
const express = require('express');
const app = express();

// Set up the view engine for rendering dynamic HTML
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for serving dynamic links
app.get('/', (req, res) => {
    const telegramLink = "";
    const registerLink = "https://dmwin1.com/#/register?invitationCode=56182142661";
    const ImageIcon = "https://i.ibb.co/Zd1MHpR/th.jpg";
    // Render the HTML template with dynamic links
    res.render('index', { telegramLink, registerLink , ImageIcon });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
