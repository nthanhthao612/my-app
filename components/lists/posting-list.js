import { StyleSheet, FlatList } from "react-native";
import PostingCom from "../posting/posting-com";

const data = [{}];

export default function PostingList({ navigation }) {
  return (
    <FlatList
      data={data}
      listKey={`posting-list`}
      renderItem={({ item }) => (
        <PostingCom item={item} navigation={navigation} />
      )}
      contentContainerStyle={style.container}
    />
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});
