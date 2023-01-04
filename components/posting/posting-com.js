import { View, StyleSheet } from "react-native";
import PostingImage from "../image/posting-image";

import { ScreenHeight, ScreenWidth } from "../../configs/screen-config";
import PosterInfo from "../info/poster-info";
import PostingContent from "../text/posting-content";
import PostingButtonsList from "../lists/posting-buttons-list";
import ButtonViaIcon from "../button/button-via-icon";
import Cancel from "../../img/buttons/cancel.png";
import TimeTextCom from "../text/time-text-com";
export default function PostingCom({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <PosterInfo />
        <ButtonViaIcon icon={Cancel} />
      </View>
      <PostingContent />
      <PostingImage />
      <TimeTextCom />
      <PostingButtonsList navigation={navigation}/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#D0D0D0",
    width: ScreenWidth * 0.98,
    flexDirection: "column",
    margin: ScreenWidth * 0.01,
    justifyContent: "center",
    borderWidth: ScreenWidth * 0.001,
    padding: ScreenWidth * 0.02,
    borderRadius: ScreenWidth * 0.05,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
