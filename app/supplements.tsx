import { Text, View, StyleSheet } from 'react-native';

export default function Supplements() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Supplement List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
});
