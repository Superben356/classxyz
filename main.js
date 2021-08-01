noseX=0;
noseY=0;
function preload() {
    video = createCapture(VIDEO);
    video.size(550,550);

   canvas = createCanvas(550 , 550);
   canvas.position(560 , 150);
   
   
   poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].poses.nose.x;
        noseY=results[0].poses.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
    }

}



function draw(){
    background('#FF0000');
    square(noseX,noseY,100);
}
