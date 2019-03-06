import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = props => (
  <TouchableOpacity
    onPress={() => props.onPress()}
    style={{
      flex: 1,
      justifyContent: "center",
      backgroundColor: props.bgColor,
      width: props.width,
      height: props.height,
      marginTop: props.marginTop,
      borderRadius: 25
    }}
  >
    <Text
      style={{
        color: "white",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
        fontFamily: "Fredoka",
        alignSelf: "center",
        fontSize: 17
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
export default Button;
