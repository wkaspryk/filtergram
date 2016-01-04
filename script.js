
Window.onload = function(event){

    console.log('loading..');
    var imageLoader = document.getElementById('img_capture');
    imageLoader.addEventListener('change', handleImage, false);
    var canvas = document.getElementById('img_canvas');
    var ctx = canvas.getContext('2d');


    function handleImage(e){
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    function download() {
        var dt = canvas.toDataURL();
        this.href = dt; //this may not work in the future..
    }
    document.getElementById('download').addEventListener('click', download, false);

}();

