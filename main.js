video=""
objects=""
function preload(){
video=createVideo("video.mp4")
}

function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    video.hide(

    )
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="status = Detecting"
    console.log("status detecting")
}

function modelLoaded(){
    console.log("model loaded")
    status=true
    video.loop()
    video.volume(0)
    video.speed(1)
}

function gotResults(error, results){
    if(error){
    console.log(error)
    }
    else{
        console.log(results)
        objects= results
    }
}
function draw(){
    image(video,0,0,400,400)
    if(status!=""){
        objectDetector.detect(video, gotResults);
        for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="status: detected"
document.getElementById("nop").innerHTML="Number of objects deteced:" + objects.length

fill("royal blue")
percent= floor(objects[i].confidence*100)
text(objects[i].label + ""+ percent, objects[i].x + 15, objects[i].y + 15 )
stroke("royal blue")
noFill()
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
}
}



// ie=prompt()


// console.log(ie[2])

// for( i=0;i<ie.length;i++ ) {
// console.log(i)
//     console.log(ie[i])
// if(ie[i]=="@")
// {
// console.log("Email adress")
// }
// else{
//     console.log("not email")
// }
//  }