fetch("img/changed.png").then(function (response) {

    if (response.ok) {
        console.log("Imagen changed.png encontrada.");
        return response.blob();
    } else {
        console.log("Imagen changed.png no encontrada, utilizando imagen por defecto.");
    }

}).then(function (blob) {

    let imgDefault = document.getElementById("colored-img");
    imgDefault.src = URL.createObjectURL(blob);

    console.log("Imagen changed.png establecida como imagen principal.");

}).catch(function (error) {
    console.error("Error al intentar encontrar la imagen en el servidor, verifique el enlace y compruebe que existe el archivo.");
});