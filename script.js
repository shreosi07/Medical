let profilPic = document.getElementById("Profile_pic");
let inputFile = document.getElementById("input-file");
inputFile.onchange = function(){
    profilPic.src = URL.createObjectURL(inputFile.files[0]);
}