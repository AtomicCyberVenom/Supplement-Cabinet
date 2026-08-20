import { Text } from 'react-native';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Cabinet',
          tabBarIcon: ({ size }: { size: number }) => (
            <Text style={{ fontSize: size }}>🗄️</Text>
          ),
        }}
      />
    </Tabs>
  );
}
