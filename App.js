import { StyleSheet, Text, View} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Text>1</Text>
      </View>
      <View style={styles.two}>
        <Text>2</Text>
      </View>
      <View style={styles.three}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: 'row',
  },
  one: {
    backgroundColor: "red",
  },
  two: {
    backgroundColor: "blue",
  },
  three: {
    backgroundColor: "green"
  }

});
