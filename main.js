var projectImages = document.querySelectorAll("#projectImage");

projectImages.forEach( function(projectImage) {
        let ctx = projectImage.getContext("2d");
        let image = new Image();
        image.src = "TestWeb.png";

        image.addEventListener("load", function() {
            ctx.drawImage(image, 0, 0);
        })
    })


