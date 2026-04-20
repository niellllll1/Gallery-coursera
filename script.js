function upDate(previewPic) {
    // Log for debugging
    console.log("Hovering over: " + previewPic.alt);

    let displayDiv = document.getElementById("image");
    
    // Change text to the alt value of the hovered image
    displayDiv.innerHTML = previewPic.alt;
    
    // Change the background image to the source of the hovered image
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    let displayDiv = document.getElementById("image");
    
    // Reset back to original values
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}