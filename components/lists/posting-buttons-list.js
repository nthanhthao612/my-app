import { StyleSheet, FlatList, View } from "react-native";

import ButtonViaIconHor from "../button/button-via-icon-hor";
import Heart from "../../img/buttons/heart.png";
import Comment from "../../img/buttons/comments.png";
import Share from "../../img/buttons/share.png";
import { ScreenHeight, ScreenWidth } from "../../configs/screen-config";

export default function PostingButtonsList({ navigation }) {
  const array = [
    { id: 1, icon: Heart, name: "Like", value: 12 },
    {
      id: 2,
      icon: Comment,
      name: "Comments",
      value: 12,
      action: () => navigation.navigate("Comment-Detail"),
    },
    { id: 3, icon: Share, name: "Share", value: 12 },
  ];
  return (
    <FlatList
      data={array}
      renderItem={({ item }) => (
        <ButtonViaIconHor
          icon={item.icon}
          name={item.name}
          action={item.action}
          value={item.value}
        />
      )}
      keyExtractor={(item) => item.id}
      style={style.container}
    />
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: ScreenWidth * 0.95,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
