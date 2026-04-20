/**
 * upDate: Triggered on mouseover
 * Updates the background and the centered text.
 */
function upDate(previewPic) {
    const displayBox = document.getElementById('image');

    // Update the background image
    displayBox.style.backgroundImage = `url('${previewPic.src}')`;

    // Update the centered text
    displayBox.innerHTML = previewPic.alt;
    
    console.log("Background updated to: " + previewPic.alt);
}

/**
 * unDo: Triggered on mouseleave
 * Resets the box to its original state.
 */
function unDo() {
    const displayBox = document.getElementById('image');

    // Reset background and text
    displayBox.style.backgroundImage = "url('')";
    displayBox.innerHTML = "Hover over an image below to display here.";
}
