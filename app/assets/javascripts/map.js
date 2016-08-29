var style = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
var worldMap = new google.maps.Map(document.getElementById('worldMap'), {
  zoom: 4,
  center: {lat: 48.85, lng: 2.25},
  styles: style
});

var blueGradient = [ 'rgba(58, 83, 155, 0)', 'rgba(58, 83, 155, 1)', 'rgba(68,108,179, 1)', 'rgba(65, 131, 215, 1)', 'rgba(75, 119, 190, 1)']
var redGradient = ['rgba(210, 77, 87, 0)', 'rgba(210, 77, 87, 1)', 'rgba(214, 69, 65, 1)', 'rgba(239, 72, 54, 1)', 'rgba(217, 30, 24, 1)']

// AVERAGE HEAT MAP
var worldAverageTweets = new google.maps.MVCArray();
new google.maps.visualization.HeatmapLayer({
  data: worldAverageTweets,
  map: worldMap,
  maxIntensity: 5,
  opacity: 0.8,
  radius: 5,
  gradient: blueGradient
});

// PRECISE HEAT MAP
var worldPreciseTweets = new google.maps.MVCArray();
new google.maps.visualization.HeatmapLayer({
  data: worldPreciseTweets,
  map: worldMap,
  maxIntensity: 5,
  opacity: 0.8,
  radius: 5,
  gradient: redGradient
});
