import firebase from 'src/services/firebase';
import Compressor from 'compressorjs';
import api from 'src/util/api';

// REJECT: Upload error
// RESOLVE: Img download url
const uploadFile = (file, directory) => new Promise((resolve, reject) => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const path = `${directory}/${file.name}`;
  
  // check if file already exists in storage
  storageRef.child(path).getDownloadURL()
    .then((url) => {
      resolve(url)
    })
    .catch(() => {
      // file doesn't already exist in storage
      // compress file
      new Compressor(file, {
        quality: 0.6,
        convertSize: 1,
        success(result) {
          const uploadTask = storageRef.child(path).put(result);
          uploadTask.on('state_changed',
            (snapshot) => {},
            (e) => {
              reject(e);
            },
            () => {
              // UPLOAD SUCCESS
              uploadTask.snapshot.ref.getDownloadURL().then((src) => {
                // STORE METADATA IN DB
                const data = {
                  name: file.name,
                  src,
                  path
                }
                api.post('/file/create', data)
                  .then(() => resolve(src))
                  .catch((e) => reject(e))
              });
            });  
        },
        error(err) {
          console.log(err.message);
        },
      });
    });
});

export default uploadFile;