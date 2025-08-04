//creo posts che contiene tutti i post dell'array dentro posts.js
const posts = require('../data/posts.js');

//creo la funzione index che contiene la lista di tutti i post
const index = (req, res) => {
  res.send('Lista di tutti i post');
}

//creo la funzione show che contiene tutti i dettagli del post preso in oggetto
const show = (req, res) => {
  res.send('Dettagli di un post');
}

//creo la funzione store per creare un nuovo post
const store = (req, res) => {
  res.send('Crea un nuovo post');
}

//creo la funzione update per aggiornare completamente un post
const update = (req, res) => {
  res.send('Aggiorna interamente un post');
}

//creo la funzione modify per aggiornare solo una parte del post
const modify = (req, res) => {
  res.send('Aggiorna parzialmente un post');
}

//creo la funzione destroy per eliminare un post
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