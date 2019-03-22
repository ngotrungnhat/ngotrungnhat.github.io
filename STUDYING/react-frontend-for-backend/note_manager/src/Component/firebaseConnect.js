import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyAIsM2AOhV2UnJN85F0xoaca8RieBpRsoU",
  authDomain: "note-manager-8efbb.firebaseapp.com",
  databaseURL: "https://note-manager-8efbb.firebaseio.com",
  projectId: "note-manager-8efbb",
  storageBucket: "note-manager-8efbb.appspot.com",
  messagingSenderId: "719648646238"
};
firebase.initializeApp(config);
export const noteData = firebase.database().ref('dataForNote')