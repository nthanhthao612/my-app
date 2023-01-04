import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import { ScreenHeight, ScreenWidth } from "../../configs/screen-config";

const defaultValue = {
  avatar: "https://freesvg.org/img/Male-Avatar.png",
  firstName: "Thanh Thao",
  lastName: "Nguyen",
};

export default function PosterInfo({
  avatar = defaultValue.avatar,
  firstName = defaultValue.firstName,
  lastName = defaultValue.lastName,
}) {
  return (
    <TouchableOpacity style={style.container}>
      <Image source={{ uri: `${avatar}` }} style={style.avatar} />
      <Text style={style.text}>{`${firstName} ${lastName}`}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    width: ScreenWidth*0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar: {
    borderRadius: (ScreenHeight * 3) / 100,
    borderWidth: (ScreenHeight * 0.001) / 100,
    height: (ScreenHeight * 3.5) / 100,
    width: (ScreenHeight * 3.5) / 100,
    marginHorizontal: (ScreenHeight * 1.5) / 100,
    marginVertical: (ScreenHeight * 0.5) / 100,
  },
  text: {
    fontWeight: "bold",
    fontSize: "90%"
  }
});
