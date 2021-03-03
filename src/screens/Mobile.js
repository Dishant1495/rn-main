import React, {useRef} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {assets} from '../utils/assets';
import {useNavigation} from '@react-navigation/native';
import Keyboardawarescrollview from 'react-native-keyboard-aware-scroll-view';
import {useState} from 'react';

import Toast from '../components/ToastComponent';

const Mobile = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const toast = useRef('');

  const onSubmit = () => {
    if (email == '') {
      // not a valid email

      toast.current.show('Enter Your Mobile Number');

      // this.refs.toast.getWrappedInstance().show(strings("msg_invalid_user"));
      // alert('Please Enter your mobile number');
    } else {
      // valid email
      navigation.navigate('OTP');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FDFDFE',
      }}>
      <Toast ref={toast} duration={2000} />

      <Image
        style={{position: 'absolute', right: 0}}
        resizeMode="cover"
        source={assets.babble}
      />
      <View style={{marginHorizontal: '10%'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            style={{
              width: 18,
              height: 18,
              marginTop: '10%',
              resizeMode: 'contain',
            }}
            source={require('../utils/assets/Svg/back.svg')}
          />
        </TouchableOpacity>

        <View style={{marginTop: '10%'}}>
          <Text style={{fontSize: 16, color: '#7A2985'}}>
            Enter Your Mobile Number
          </Text>

          <TextInput
            placeholder={' Enter Your Mobile Number'}
            keyboardType="decimal-pad"
            maxLength={10}
            onChangeText={(email) => setEmail(email)}
            defaultValue={email}
            style={{
              marginTop: 16,
              borderRadius: 35,
              borderWidth: 0.3,
              maxHeight: 40,
              padding: 8,
            }}
          />
          <View style={{alignItems: 'center', marginTop: '20%'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#7A2985',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
              onPress={onSubmit}>
              <Text style={{color: 'white', fontSize: 16}}>Submit</Text>
            </TouchableOpacity>
            <Text style={{color: '#7A2985', marginTop: '10%'}}>
              By continue you may receive SMS for verification. Message & data
              rates may apply
            </Text>
            <Image
              style={{marginTop: '10%'}}
              resizeMode="cover"
              source={assets.hand}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  background: {
    position: 'absolute',
    // top: 0,
    width: '100%',
    height: '100%',
  },
};

export default Mobile;
