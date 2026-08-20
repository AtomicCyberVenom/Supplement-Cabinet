import { Text, View, StyleSheet, FlatList } from 'react-native';

const SUPPLEMENTS = [
  { id: '1', name: 'Vitamin D3', dosage: '2000 IU', frequency: 'Daily' },
  { id: '2', name: 'Magnesium', dosage: '400 mg', frequency: 'Daily' },
  { id: '3', name: 'Omega-3', dosage: '1000 mg', frequency: 'Daily' },
  { id: '4', name: 'Vitamin C', dosage: '500 mg', frequency: 'Daily' },
  { id: '5', name: 'Zinc', dosage: '25 mg', frequency: 'Daily' },
];

export default function Supplements() {
  return (
    <View style={styles.container}>
      <FlatList
        data={SUPPLEMENTS}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>{item.dosage} · {item.frequency}</Text>
          </View>
        )}
        >

      </FlatList>
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
  row: {
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderBottomColor: '#e5e7eb',
  },
  name: { fontSize: 16, fontWeight: '600', color: '#000' },
  detail: { fontSize: 13, color: '#6b7280', marginTop: 2 },

});
