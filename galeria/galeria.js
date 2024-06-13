//NAVbar resposivo

//NAVbar resposivo

//Get the modal
var modal = document.getElementById("myModal1");
var modal = document.getElementById("myModal2")
var modal = document.getElementById("myModal3")
var modal = document.getElementById("myModal4")
var modal = document.getElementById("myModal5")

//Get the image and insert it inside the modal - use its "alt" text as a caption 
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("myImg5");
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];
var span = document.getElementsByClassName("close2")[0];
var span = document.getElementsByClassName("close3")[0];
var span = document.getElementsByClassName("close4")[0];
var span = document.getElementsByClassName("close5")[0];

//When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
