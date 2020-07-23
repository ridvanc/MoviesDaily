import React from "react";
import { View, Text } from "react-native";
import { white } from "../../helper/Color";

const MovieTitle = ({ title }) => {
  return (
    <View>
      <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 24, color: white }}>{title}</Text>
      <View style={{ width: 30, height: 5, backgroundColor: white, marginTop: 4 }} />
    </View>
  );
};

export default MovieTitle;
