const canvas = document.getElementById('canvas1')
//ctx = shortcut for context = canvas variable from line one, then allows to call all built in methods
const ctx = canvas.getContext('2d')
//canvas height/width needs to be the same set in the CSS file
canvas.width = 800;
canvas.height = 450;

//new will create a blank object and "Image" will create new object.
const image1 = new Image();
image1.src = 'image1.jpg';

image1.addEventListener('load', function(){
    //this could take 5 arguments.  The last allows the image to be scaled accordingly to the canvas.
    ctx.drawImage (image1, 0, 0, canvas.width, canvas.height);
    //to verify pixels in the image, canvas has built in method
    //Takes 4 arguments of where to scan.
    const scannedImage = ctx.getImageData(0,0, canvas.width, canvas.height);
    //console.log(scannedImage);
    //Note: when looking at the console 4 numbers in the array represent rbga numbers (red, blue, green, alpha/opacity)
});