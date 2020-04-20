import 'package:covid_19_flutter/design/BottomNav.dart';
import 'package:covid_19_flutter/design/Texts.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  // const HomePage({Key key}) : super(key: key);
  Size size;

  @override
  Widget build(BuildContext context) {
    size = MediaQuery.of(context).size;
    return Scaffold(
        bottomNavigationBar: BottomNav(),
        body: CustomScrollView(
          slivers: <Widget>[
            SliverAppBar(
              title: Texts().text("COVID-19", 20, true),
              backgroundColor: Colors.white,
            ),
            SliverToBoxAdapter(
              child: portada(),
            ),
            SliverToBoxAdapter(
              child: informacionRelevante(),
            ),
            SliverToBoxAdapter(
              child: grafica(),
            ),
          ],
        ));
  }

  Widget portada() {
    return Container(
      width: size.width,
      height: size.height * 0.25,
      margin: EdgeInsets.symmetric(horizontal: 10),
      decoration: BoxDecoration(
        color: Colors.black,
        borderRadius: BorderRadius.circular(10),
      ),
    );
  }

  Widget informacionRelevante() {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Texts().text("Informacion Relevante", 20, true),
          Texts().text("Infectados:", 18),
          Texts().text("25,452", 30, true, Colors.orange),
          SizedBox(height: 5),
          Texts().text("Recuperados Infectados", 18),
          Texts().text("78,722", 30, true, Colors.blueAccent),
          SizedBox(height: 5),
          Texts().text("Fallecidos", 18),
          Texts().text("10,819", 30, true, Colors.red),
        ],
      ),
    );
  }

  Widget grafica() {
    return Container(
      width: size.width,
      height: size.height * 0.25,
      margin: EdgeInsets.symmetric(horizontal: 10),
      decoration: BoxDecoration(
        color: Colors.grey,
        borderRadius: BorderRadius.circular(10),
      ),
      child: Center(
        child: Texts().text("Aqui va a ir un grafico", 25, false, Colors.white),
      ),
    );
  }
}
