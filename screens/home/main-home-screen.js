import { View, StyleSheet} from "react-native";
import MainHomeHeader from "../../components/header/main-home-header";
import PostingList from "../../components/lists/posting-list";

export default function MainHomeScreen({navigation}) {
  return (
    <View style={style.container}>
      <MainHomeHeader />
      <PostingList navigation={navigation}/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
