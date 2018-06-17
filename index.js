const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/faq', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/faq.html'));
});

app.listen(3000, function() {
  console.log('Server is running at port: 3000');
});

// const fetch = require('isomorphic-fetch');

// function fetchAPI2(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(res => res.json())
//       .then(data => resolve(data));
//   });
// }

// fetchAPI2('https://jsonplaceholder.typicode.com/users').then(data =>
//   console.log(data),
// );
