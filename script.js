/**
 * Professional Photo Gallery Interactive Script
 * Assignment: University of Michigan - DOM Manipulation
 */

/**
 * Updates the display area when a user hovers over a preview image.
 * @param {HTMLElement} previewPic - The image element triggered by the onmouseover event.
 */
function upDate(previewPic) {
    // 1. Log event trigger for debugging purposes
    console.log("Event Triggered: upDate function active.");

    // 2. Log preview data for verification
    console.log("Source: " + previewPic.src);
    console.log("Alt Text: " + previewPic.alt);

    // 3. Select the target display element
    const imageDiv = document.getElementById('image');

    // 4. Update the text content to match the image's alt attribute
    imageDiv.innerHTML = previewPic.alt;

    // 5. Update the background image to match the preview image source
    // Note: Template literals (``) are used for high-end code clarity
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

/**
 * Reverts the display area to its original state when the mouse leaves.
 */
function unDo() {
    // 1. Select the target display element
    const imageDiv = document.getElementById('image');

    // 2. Reset the background image to empty/original
    imageDiv.style.backgroundImage = "url('')";

    // 3. Revert the text to the original instruction
    imageDiv.innerHTML = "Hover over an image below to display here.";
    
    console.log("Event Triggered: unDo function active. Display reset.");
}
