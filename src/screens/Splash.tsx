import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pace, WindupChildren} from 'windups';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnboardingScreen');
    }, 3000); // Replace with your desired duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <WindupChildren>
        <Pace getPace={() => 60}>
          <Image
            source={require('./splash_image.png')}
            style={{width: 200, height: 200}}
          />
        </Pace>
      </WindupChildren>
    </View>
  );
};

export default Splash;
