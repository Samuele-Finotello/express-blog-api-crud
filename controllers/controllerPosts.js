//creo posts che contiene tutti i post dell'array dentro posts.js
const posts = require('../data/posts.js');

//creo la funzione index che contiene la lista di tutti i post
const index = (req, res) => {
  res.json(posts);
}

//creo la funzione show che contiene tutti i dettagli del post preso in oggetto
const show = (req, res) => {
  const id = req['params']['id'];

  const postId = posts.find((item) => item['id'] === parseInt(id))

  res.json(postId);
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
  const eliminato = req['params']['id'];

  const postEliminato = posts.find((item) => item['id'] === parseInt(eliminato))

  posts.splice(posts.indexOf(postEliminato), 1);

  res.status(204);

  res.json('');
  console.log('Lista aggiornata:');
  console.log(posts);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}