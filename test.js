import * as fs from "fs";

function calculate(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    var res = num1 + num2;
    document.getElementById('loesung').innerHTML = res;

    const imagearray = [252,252,252,252,252,252,252,252,252,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,252,252,252,252,252,252,252,252,252,252,252,252
        ,252,252,252,252,252,252,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,252,252,252
        ,252,252,252,252,252,252,72,104,44,72,104,44,72,104,44,216,160,64,216,160,64,72,104,44,216,160,64,252,252,252,252,252,252,252,252,252
        ,252,252,252,72,104,44,216,160,64,72,104,44,216,160,64,216,160,64,216,160,64,72,104,44,216,160,64,216,160,64,216,160,64,252,252,252
        ,252,252,252,72,104,44,216,160,64,72,104,44,72,104,44,216,160,64,216,160,64,216,160,64,72,104,44,216,160,64,216,160,64,216,160,64
        ,252,252,252,72,104,44,72,104,44,216,160,64,216,160,64,216,160,64,216,160,64,72,104,44,72,104,44,72,104,44,72,104,44,252,252,252
        ,252,252,252,252,252,252,252,252,252,216,160,64,216,160,64,216,160,64,216,160,64,216,160,64,216,160,64,216,160,64,252,252,252,252,252,252
        ,252,252,252,252,252,252,72,104,44,72,104,44,244,0,0,72,104,44,72,104,44,72,104,44,252,252,252,252,252,252,252,252,252,252,252,252
        ,252,252,252,72,104,44,72,104,44,72,104,44,244,0,0,72,104,44,72,104,44,244,0,0,72,104,44,72,104,44,72,104,44,252,252,252
        ,72,104,44,72,104,44,72,104,44,72,104,44,244,0,0,244,0,0,244,0,0,244,0,0,72,104,44,72,104,44,72,104,44,72,104,44
        ,216,160,64,216,160,64,72,104,44,244,0,0,216,160,64,244,0,0,244,0,0,216,160,64,244,0,0,72,104,44,216,160,64,216,160,64
        ,216,160,64,216,160,64,216,160,64,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,216,160,64,216,160,64,216,160,64
        ,216,160,64,216,160,64,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,244,0,0,216,160,64,216,160,64
        ,252,252,252,252,252,252,244,0,0,244,0,0,244,0,0,252,252,252,252,252,252,244,0,0,244,0,0,244,0,0,252,252,252,252,252,252
        ,252,252,252,72,104,44,72,104,44,72,104,44,252,252,252,252,252,252,252,252,252,252,252,252,72,104,44,72,104,44,72,104,44,252,252,252
        ,72,104,44,72,104,44,72,104,44,72,104,44,252,252,252,252,252,252,252,252,252,252,252,252,72,104,44,72,104,44,72,104,44,72,104,44];

    var width = 12, 
        height = 16,
        buffer = new Uint8ClampedArray(width * height * 4);

    // create off-screen canvas element
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    
    canvas.width = width;
    canvas.height = height;

    var imgData = ctx.getImageData(0,0,width,height);
    var data = imgData.data;

    for(var i = 0; i < width * height; i = i + 4) {
        data[i] = imagearray[i]
        data[i+1] = imagearray[i+1]
        data[i+2] = imagearray[i+2]
        data[i+3] = 255
    }

    // put the modified pixels back on the canvas
    ctx.putImageData(imgData,0,0);

    // create a new img object
    var image=new Image();

    // set the img.src to the canvas data url
    image.src=canvas.toDataURL();

    // append the new img object to the page
    document.body.appendChild(image);
}

function autoRefresh(){
    window.location = window.location.href;
}


function createGame(){
    const player = {
        life: 20,
    };

    const opponent = {
        life: 20,
    };

    // convert to JSON
    const playerJSON = JSON.stringify(player);
    const opponentJSON = JSON.stringify(opponent);




}

function getPlayerLife(){
    fs.readFile("player.json", (error, data) => {
        if (error) {
            console.error(error);
            throw error;
        }

        const player = JSON.parse(data);

        document.getElementById('playerLife').innerHTML = player.life;
    });
}
