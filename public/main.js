'use strict';

(function() {

  var socket = io();

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);
  }

  const uploadElement = document.getElementById('upload');
  uploadElement.addEventListener('change', (event) => {
    const reader = new FileReader();
    reader.addEventListener('loadend', function() {
      console.log('finished reading file');
      socket.emit('file', reader.result);
    });
    reader.readAsArrayBuffer(uploadElement.files[0]);
  });

})();
