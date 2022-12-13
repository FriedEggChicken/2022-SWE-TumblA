import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Box, Stack,Badge } from '@react-native-material/core';
import axios from 'axios';

// import QrcodeScanner from '../components/QrcodeScanner';
// 스크린으로 사용된 컴포넌트 navigation 객체를 props로 받아옴.

export default function HomeScreen({ navigation }) {
  const [fill, setFill] = useState(70);

  // useEffect (() => {
  //   axios.get('http://3.34.19.237:3000/api/tumbler',{

  // }).then((res) => {
  //     console.log(res)
  //     if(res.status === 200){
  //         setFill(res.data.tumblerNum)
  //     }
  //     else{
  //       alert('에러')
  //     }
  // }).catch((err) => {
  //     console.log(err)
  // })
  // })

  const onClick = () => {
    console.log("qr")
    navigation.navigate('QR')
  }

  return (
    <>
      <Box style={{backgroundColor:'white'}}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginLeft: 30, backgroundColor: '#fff'}}> 보유 텀블러 현황</Text>
      </Box>
      <View style={styles.container}>
        <Stack spacing={22} style={{ margin: 16 }}>
          <Box>
            <AnimatedCircularProgress
              size={250}
              width={40}
              fill={fill}
              backgroundWidth={40}
              tintColor='#006ffd'
              backgroundColor='#3d5875'
            >
              {(fill) => (
                <Text style={{ fontSize: 25 }}>
                  {parseInt(fill)}
                </Text>)
              }
            </AnimatedCircularProgress>
          </Box>
        <Box style={{display:'flex', flexDirection: 'row' }}>
          <Box w={32} h={32} style={{backgroundColor:'#006ffd', alignItems:'center', justifyContent: 'center'}} radius={100}>
            <Box w={22} h={22} style={{backgroundColor:'white'}} radius={100}></Box>
          </Box>
          <Text style={{fontSize: 12, fontWeight:'bold', marginLeft: 15, marginTop: 7}}>사용가능</Text>
        </Box>
        <Box style={{display:'flex', flexDirection: 'row' }}>
          <Box w={32} h={32} style={{backgroundColor:'#3d5875', alignItems:'center', justifyContent: 'center'}} radius={100}>
            <Box w={22} h={22} style={{backgroundColor:'white'}} radius={100}></Box>
          </Box>
          <Text style={{fontSize: 12, fontWeight:'bold' ,marginLeft: 15, marginTop: 7}}>사용불가</Text>
        </Box>
          <Box>
            <Button title="QR 코드 스캔" onPress={onClick}></Button>
          </Box>
        </Stack>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
