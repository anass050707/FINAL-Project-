// Function to update the main image div when hovering or focusing
function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Function to reset the main image div when mouse leaves or focus is lost
function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = "Hover over an image below to display here.";
    imageDiv.style.backgroundImage = "url('')";
}

// Assignment Requirement: New function for onload to add tabindex
function addTabIndex() {
    // Assignment Requirement: Console log to make sure event triggers
    console.log("Page loaded! Adding tabindex to images for keyboard accessibility.");
    
    // Get all images inside the gallery
    let images = document.querySelectorAll('.gallery img');
    
    // Assignment Requirement: Write a for loop to loop through each image
    for (let i = 0; i < images.length; i++) {
        // Add the tabindex attribute so they can be focused via keyboard (Tab key)
        images[i].setAttribute('tabindex', '0');
    }
}