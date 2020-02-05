window.onload=function(){

  for(i=0; i<8; i++){
    if(i%2==0){
      white=1;
    }else{
      white=0;
    }
    for(j=0; j<8; j++){
      var square = document.createElement("div");
      document.getElementById("board").appendChild(square);
      square.style.width = "12.5%";
      square.style.height = "12.5%";
      if (white==0){
        square.style.background = "black";
        white=1;
      }else {
        square.style.background = "white";
        white=0;
      }
      square.style.display = "inline-block";
    }
  }
}
