var input = document.getElementById('input');
input.addEventListener('change', handleFiles);

function handleFiles(e) {
    var ctx = document.getElementById('canvas').getContext('2d');
    var img = new Image;
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function() {
        ctx.drawImage(img, 20,20);
        // Show overlay image
        overlay = document.getElementById('overlay');
        overlay.style.display = 'block';

        switch(e.target.files[0].name) {
          case "1.png":
            overlay.src = "images/1b.png"
            break;
          case "2.png":
            overlay.src = "images/2b.png"
            break;
          case "3.png":
            overlay.src = "images/3b.png"
            break;
          case "4.png":
            overlay.src = "images/4b.png"
            break;
          case "5.png":
            overlay.src = "images/5b.png"
            break;
          default:
            overlay.src = "images/6b.png"
        }
        //alert(e.target.files[0].name);
        //alert("Homeless");
    }
}