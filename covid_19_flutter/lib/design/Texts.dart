import 'package:flutter/material.dart';

class Texts {
  Widget text(String text, double fontSize, [bool bold, Color foreground]) {
    return Text(
      text,
      style: TextStyle(
          fontSize: fontSize,
          color: (foreground == null) ? Colors.black : foreground,
          fontWeight: (bold == null) ? FontWeight.normal : FontWeight.bold),
    );
  }
}
