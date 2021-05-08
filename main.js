function setup(){
    canvas = createCanvas(400,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7pxCl7-aA/model.json', modelloaded);
}
function draw(){
    image(video,0,0,400,350);
    classifier.classify(video, gotresults)
}
function modelloaded(){
    console.log('Model Has Been Loaded!')
}
function gotresults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_member_name").innerHTML=results[0].label
        document.getElementById("result_member_accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}