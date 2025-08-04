const posts = require('../data/posts.js');

const index = (req, res) => {
  res.send('Lista di tutti i post');
}

const show = (req, res) => {
  res.send('Dettagli di un post');
}

const store = (req, res) => {
  res.send('Crea un nuovo post');
}

const update = (req, res) => {
  res.send('Aggiorna interamente un post');
}

const modify = (req, res) => {
  res.send('Aggiorna parzialmente un post');
}

const destroy = (req, res) => {
  res.send('Elimina un post');
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}