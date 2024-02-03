import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

const CameraView = () => {
  const device = useCameraDevice('back');
  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      console.log('try');
      const newCameraPermission = await Camera.requestCameraPermission();
      const newMicrophonePermission =
        await Camera.requestMicrophonePermission();
      console.log(device);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      <Text>Dilanjana</Text>
      <Camera
        style={[StyleSheet.absoluteFill,{height:'100%'}]}
        device={device}
        isActive={true}
      />
    </View>
  );
};

export default CameraView;
