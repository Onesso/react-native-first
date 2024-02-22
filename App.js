import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Text>1</Text>
      </View>
      <View style={styles.two}>
        <Text style={styles.colorOne}>2</Text>
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
    flexDirection: "column",
    width: "80%",
    height: 200,
  },
  one: {
    backgroundColor: "red",
    flex: 1,

  },
  two: {
    backgroundColor: "blue",
    flex: 1,
    alignItems: 'flex-end'

  },
  three: {
    backgroundColor: "green",
    flex: 1,

  },
  colorOne: {
    color: "white",
  },
});
