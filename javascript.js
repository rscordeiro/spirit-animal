$(document).ready(function(){
  $('#btnA').click(function(){

    var spiritImages = [];
    spiritImages[0] = "spirit-animals-images/spirit-0.jpg";
    spiritImages[1] = "spirit-animals-images/spirit-1.jpg";
    spiritImages[2] = "spirit-animals-images/spirit-2.jpg";
    spiritImages[3] = "spirit-animals-images/spirit-3.jpg";
    spiritImages[4] = "spirit-animals-images/spirit-4.jpg";
    spiritImages[5] = "spirit-animals-images/spirit-5.jpg";
    spiritImages[6] = "spirit-animals-images/spirit-6.jpg";
    spiritImages[7] = "spirit-animals-images/spirit-7.jpg";
    spiritImages[8] = "spirit-animals-images/spirit-8.jpg";
    spiritImages[9] = "spirit-animals-images/spirit-9.jpg";

    var randomAnimal = "<img id='animals' src='spirit-animals-images/spirit-" + Math.floor(Math.random() * 10) + ".jpg'/>";

    $("#animals-div").html(randomAnimal);

  })
});
