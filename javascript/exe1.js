
function initMap() {
  // Localização inicial
  var minhaLocalizacao = { lat: -10.5949648, lng: -38.3810848 };

  // Opções do mapa
  var opcoesDoMapa = {
      center: minhaLocalizacao,
      zoom: 13
  };

  // Criar o mapa
  var mapa = new google.maps.Map(document.getElementById('map'), opcoesDoMapa);

  //adiciona um marcador ao google fontes 
  var marcador = new google.maps.Marker({
    position: minhaLocalizacao, // Posição do marcador
    map: mapa, // Mapa associado ao marcador
    title: 'Meu Marcador' // Título do marcador (exibido quando o usuário passa o mouse sobre ele)
  })

 
}

// prestar a atencao que eu coloquei dentro da funcao  iniciar nao deu cero

function abrirmap() {
  var url = 'https://www.google.com/maps/search/?api=1&query=-10.5949648,-38.3810848';
  window.open(url, '_blank');
}
initMap();
































































/* function initMap() {
    // Coordenadas para a rua específica
    var streetLocation = { lat: -10.59249, lng: -38.38724 };
  
    // Opções do mapa
    var mapOptions = {
      zoom:17  , // Ajuste o nível de zoom conforme necessário
      center: streetLocation,
    };
  
    // Crie um novo mapa dentro da div com o id "map"
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    // Crie um marcador para a rua específicaaaaaaa
    var marker = new google.maps.Marker({
      position: streetLocation,
      map: map,
      title: "Duque de caxias",
    });
  }
  
  initMap(); */
  