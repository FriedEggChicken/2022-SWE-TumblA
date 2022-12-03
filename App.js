import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigator/Navigation';
// import { createTheme, ThemeProvider } from '@rneui/themed';

export default function App() {
  // const theme = createTheme({
  //   lightColors: {
  //     primary: '#006FFD'
  //   }
  // })
  return (
    <>

      <Navigation />
      <StatusBar style="auto" />
 
    </>
  );
}

const styles = StyleSheet.create({

});
