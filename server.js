
const express = require('express');
const app = express();

app.get('/get-ip', (req, res) => {
//   const ip = JSON.stringify(req);
  res.send(`Your IP address is: ${req.ip}`);
});

app.get('/user', (req, res) => {
  const userAgent = req.get('User-Agent')
  res.send(`${userAgent}`)
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
