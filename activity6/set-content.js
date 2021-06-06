// Header para todas las páginas
fetch('./views/header.html').then(function (response) {
  if (response.ok) {
    response.text().then(function (data) {
      document.querySelector("#header-loaded").innerHTML = data;
    });
  } else {
    console.log('Hubo respuesta de red pero no se encontró el archivo header.html');
  }
}).catch(function (error) {
  console.log('Ha habido un error con la petición:' + error.message);
});

// Footer para todas las páginas
fetch('./views/footer.html').then(function (response) {
  if (response.ok) {
    response.text().then(function (data) {
      document.querySelector("#footer-loaded").innerHTML = data;
    });
  } else {
    console.log('Hubo respuesta de red pero no se encontró el archivo footer.html');
  }
}).catch(function (error) {
  console.log('Ha habido un error con la petición:' + error.message);
});

// Contenido del index
fetch('./views/index-content.html').then(function (response) {
  if (response.ok) {
    if (document.querySelector("#index-content-loaded") != null) {
      response.text().then(function (data) {
        document.querySelector("#index-content-loaded").innerHTML = data;
      });
    }
  } else {
    console.log('Hubo respuesta de red pero no se encontró el archivo index-content.html');
  }
}).catch(function (error) {
  console.log('Ha habido un error con la petición:' + error.message);
});

// Contenido de rutas
fetch('./views/routes-content.html').then(function (response) {
  if (response.ok) {
    response.text().then(function (data) {
      if (document.querySelector("#routes-content-loaded") != null) {
        document.querySelector("#routes-content-loaded").innerHTML = data;
      }
    });
  } else {
    console.log('Hubo respuesta de red pero no se encontró el archivo routes-content.html');
  }
}).catch(function (error) {
  console.log('Ha habido un error con la petición:' + error.message);
});

// Contenido de contacto
fetch('./views/contact-content.html').then(function (response) {
  if (response.ok) {
    response.text().then(function (data) {
      if (document.querySelector("#contact-content-loaded") != null) {
        document.querySelector("#contact-content-loaded").innerHTML = data;
      }
    });
  } else {
    console.log('Hubo respuesta de red pero no se encontró el archivo contact-content.html');
  }
}).catch(function (error) {
  console.log('Ha habido un error con la petición:' + error.message);
});