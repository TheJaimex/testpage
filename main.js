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

var copyEmailButton = document.querySelector("#copyEmailButton");
copyEmailButton.addEventListener("click", copyEmailFromButton);

function copyEmailFromButton() {
    const email = "testemail@gmail.com";

    navigator.clipboard.writeText(email).catch((error) => { alert(`Error copying: ${error}. The email is ${email}`) });

    copyEmailButton.innerHTML = "Copied!";
    copyEmailButton.removeEventListener("click", copyEmailFromButton);

    setTimeout( function() {
        copyEmailButton.innerHTML = "Copy Email";
        copyEmailButton.addEventListener("click", copyEmailFromButton);
    }, 2500);
}
