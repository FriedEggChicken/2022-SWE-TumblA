import { StyleSheet, Text, View, Vibration, Alert, Button } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
// import { Camera, CameraType } from 'react-native-camera-kit';
import axios from 'axios';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QrcodeScanner() {
   
    const [hasPermmision, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    

    useEffect(() => {
        const getBarCodeScannerPermissons = async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync()
            
            setHasPermission(status === 'granted');
        }

        getBarCodeScannerPermissons();
    },[])

    const handleBarCodeScan = async({type,data}) => {
        setScanned(true);
        
        // alert(`반납완료 ${type} , 데이터 ${data}`)
        await axios.post('http://3.34.19.237:3000/api/return',{
            tumblerId: 1,
            
        }).then((res) => {
            console.log(res)
            // alert(`반납완료 ${type} , 데이터 ${data}`)
            if(res.status === 200){
                alert(`1번 텀블러 반납완료`)
            }
            else if(res.status === 400){
                alert('대여 중인 텀블러가 아닙니다')
            }
            else if(res.status === 403){
                alert(`반납 기한이 넘었습니다! 반납 완료 ${data}`)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    if (hasPermmision === null) {
        return <Text>카메라 접근 허용 요청</Text>
    }

    if (hasPermmision === false) {
        return <Text>카메라 접근 허용 거절됨</Text>
    }

    return (
        <>
            <View style={styles.container}>
                <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScan}
                style={StyleSheet.absoluteFillObject}
                barCodeTypes='qr'
                />
                {scanned && <Button title={'다시 스캔'} onPress={() => setScanned(false)} />}
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