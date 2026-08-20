import { Text, View, StyleSheet, Pressable, FlatList } from 'react-native';
import { Link, Stack } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const SUPPLEMENTS = [
  { id: '1', name: 'Vitamin D3', dosage: '2000 IU', frequency: 'Daily' },
  { id: '2', name: 'Magnesium', dosage: '400 mg', frequency: 'Daily' },
  { id: '3', name: 'Omega-3', dosage: '1000 mg', frequency: 'Daily' },
  { id: '4', name: 'Vitamin C', dosage: '500 mg', frequency: 'Daily' },
  { id: '5', name: 'Zinc', dosage: '25 mg', frequency: 'Daily' },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Cabinet',
          headerRight: () => (
            <View style={styles.headerButtons}>
              <Link href="/search" asChild>
                <Pressable hitSlop={12}>
                  <Ionicons name="search" size={20} color="#0F766E" />
                </Pressable>
              </Link>
              <Link href="/add" asChild>
                <Pressable hitSlop={12}>
                  <Ionicons name="add" size={24} color="#000" />
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
      <FlatList
        data={SUPPLEMENTS}
        keyExtractor={(item) => item.id}
        style={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>{item.dosage} · {item.frequency}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No supplements yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    width: '100%',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  name: { fontSize: 16, fontWeight: '600', color: '#000' },
  detail: { fontSize: 13, color: '#6b7280', marginTop: 2 },
  empty: { textAlign: 'center', marginTop: 40, color: '#9ca3af' },
});
