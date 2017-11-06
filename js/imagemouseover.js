// Adapted from http://people.mpi-inf.mpg.de/~theobalt/

var image1 = new Image();  // Inactive image ...
image1.src = "images/www1_300w.jpg";  // .. here's its image file
var image2  = new Image();  // Active (mouseover) image
image2.src  = "images/www2_300w.jpg"; // .. and _its_ image file

function inact() // For "inactive" image
{
  if (document.images)  // Testing old browsers ...
    document.images.portrait.src = image1.src;
                        // Switch to the "Off" image file
}

function act() // For "active" image
{
  if (document.images)  // Same as before ...
    document.images.portrait.src = image2.src;
                        // Switch to the "On" image file
}
