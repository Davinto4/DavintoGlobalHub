// js/forum.js
import { db } from './firebase.js';
import { ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

window.createTopic = function () {
  const title = document.getElementById('topicTitle').value;
  const content = document.getElementById('topicContent').value;
  const topicRef = ref(db, 'topics');
  const newTopic = push(topicRef);
  set(newTopic, { title, content });
};

const topicRef = ref(db, 'topics');
onChildAdded(topicRef, snapshot => {
  const div = document.createElement('div');
  const topic = snapshot.val();
  div.innerHTML = `<h3><a href="topic.html?id=${snapshot.key}">${topic.title}</a></h3><p>${topic.content}</p><hr>`;
  document.getElementById('topicList').appendChild(div);
});

