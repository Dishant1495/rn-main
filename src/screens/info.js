import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

class info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, marginHorizontal: 20}}>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                color: '#532280',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Gravitational Force
            </Text>
            <Text style={{color: '#532280'}}>Gravity</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#547EC5',
              borderRadius: 40,
              paddingLeft: 20,
              paddingVertical: 4,
            }}>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 13,
                }}>
                Dr Aman Sagar
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                }}>
                Science Expert
              </Text>
            </View>
            <Image
              source={require('../utils/assets/Image/user_name.png')}
              style={{
                resizeMode: 'contain',
                height: 45,
                width: 45,
                left: 2,
              }}
            />
          </View>
        </View>
        <Text style={{color: '#532280', marginVertical: 16}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </Text>

        <Text style={{color: '#532280', fontWeight: 'bold'}}>
          Study Material
        </Text>

        <View
          style={{
            marginTop: 20,
            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#F2F3FA',
          }}>
          <View
            style={{
              height: 40,
              flex: 8,
              fontSize: 20,
              justifyContent: 'center',
              paddingHorizontal: 16,
              // alignItems: 'center',
            }}>
            <Text style={{fontSize: 12, color: '#9B3189'}}>
              Chp. 1 Explain Gravitational Force
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              flex: 3,
              backgroundColor: '#9B3189',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              View
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderRadius: 10,
            flexDirection: 'row',
            marginTop: 10,

            backgroundColor: '#F2F3FA',
          }}>
          <View
            style={{
              height: 40,
              flex: 8,
              fontSize: 20,
              justifyContent: 'center',
              paddingHorizontal: 16,
              // alignItems: 'center',
            }}>
            <Text style={{fontSize: 12, color: '#9B3189'}}>
              Chp. 1 Explain Gravity
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              flex: 3,
              backgroundColor: '#9B3189',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              View
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderRadius: 10,
            flexDirection: 'row',
            marginTop: 10,
            backgroundColor: '#F2F3FA',
          }}>
          <View
            style={{
              height: 40,
              flex: 8,
              fontSize: 20,

              justifyContent: 'center',
              paddingHorizontal: 16,
              // alignItems: 'center',
            }}>
            <Text style={{fontSize: 12, color: '#9B3189'}}>
              Chp. 1 Principle of Gravitational Force
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              flex: 3,
              backgroundColor: '#9B3189',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              View
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default info;
