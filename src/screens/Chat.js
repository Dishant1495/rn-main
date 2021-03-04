import React, {Component} from 'react';
import {View, Image, Text, TextInput} from 'react-native';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Text
          style={{fontWeight: 'bold', color: '#532280', marginHorizontal: 20}}>
          Chat with Everyone{' '}
        </Text>
        <View
          style={{backgroundColor: '#F2F3FA', borderRadius: 40, margin: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,

              paddingVertical: 4,
            }}>
            <Image
              source={require('../utils/assets/Image/user_name.png')}
              style={{
                resizeMode: 'contain',
                height: 45,
                width: 45,
                left: 2,
                marginRight: 15,
              }}
            />

            <View
              style={{
                width: '70%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    color: '#532280',
                    fontWeight: 'bold',
                    fontSize: 13,
                  }}>
                  Dr Aman Sagar
                </Text>
                <Text
                  style={{
                    color: '#532280',
                    fontSize: 10,
                  }}>
                  Science Expert
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  // marginBottom:10
                }}>
                <Image
                  source={require('../utils/assets/Svg/class_time.svg')}
                  style={{
                    resizeMode: 'contain',
                    height: 15,
                    width: 15,
                    alignSelf: 'center',
                    marginRight: 3,
                  }}
                />
                <Text
                  style={{
                    color: '#451D6A',
                    alignSelf: 'center',
                    fontSize: 12,
                  }}>
                  49 : 00 Left
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: '#9B3189',
              fontSize: 14,
              marginLeft: '23%',

              marginRight: 10,
              marginVertical: 10,
            }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              paddingVertical: 4,
            }}>
            <Image
              source={require('../utils/assets/Image/user_name.png')}
              style={{
                resizeMode: 'contain',
                height: 45,
                width: 45,
                left: 2,
                marginRight: 15,
              }}
            />
            <View
              style={{
                width: '70%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    color: '#532280',
                    fontWeight: 'bold',
                    fontSize: 13,
                  }}>
                  Dr Aman Sagar
                </Text>
                <Text
                  style={{
                    color: '#532280',
                    fontSize: 10,
                  }}>
                  Science Expert
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  // marginBottom:10
                }}>
                <Image
                  source={require('../utils/assets/Svg/class_time.svg')}
                  style={{
                    resizeMode: 'contain',
                    height: 15,
                    width: 15,
                    alignSelf: 'center',
                    marginRight: 3,
                  }}
                />
                <Text
                  style={{
                    color: '#451D6A',
                    alignSelf: 'center',
                    fontSize: 12,
                  }}>
                  49 : 00 Left
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: '#9B3189',
              fontSize: 14,
              marginLeft: '23%',

              marginRight: 10,
              marginVertical: 10,
            }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </Text>

          <View>
            <View
              style={{
                flexDirection: 'row-reverse',
                marginVertical: 30,
                // marginHorizontal: 10,
                //   marginVertical: 10,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../utils/assets/Image/account.png')}
                  style={{
                    resizeMode: 'contain',
                    height: 40,
                    width: 40,
                    //   alignSelf: 'center',
                  }}
                />
                <Text style={{color: '#9B3189', fontWeight: 'bold'}}>You</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    // marginBottom:10
                  }}>
                  <Image
                    source={require('../utils/assets/Svg/class_time.svg')}
                    style={{
                      resizeMode: 'contain',
                      height: 15,
                      width: 15,
                      alignSelf: 'center',
                      marginRight: 3,
                    }}
                  />
                  <Text
                    style={{
                      color: '#451D6A',
                      alignSelf: 'center',
                      fontSize: 10,
                    }}>
                    49 : 00 Left
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  marginLeft: '23%',
                  backgroundColor: '#9B3189',
                  marginRight: 10,
                  padding: 10,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  marginVertical: 10,
                }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibheerwerwerwerwe
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                marginBottom: 5,
                borderRadius: 40,
                borderWidth: 1,
                justifyContent: 'space-between',
              }}>
              <TextInput
                placeholder="Hero Bruh, Drop your message here"
                placeholderTextColor="#9B3189"
              />
              <Image
                source={require('../utils/assets/Image/playvideo.png')}
                style={{
                  resizeMode: 'contain',
                  height: 15,
                  width: 15,
                  alignSelf: 'center',
                  marginRight: 20,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Chat;
