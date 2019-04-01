import * as firebase from "firebase"
var config = {
    apiKey: "AIzaSyAIsM2AOhV2UnJN85F0xoaca8RieBpRsoU",
    authDomain: "note-manager-8efbb.firebaseapp.com",
    databaseURL: "https://note-manager-8efbb.firebaseio.com",
    projectId: "note-manager-8efbb",
    storageBucket: "note-manager-8efbb.appspot.com",
    messagingSenderId: "719648646238"
  };

firebase.initializeApp(config);
export const noteData = firebase.database().ref('dataForNote');

// var data = firebase.database().ref('dataForNote/' );
//     data.once("value").then((snapshot) => {
//       console.log('snapshot.val()',snapshot.val() )
//     })

// var data = firebase.database().ref('dataForNote/node_01');
//     data.set({
//      title: "Thursday, May 05, 2019",
//      content: "The effect of the write will be visible immediately"
//     })

// var data = firebase.database().ref('dataForNote' );
//     data.push({
//       title: "ghi chu so 5",
//       content: "noi dung ghi chu so 5"
//     })

  // var data = firebase.database().ref('dataForNote' );
  //     data.child("-Laun4mLY5zxJH4JeZy1").remove()