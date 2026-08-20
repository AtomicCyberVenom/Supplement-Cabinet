import { Stack } from 'expo-router';

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{title:"Home"}}/>
    <Stack.Screen name="supplements" options={{title:"Supplements"}}/>
{/* add _layout */}
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="search" options={{ title: 'Search', headerBackTitle: 'Cabinet' }} />
    <Stack.Screen name="add" options={{ title: 'Add Supplement', headerBackTitle: 'Cabinet' }} />
  </Stack>
}
