noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;


function preload()
{

}

function setup()
{
canvas=createCanvas(550, 550);
canvas.center();
video=createCapture(VIDEO);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{
background('#0BF21D')
fill('#000000');
stroke('#F24E0B');
text("anant is good", noseX,noseY,difference);
document.getElementById("value").innerHTML="possition of text  is-" + difference;
}

function modelLoaded()
{
    console.log("PoseNet is loaded");
}

function gotPoses(results)
{
   if(results.length>0)
   {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX=" + noseX);
    console.log("noseY=" + noseY);

    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX- rightwristX);

   }
}



