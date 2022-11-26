import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigator/Navigation';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});
