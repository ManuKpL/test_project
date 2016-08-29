var style = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
var worldMap = new google.maps.Map(document.getElementById('worldMap'), {
  zoom: 4,
  center: {lat: 48.85, lng: 2.25},
  styles: style
});

// AVERAGE HEAT MAP
var worldAverageTweets = new google.maps.MVCArray();
new google.maps.visualization.HeatmapLayer({
  data: worldAverageTweets,
  map: worldMap,
  maxIntensity: 5,
  opacity: 0.8,
  radius: 5,
  gradient: [
  'rgba(174, 97, 146, 0)',
  'rgba(174, 97, 146, 1)',
  'rgba(255, 148, 117, 1)',
  'rgba(255, 211, 117, 1)',
  'rgba(255, 234, 117, 1)'
]
});

// PRECISE HEAT MAP
var worldPreciseTweets = new google.maps.MVCArray();
new google.maps.visualization.HeatmapLayer({
  data: worldPreciseTweets,
  map: worldMap,
  maxIntensity: 5,
  opacity: 0.8,
  radius: 5,
  gradient: [
  'rgba(125, 128, 218, 0)',
  'rgba(125, 128, 218, 1)',
  'rgba(54, 133, 181, 1)',
  'rgba(4, 113, 166, 1)',
  'rgba(32, 138, 174, 1)'
]
});
