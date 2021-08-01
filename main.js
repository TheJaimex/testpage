var projectImages = document.querySelectorAll("#projectImage");

projectImages.forEach( function(projectImage) {
        let ctx = projectImage.getContext("2d");
        let image = new Image();
        image.src = "TestWeb.png";

        image.addEventListener("load", function() {
            ctx.drawImage(image, 0, 0);
        })
    })


// BOTON COPIAR EMAIL

function copyEmailFromButton() {
    const email = "testemail@gmail.com";
    
    try {
        navigator.clipboard.writeText(email);

        copyEmailButton.innerHTML = "Copied!";
        copyEmailButton.removeEventListener("click", copyEmailFromButton);
    
        setTimeout( function() {
            copyEmailButton.innerHTML = "Copy Email";
            copyEmailButton.addEventListener("click", copyEmailFromButton);
        }, 2500);
    }
    catch (error) {
        alert(`Error copying: ${error}.\n\nThe contact email is: ${email}`);
    }
}

var copyEmailButton = document.querySelector("#copyEmailButton");
copyEmailButton.addEventListener("click", copyEmailFromButton);


// PONER AÑO EN LO DE COPYRIGHT

var fecha = new Date();

document.getElementById("footerYear").innerHTML = fecha.getFullYear();
