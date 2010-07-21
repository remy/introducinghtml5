var pendingWorkers = 0,
    results = {},
    workingWidth = 100;

onmessage = function (event) {
  var imageData = JSON.parse(event.data),
      worker = null;
  
  pendingWorkers = parseInt(imageData.width / workingWidth);
  // add an addtional worker for the left over width
  if (imageData.width % workingWidth > 0) pendingWorkers++;
  
  // reset any old results
  results = {};
    
  for (var i = 0; i < pendingWorkers; i++) {
    worker = new Worker('photofilter.js');
    worker.postMessage(JSON.stringify({
      imageData: imageData,
      x: i * workingWidth,
      width: workingWidth
    }));
    worker.onmessage = storeResult;
  }
};

function storeResult(event) {
  var result = JSON.parse(event.data);
  
  results[result.x] = result.imageData;
  
  pendingWorkers--;
  if (pendingWorkers <= 0) {
    postMessage(JSON.stringify(results));
  }
}


onmessage = function (event) {
  var data = JSON.parse(event.data);
  
  // perform some amazing feat of image processing
  var imageData = amazingImageProcess(data.imageData, data.x, data.width);
  postMesage(JSON.stringify({
    imageData: imageData,
    x: data.x
  }));
  
  // self close
  close();
};