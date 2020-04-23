import 'package:covid_19_flutter/design/Texts.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
//import 'package:provider/provider.dart';
//import 'package:stay_home/design/Texts.dart';
//import 'package:stay_home/design/ThemeColors.dart';
// import 'package:stay_home/pages/TabsController.dart';

class BottomNav extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //final navegacion = Provider.of<NavegacionModel>(context);

    return BottomNavigationBar(
      currentIndex: /*navegacion.paginaActual*/ 2,
      showSelectedLabels: true,
      showUnselectedLabels: false,
      // onTap: (i) => navegacion.paginaActual = i,
      elevation: 5,
      iconSize: 20,
      backgroundColor: Colors.white,
      ////selectedItemColor: ThemeColors().red,
      //unselectedItemColor: ThemeColors().spacial,
      //selectedFontSize: 20,
      type: BottomNavigationBarType.fixed,
      //showUnselectedLabels: true,
      items: [
        BottomNavigationBarItem(
          title: Texts().text("Usuario", 12, false, Colors.grey),
          icon: Icon(
            FontAwesomeIcons.userAlt,
          ),
        ),
        BottomNavigationBarItem(
          title: Texts().text("Mapa", 12, false, Colors.grey),
          icon: Icon(
            FontAwesomeIcons.mapMarked,
          ),
        ),
        BottomNavigationBarItem(
          title: Texts().text("Inicio", 12, false, Colors.grey),
          icon: Icon(
            FontAwesomeIcons.home,
          ),
        ),
        BottomNavigationBarItem(
          title: Texts().text("Estadisticas", 12, false, Colors.grey),
          icon: Icon(
            FontAwesomeIcons.chartLine,
          ),
        ),
        BottomNavigationBarItem(
          title: Texts().text("Ajustes", 12, false, Colors.grey),
          icon: Icon(
            FontAwesomeIcons.cog,
          ),
        ),
      ],
    );
  }
}
