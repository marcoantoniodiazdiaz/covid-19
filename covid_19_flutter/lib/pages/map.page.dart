import 'package:covid_19_flutter/design/Texts.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong/latlong.dart';

class MapPage extends StatefulWidget {
  @override
  _MapPageState createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Texts().text("Mapa", 20, false),
        centerTitle: true,
        backgroundColor: Colors.white,
      ),
      body: _crearFlutterMap(),
    );
  }

  Widget _crearFlutterMap() {
    return FlutterMap(
      options: MapOptions(
        zoom: 18,
      ),
      layers: [
        _crearMapa(),
      ],
    );
  }

  LatLng getLocation(String textLocalization) {
    final lalo = textLocalization.split(':');
    double lat = double.parse(lalo[1]);
    double lon = double.parse(lalo[3]);
    return LatLng(lat, lon);
  }

  TileLayerOptions _crearMapa() {
    return TileLayerOptions(
      urlTemplate: 'https://api.mapbox.com/v4/'
          '{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}',
      additionalOptions: {
        'accessToken':
            'pk.eyJ1Ijoia2luZ21hcmtkYyIsImEiOiJjand0ajA1dW0wMmVtNDNzMTR0YjNjb285In0.HViOXunmR67BIzkDY754UQ',
        'id': 'mapbox.streets',
      },
    );
  }
}
