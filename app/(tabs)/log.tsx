import { Text, View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function Log() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Log' }} />
      <Text style={styles.text}>Log Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
});
