function initMap() {
    // Coordenadas para a rua específica
    var streetLocation = { lat: -10.59249, lng: -38.38724 };
  
    // Opções do mapa
    var mapOptions = {
      zoom:17  , // Ajuste o nível de zoom conforme necessário
      center: streetLocation,
    };
  
    // Crie um novo mapa dentro da div com o id "map"
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    // Crie um marcador para a rua específica
    var marker = new google.maps.Marker({
      position: streetLocation,
      map: map,
      title: "Duque de caxias",
    });
  }
  
  initMap();
  