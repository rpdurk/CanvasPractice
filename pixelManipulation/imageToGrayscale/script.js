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
    //to turn image into grays-scale, we need to loop through the image data!
    const scannedData = scannedImage.data;
    //loop through scanned data by 4 (as noted above, every 4 is a series describing 1pixel)
    for(let i = 0; i < scannedData.length; i==4){
        const total = scannedData[i] = scannedData[i+1] + scannedData[i+2];
        const averageColorValue =total/3;
        //now must reassign pixels as the averageColorValue to turn into grey scale
        scannedData[i] = averageColorValue;
        scannedData[i + 1] = averageColorValue;
        scannedData[i + 2] = averageColorValue;
    }
    //sets originally scanned image data. as the altered scanned data.
    scannedImage.data = scannedData;
    ctx.putImageData(scannedImage, 0, 0);
});