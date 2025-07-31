// js/chat.js
import { auth, db } from './firebase.js';
import { ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

window.signup = function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password).then(() => alert('Signed up!')).catch(alert);
};

window.login = function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById('loginSection').style.display = 'none';
      document.getElementById('chatSection').style.display = 'block';
    })
    .catch(alert);
};

window.sendMessage = function () {
  const msg = document.getElementById('messageInput').value;
  const chatRef = ref(db, 'messages');
  push(chatRef, { message: msg });
};

const chatRef = ref(db, 'messages');
onChildAdded(chatRef, snapshot => {
  const chatBox = document.getElementById('chatBox');
  const p = document.createElement('p');
  p.innerText = snapshot.val().message;
  chatBox.appendChild(p);
});

