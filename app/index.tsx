import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link, Stack } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Cabinet',
          headerRight: () => (
            <View style={styles.headerButtons}>
                {/* search button  */}
              <Link href="/search" asChild>
                <Pressable hitSlop={12}>
                  <Ionicons name="search" size={20} color="#0F766E" />
                </Pressable>
              </Link>
              {/* add button */}
              <Link href="/add" asChild>
                <Pressable hitSlop={12}>
                  <Ionicons name="add" size={24} color="#000" />
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  text: {
    color: '#000',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000',
  },
});
