import * as firebase from "firebase/app";
import 'firebase/storage';
import uploadFile from './uploadFile';

const firebaseConfig = {
  apiKey: "AIzaSyAQ9olIfEWy0ydA0yJU52qfH0paJn9MXIM",
  authDomain: "cornlet-prod.firebaseapp.com",
  databaseURL: "https://cornlet-prod.firebaseio.com",
  projectId: "cornlet-prod",
  storageBucket: "cornlet-prod.appspot.com",
  messagingSenderId: "88125142899",
  appId: "1:88125142899:web:59480abcd4cf2bd7eb7706",
  measurementId: "G-045Z67SPL6"
};

firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged((user) => {

//   if (user) {
//     store.dispatch({
//       type: 'USER_SET',
//       payload: user,
//     });

//     api.post('/user/save', user)
//       .catch(({ response }) => log('firebase', response));

//     api.get(`/user/${user.uid}/bm`)
//       .then(({ data }) => {
//         store.dispatch({
//           type: 'BM_SET',
//           payload: data,
//         })
//         api.get(`/chatroom/user/${user.uid}`)
//           .then(({ data }) => {
//             store.dispatch({
//               type: 'CHATROOMS_SET',
//               payload: data,
//             })
//             store.dispatch({
//               type: 'AUTHING_SET',
//               payload: false,
//             })
//           })
//           .catch(({ response }) => {
//             log('firebase', response);
//             store.dispatch({
//               type: 'AUTHING_SET',
//               payload: false,
//             });
//           })
//       })
//       .catch(({ response }) => {
//         log('firebase', response);
//         store.dispatch({
//           type: 'AUTHING_SET',
//           payload: false,
//         });
//       })
//   } 
//   else {
//     store.dispatch({
//       type: 'USER_SET',
//       payload: null,
//     });
//     store.dispatch({
//       type: 'AUTHING_SET',
//       payload: false,
//     });
//     store.dispatch({
//       type: 'CHATROOMS_SET',
//       payload: [],
//     });
//   }
// });

export default firebase;
export {
  uploadFile,
}