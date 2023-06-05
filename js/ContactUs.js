// // Get the element to be hovered
// let mapElement = document.querySelector('#map');

// // Add a hover event listener to the element
// mapElement.addEventListener('mouseover', zoomIn);

// // Define the zoomIn function
// function zoomIn() {
//   // Increase the zoom level
//   mapElement.style.zoom = '2';
// }
function zoomIn() {
  // code for animating the zooming in of the map
}

function zoomOut() {
  // code for animating the zooming out of the map
}

document.getElementById("map").addEventListener("mouseover", zoomIn);
document.getElementById("map").addEventListener("mouseout", zoomOut);




$('.map-iframe').on("mouseenter", function(){
  // $('.map-side').css({"display" : "block", "width" : "20%", "position" : "absolute", "left" : "-50px", "z-index" : "-50px"})
  // $('.map-iframe').css({"transform" : "translateX(-20px) scale(1.7)", "transition" : "transform 300ms ease",})

  // document.getElementById("map-iframe").src += "&z=10";
  // console.log(document.getElementById("map-iframe").src);
}).on("mouseleave", function(){
  $('.map-iframe').css({"transform" : "translateX(0) scale(1.0)"}, {"transition" : "transform 300ms ease"})
  $('.map-side').css({"display" : "none"})
})