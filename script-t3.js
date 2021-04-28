var canvas1 = new fabric.Canvas('c');
document.getElementById('imgLoader').onchange = function handleImage(e) {
var reader = new FileReader();
  reader.onload = function (event){
    var imgObj = new Image();
    imgObj.src = event.target.result;
    imgObj.onload = function () {
      var image = new fabric.Image(imgObj);
      image.set({
            angle: 0,
            padding: 150,
           /* cornersize:10,*/
            height:110,
          width:110,
      });
      canvas1.centerObject(image);
      canvas1.add(image);
      canvas1.renderAll();
    }
  }
  reader.readAsDataURL(e.target.files[0]);
}
