var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_DarkMatter_1 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_rute_K5B_2 = new ol.format.GeoJSON();
var features_rute_K5B_2 = format_rute_K5B_2.readFeatures(json_rute_K5B_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute_K5B_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute_K5B_2.addFeatures(features_rute_K5B_2);
var lyr_rute_K5B_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rute_K5B_2, 
                style: style_rute_K5B_2,
                popuplayertitle: 'rute_K5B',
                interactive: true,
                title: '<img src="styles/legend/rute_K5B_2.png" /> rute_K5B'
            });
var format_rute_K6B_3 = new ol.format.GeoJSON();
var features_rute_K6B_3 = format_rute_K6B_3.readFeatures(json_rute_K6B_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute_K6B_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute_K6B_3.addFeatures(features_rute_K6B_3);
var lyr_rute_K6B_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rute_K6B_3, 
                style: style_rute_K6B_3,
                popuplayertitle: 'rute_K6B',
                interactive: true,
                title: '<img src="styles/legend/rute_K6B_3.png" /> rute_K6B'
            });
var format_rute_K1B__4 = new ol.format.GeoJSON();
var features_rute_K1B__4 = format_rute_K1B__4.readFeatures(json_rute_K1B__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute_K1B__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute_K1B__4.addFeatures(features_rute_K1B__4);
var lyr_rute_K1B__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rute_K1B__4, 
                style: style_rute_K1B__4,
                popuplayertitle: 'rute_K1B_',
                interactive: true,
                title: '<img src="styles/legend/rute_K1B__4.png" /> rute_K1B_'
            });
var format_rute_K2B_5 = new ol.format.GeoJSON();
var features_rute_K2B_5 = format_rute_K2B_5.readFeatures(json_rute_K2B_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute_K2B_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute_K2B_5.addFeatures(features_rute_K2B_5);
var lyr_rute_K2B_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rute_K2B_5, 
                style: style_rute_K2B_5,
                popuplayertitle: 'rute_K2B',
                interactive: true,
                title: '<img src="styles/legend/rute_K2B_5.png" /> rute_K2B'
            });
var format_halte_6 = new ol.format.GeoJSON();
var features_halte_6 = format_halte_6.readFeatures(json_halte_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_6.addFeatures(features_halte_6);
var lyr_halte_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_6, 
                style: style_halte_6,
                popuplayertitle: 'halte',
                interactive: true,
                title: '<img src="styles/legend/halte_6.png" /> halte'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_DarkMatter_1.setVisible(false);lyr_rute_K5B_2.setVisible(true);lyr_rute_K6B_3.setVisible(true);lyr_rute_K1B__4.setVisible(true);lyr_rute_K2B_5.setVisible(true);lyr_halte_6.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_DarkMatter_1,lyr_rute_K5B_2,lyr_rute_K6B_3,lyr_rute_K1B__4,lyr_rute_K2B_5,lyr_halte_6];
lyr_rute_K5B_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_rute_K6B_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_rute_K1B__4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_rute_K2B_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_halte_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'address': 'address', 'K1B': 'K1B', 'K2B': 'K2B', 'K5B': 'K5B', 'K6B': 'K6B', });
lyr_rute_K5B_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_rute_K6B_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_rute_K1B__4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_rute_K2B_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_halte_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'K1B': 'TextEdit', 'K2B': 'TextEdit', 'K5B': 'TextEdit', 'K6B': 'TextEdit', });
lyr_rute_K5B_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - visible with data', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_rute_K6B_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - visible with data', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_rute_K1B__4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - visible with data', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_rute_K2B_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - visible with data', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_halte_6.set('fieldLabels', {'id': 'no label', 'name': 'inline label - visible with data', 'address': 'inline label - visible with data', 'K1B': 'hidden field', 'K2B': 'hidden field', 'K5B': 'hidden field', 'K6B': 'hidden field', });
lyr_halte_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});