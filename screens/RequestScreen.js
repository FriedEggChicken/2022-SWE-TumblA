import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { CheckBox, Icon } from '@rneui/themed';
import React, { useState } from 'react'
import { Box, Stack } from '@react-native-material/core';

export default function RequestScreen({ navigation }) {
  const [checkB, setCheckB] = useState(false);
  const [checkAdd, setCheckAdd] = useState(false);

  const [broke, setBroke] = useState(0);
  const [add, setAdd] = useState(0);

  const [requestText, setRequestText] = useState('');

  const onSubmit = async () => {
  //   await axios.post('http://3.34.19.237:3000/api/request',{
  //     brokenT: broke,
  //     addT: add,
  //     reqText: requestText
  // }).then((res) => {
  //     console.log(res)
  //     if(res.status === 200){
  //         alert(`요청 하였습니다.`)
  //     }
  //     else{
  //       alert('요청 에러')
  //     }
  // }).catch((err) => {
  //     console.log(err)
  // })

    console.log(broke)
    console.log(typeof (broke))
    console.log(typeof (add))
    console.log(requestText)
  }
  return (
    <>
    <Box style={{backgroundColor:'white'}}>
  <Text style={{fontSize:20,fontWeight:'bold', textAlign:'left', marginLeft:30, backgroundColor: '#fff'}}> 텀블러 요청</Text>
  </Box>
    <View style={styles.container}>

      <Stack spacing={2} style={{ margin: 16 }}>

        <Text style={{ fontSize: 15, color: 'gray' }}>Option</Text>

        <Box style={{ borderRadius: 12, backgroundColor: '#EAF2FF' ,height:150 , alignItems:'center', justifyContent:'center'}}>
          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            <CheckBox
              containerStyle={{ backgroundColor: '#EAF2FF' }}
              title="파손 텀블러 수거"
              checked={checkB}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              onPress={() => setCheckB(!checkB)}
            ></CheckBox>

              <Box style={styles.chText}>
                <TextInput
                  style={{ width: '40%' ,backgroundColor:'white'}}
                  editable={checkB}
                  keyboardType={'number-pad'}
                  onChangeText={(e) => { setBroke(parseInt(e)) }} />
                <Text style={{marginLeft:5}} >개</Text>
              </Box>
          </Box>

          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            
            <CheckBox
              containerStyle={{ backgroundColor: '#EAF2FF' }}
              title="추가 텀블러 요청"
              checked={checkAdd}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              onPress={() => setCheckAdd(!checkAdd)}
            />

              <Box style={styles.chText}>
                <TextInput
                  style={{ width: '40%' , backgroundColor:'white' }}
                  editable={checkAdd}
                  keyboardType={'number-pad'}
                  onChangeText={(e) => { setAdd(parseInt(e)) }} />
                <Text style={{marginLeft:5}}>개</Text>
              </Box>
          </Box>
        </Box>

        <Text style={{ marginTop: 30, marginBottom: 15, fontSize: 15, color: 'gray' }}>추가 건의 사항</Text>
        <TextInput
          style={{ backgroundColor:'#EAF2FF' }}
          variant='outlined'
          textAlignVertical='top'
          multiline={true}
          numberOfLines={10}
          onChangeText={(e) => { setRequestText(e) }}
        />
        <Button title="요청하기" onPress={onSubmit}></Button>
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
  chText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});