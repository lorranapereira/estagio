let storageRef = firebase.storage().ref();
const uploader = document.getElementById('up');
// Required for side-effects


algo = function (evt) {
  console.log("foi");  
  evt.stopPropagation();
  evt.preventDefault();
  file = evt.target.files[0];
  let metadata = {
    'contentType': file.type
  };
  document.getElementById('file').disabled = false; 
  file2 = file; 
  document.getElementById('enviar').style.display = 'block';  

  
};




document.getElementById('enviar').addEventListener('click',function (metadata) {
  console.log(document.getElementById('file').value);
  storageRef.child('images/' + file2.name).put(file2, metadata).then(function(snapshot) {
      console.log('Uploaded', snapshot.totalBytes, 'bytes.');
      console.log('File metadata:', snapshot.metadata);
      // Let's get a download URL for the file.
      snapshot.ref.getDownloadURL().then(function(url) {
        console.log('File available at', url);
        // [START_EXCLUDE]
        // [END_EXCLUDE]
      });
      var task = firebase.storage().ref('images').put(file2);
        task.on('state_changed',
          function progress(snapshot){
            var percentage = (snapshot.bytesTransferred /
              snapshot.totalBytes) * 100;
              uploader.value = percentage;
          });
    }).catch(function(error) {
      // [START onfailure]
      console.error('Upload failed:', error);
      // [END onfailure]
    });
    // [END oncomplete]
  
});

document.getElementById("button").addEventListener('click',function () {
  var storage = firebase.storage();  
  var storageReff = storage.ref();
  var listRef = storageReff.child('images');
  listRef.listAll().then(function(res) {
    res.prefixes.forEach(function(folderRef) {
      // All the prefixes under listRef.
    });
    res.items.forEach(function(itemRef) {
      // All the items under listRef.
    });
  }).catch(function(error) {
    // Uh-oh, an error occurred!
  });
})
window.onload = function(){
  document.addEventListener("change", algo, false);
}