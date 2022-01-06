function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xtxonwVyq/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }

    else{
        console.log(results);
        document.getElementById("result_label").innerHTML= "I can hear -"+ results[0].label;
        document.getElementById("result_confidence").innerHTML= "Accuracy -"+ (results[0].confidence*100).toFixed(2)+"%";

    img1 = document.getElementById("animal_1");
    img2 = document.getElementById("animal_2");
    img3 = document.getElementById("animal_3");
    img4 = document.getElementById("animal_4");
    ;
    }

    if(results[0].label == "dog"){
        img1.src="dog.gif";
        img2.src="cat.png";
        img3.src="parrot.png";
        img4.src="fish.png";
}
else if(results[0].label == "cat"){
    img1.src="dog.png";
    img2.src="cat.gif";
    img3.src="parrot.png";
    img4.src="fish.png";
}
else if(results[0].label == "parrot"){
    img1.src="dog.png";
    img2.src="cat.png";
    img3.src="parrot.gif";
    img4.src="fish.png";
}
else{
    img1.src="dog.png";
    img2.src="cat.png";
    img3.src="parrot.png";
    img4.src="fish.gif";
}
}
