var map = L.map('mapid').setView([56, 93], 13);

var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});

        
var base_osm = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    opacity: 1.0,
    attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});

var base_watercolors = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/{variant}/{z}/{x}/{y}{r}.{ext}', {
    attribution:
    'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
    '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
    'Map data {attribution.OpenStreetMap}',
subdomains: 'abcd',
minZoom: 0,
maxZoom: 20,
// для того, чтобы сменить тип карты, нужно поменять имя "варианта"
variant: 'watercolor',
ext: 'png'
});


var base_toner = L.tileLayer.provider('Stamen.Toner');
var base_watercolor = L.tileLayer.provider('Stamen.Watercolor');

map.addLayer(base_osm);

var baseMaps = [
    {
        groupName: "Подложки",
        expanded: true,
        layers: {
            "OpenStreetMap" : base_osm,
            "Черно-белая" : base_toner,
            "Акварель" : base_watercolors,
        }
    }
];

var overlays = [
    {
        groupName: "Исходные слои",
        expanded: true,
        // layers: {
        //     "Пример MapBox" : test_mapbox,
        // }
    }
]


// L.control.layers(baseMaps,{
//     '<img src="legend/border_geo_2.png" /> border_geo': layer_border_geo_2,
//     'building этажность<br /><table><tr><td style="text-align: center;"><img src="legend/building_1_110.png" /></td><td>1 - 1</td></tr><tr><td style="text-align: center;"><img src="legend/building_1_131.png" /></td><td>1 - 3</td></tr><tr><td style="text-align: center;"><img src="legend/building_1_372.png" /></td><td>3 - 7</td></tr><tr><td style="text-align: center;"><img src="legend/building_1_7103.png" /></td><td>7 - 10</td></tr><tr><td style="text-align: center;"><img src="legend/building_1_10174.png" /></td><td>10 - 17</td></tr></table>': layer_building_1,
//     "OSM Standard": layer_OSMStandard_0,
// },{
//     collapsed:false
// }).addTo(map);

var options = {
    container_width 	: "200px",
    group_maxHeight : "800px",
};

var control = L.Control.styledLayerControl(baseMaps, overlays, options);
map.addControl(control);


