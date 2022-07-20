import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, StatusBar as stb } from 'react-native';
import MapScreens from './app/screens/MapScreens';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
      <MapScreens />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? stb.currentHeight : 0,
  },
});
