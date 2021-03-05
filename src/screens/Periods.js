import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList, Image, Text} from 'react-native';

class Periods extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var popularschool = [
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_b.png'),
        schoolname: 'Delhi Public School (DPS)',
        schoollocation: 'Delhi',
        standard: 'Std 1st  to 10th',
        fees: 'Rs- 500-10000 ',
      },
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
        schoolname: 'Delhi Public School (DPS)',
        schoollocation: 'Delhi',
        standard: 'Std 1st  to 10th',
        fees: 'Rs- 500-10000 ',
      },
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
        schoolname: 'Delhi Public School (DPS)',
        schoollocation: 'Delhi',
        standard: 'Std 1st  to 10th',
        fees: 'Rs- 500-10000 ',
      },
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
        schoolname: 'Delhi Public School (DPS)',
        schoollocation: 'Delhi',
        standard: 'Std 1st  to 10th',
        fees: 'Rs- 500-10000 ',
      },
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
        schoolname: 'Delhi Public School (DPS)',
        schoollocation: 'Delhi',
        standard: 'Std 1st  to 10th',
        fees: 'Rs- 500-10000 ',
      },
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
        schoolname: 'Delhi Public School (DPS)',
        schoollocation: 'Delhi',
        standard: 'Std 1st  to 10th',
        fees: 'Rs- 500-10000 ',
      },
    ];

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1, margin: 10, flexDirection: 'row'}}>
          <View
            style={{
              marginTop: '30%',
              marginRight: 10,
              width: 20,
              borderRadius: 10,
              backgroundColor: '#9B3189',
            }}></View>

          <FlatList
            // style={{marginTop: hp(1)}}
            // horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={popularschool}
            keyExtractor={(item, index) => index}
            // keyExtractor={(item, index) => item.index_id}

            renderItem={({item}) => {
              return (
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 30,
                    // backgroundColor: 'red',
                    shadowOffset: {width: 3, height: 3},
                    shadowColor: 'black',
                    shadowOpacity: 1,
                    elevation: 8,
                    marginRight: 14,
                    marginLeft: 8,
                    padding: 8,
                    marginVertical: 13,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 10,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#451D6A',
                        fontSize: 20,
                      }}>
                      Science
                    </Text>

                    <View
                      style={{
                        borderRadius: 18,
                        backgroundColor: '#11B64E',
                        paddingVertical: 6,
                        paddingHorizontal: 18,
                        //   alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', textAlign: 'center'}}>
                        Live
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      margin: 10,
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={require('../utils/assets/Svg/class_time.svg')}
                      style={{
                        resizeMode: 'contain',
                        height: 15,
                        width: 15,
                        marginRight: 10,
                      }}
                    />
                    <Text
                      style={{
                        color: '#451D6A',
                        alignSelf: 'center',
                        fontSize: 12,
                      }}>
                      Class Time : 7:00 AM to 8:00 AM
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 10,
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={require('../utils/assets/Svg/students_joined.svg')}
                      style={{
                        resizeMode: 'contain',
                        height: 15,
                        width: 15,
                        marginRight: 10,
                      }}
                    />
                    <Text
                      style={{
                        color: '#451D6A',
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        fontSize: 12,
                      }}>
                      45 Students already Joined
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginRight: 10,
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        // marginHorizontal: 10,
                        //   marginVertical: 10,
                      }}>
                      <Image
                        source={require('../utils/assets/Image/user_name.png')}
                        style={{
                          resizeMode: 'contain',
                          height: 70,
                          width: 70,
                          marginRight: 5,
                          alignSelf: 'center',
                        }}
                      />
                      <Text
                        style={{
                          color: '#451D6A',
                          alignSelf: 'center',
                          fontWeight: 'bold',
                          fontSize: 16,
                        }}>
                        Dr. Aman Sagar
                      </Text>
                    </View>
                    <View style={{alignSelf: 'center', marginTop: 50}}>
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
                      <TouchableOpacity
                        style={{
                          marginTop: 10,
                          width: 100,
                          //   paddingHorizontal: 20,
                          paddingVertical: 10,
                          borderRadius: 30,
                          backgroundColor: '#262060',
                        }}
                        onPress={() => {
                          //   this.props.navigation.navigate('JoinAdmissionSubmit');
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 14,
                          }}>
                          Join Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default Periods;
