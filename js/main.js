let img = document.getElementById('perfect');
let imgs = document.getElementById('good');
let rests = document.getElementById('mybtn');
let ay = document.getElementById('aya');

img.onmouseenter = function()
{
  perfect.setAttribute('src','img/heart (1).png')
}
imgs.onmouseenter = function()
{
    good.setAttribute('src','img/heart (1).png')
}
ay.onmouseenter = function()
{
    aya.setAttribute('src','img/129610001_184383700013887_3300072202012736121_n.JPG')
}

window.onscroll = function() 
{
  scrollFunction()
};

function scrollFunction() {
  if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) 
  {
    rests.style.display = "block";
  } else {
    rests.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 

}






