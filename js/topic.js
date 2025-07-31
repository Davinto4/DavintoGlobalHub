// js/topic.js
import { db } from './firebase.js';
import { ref, push, onChildAdded, get, child } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const params = new URLSearchParams(window.location.search);
const topicId = params.get('id');

const topicRef = ref(db, `topics/${topicId}`);
get(topicRef).then(snapshot => {
  const topic = snapshot.val();
  document.getElementById('topicTitle').innerText = topic.title;
  document.getElementById('topicContent').innerText = topic.content;
});

window.postReply = function () {
  const reply = document.getElementById('replyInput').value;
  const replyRef = ref(db, `replies/${topicId}`);
  push(replyRef, { reply });
};

const replyRef = ref(db, `replies/${topicId}`);
onChildAdded(replyRef, snapshot => {
  const div = document.createElement('div');
  div.innerText = snapshot.val().reply;
  document.getElementById('replies').appendChild(div);
});


