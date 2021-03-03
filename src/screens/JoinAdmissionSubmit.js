import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class JoinAdmissionSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            minHeight: 62,
            alignItems: 'center',
            paddingHorizontal: 8,
            backgroundColor: '#532280',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1.5}}>
            <Image
              style={{
                width: 22,
                height: 22,
                marginHorizontal: 16,
                resizeMode: 'contain',
              }}
              source={require('../utils/assets/Image/white_arrow.png')}
            />
          </View>

          <View style={{flex: 8}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
              Entrance Test
            </Text>
          </View>
          <View style={{flex: 1.5}}>
            <Image
              source={require('../utils/assets/Image/white_notification.png')}
              style={{
                height: 18,
                width: 18,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>

        <View style={{flex: 1}}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                marginBottom: '20%',
              }}>
              <View
                style={{
                  backgroundColor: '#F2F3FA',
                  alignItems: 'center',
                  paddingTop: 20,
                }}>
                <Image
                  style={{
                    width: 70,
                    position: 'absolute',
                    height: 20,
                    right: 10,
                    top: 10,
                    marginTop: 10,
                    resizeMode: 'contain',
                  }}
                  source={require('../utils/assets/Image/live_green.png')}
                />
                <Image
                  style={{
                    width: 150,
                    height: 270,
                    resizeMode: 'contain',
                  }}
                  source={require('../utils/assets/Image/join_user.png')}
                />
              </View>

              <View
                style={{
                  backgroundColor: 'white',
                  flex: 1,
                  marginHorizontal: 16,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    marginVertical: 20,
                    // backgroundColor: 'green',
                  }}>
                  <Image
                    source={require('../utils/assets/Image/infomation.png')}
                    style={{
                      height: 14,
                      width: 14,
                      // right: 20,
                      marginRight: 10,
                      resizeMode: 'cover',
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 14,
                      color: '#9B3189',
                    }}>
                    Subject
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'space-between',
                    marginTop: 16,
                  }}>
                  <View style={styles.backContainer}>
                    <Image
                      source={require('../utils/assets/Image/success_green.png')}
                      style={{
                        height: 14,
                        width: 14,
                        right: 0.5,
                        position: 'absolute',
                        resizeMode: 'contain',
                      }}
                    />
                    <Image
                      style={{
                        width: 18,
                        height: 18,
                        resizeMode: 'contain',
                      }}
                      source={require('../utils/assets/Image/subject_icon.png')}
                    />
                    <Text style={{textAlign: 'center'}}>English</Text>
                  </View>
                  <View style={styles.backContainer}>
                    <Image
                      source={require('../utils/assets/Image/success_green.png')}
                      style={{
                        height: 14,
                        width: 14,
                        right: 0.5,
                        position: 'absolute',
                        resizeMode: 'contain',
                      }}
                    />
                    <Image
                      style={{
                        width: 14,
                        height: 14,
                        resizeMode: 'contain',
                      }}
                      source={require('../utils/assets/Image/subject_icon.png')}
                    />
                    <Text style={{textAlign: 'center'}}>Math</Text>
                  </View>
                  <View style={styles.backContainer}>
                    <Image
                      source={require('../utils/assets/Image/success_green.png')}
                      style={{
                        height: 14,
                        width: 14,
                        right: 0.5,
                        position: 'absolute',
                        resizeMode: 'contain',
                      }}
                    />
                    <Image
                      style={{
                        width: 14,
                        height: 14,
                        resizeMode: 'contain',
                      }}
                      source={require('../utils/assets/Image/subject_icon.png')}
                    />
                    <Text style={{textAlign: 'center'}}>Soical</Text>
                  </View>
                  <View style={styles.backContainer}>
                    <Image
                      source={require('../utils/assets/Image/success_green.png')}
                      style={{
                        height: 14,
                        width: 14,
                        right: 0.5,
                        position: 'absolute',
                        resizeMode: 'contain',
                      }}
                    />
                    <Image
                      style={{
                        width: 14,
                        height: 14,
                        resizeMode: 'contain',
                      }}
                      source={require('../utils/assets/Image/subject_icon.png')}
                    />
                    <Text style={{textAlign: 'center'}}>Science</Text>
                  </View>
                </View>

                <View style={{marginVertical: 30}}>
                  <View
                    style={{
                      //   flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        textAlign: 'center',
                        color: '#9B3189',
                      }}>
                      Wooh! You have completed all subject Test.{' '}
                    </Text>
                    <View style={{width: '100%'}}>
                      <View style={{marginTop: 20}}>
                        <Image
                          source={require('../utils/assets/Image/schoolsquare_a.png')}
                          style={{
                            height: 150,
                            width: '100%',
                            resizeMode: 'contain',
                            opacity: 0.5,
                            borderRadius: 5,
                            marginTop: hp(2),
                          }}></Image>

                        <View
                          style={{
                            // backgroundColor: '#FFFFFF',
                            // height: 50,
                            position: 'absolute',
                            // width: 50,
                            // borderRadius: 25,
                            marginTop: hp(7),
                            // marginLeft: wp(10),
                          }}>
                          <Image
                            source={require('../utils/assets/Image/account.png')}
                            style={{
                              height: 100,
                              width: 100,
                              //   justifyContent: 'center',
                              // marginTop: hp(12.2),
                              // marginLeft: wp(14.3),
                              resizeMode: 'contain',
                              position: 'absolute',
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            fontSize: 16,
                            marginLeft: wp(25),
                            marginTop: hp(10),
                            position: 'absolute',
                          }}>
                          Dear Hero Bruh
                        </Text>
                        <Text
                          style={{
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            fontSize: 8,
                            marginLeft: wp(25),
                            marginTop: hp(13),
                            position: 'absolute',
                          }}>
                          Your Entrance Test has been submitted to K.R. Mangalam
                          World School. Please wait for the Entrance Test
                          Result. All the best for result.{' '}
                        </Text>
                      </View>
                      {/* <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            source={require('../utils/assets/Image/account.png')}
                            style={{
                              width: 70,
                              height: 70,
                              backgroundColor: 'red',
                              resizeMode: 'contain',
                              // position: 'absolute',
                            }}
                          />
                          <View style={{marginRight: 20}}>
                            <Text>Dear Hero Bruh,</Text>
                            <Text style={{textAlign: 'justify'}}>
                              Your Entrance Test has been submitted to K.R.
                              Mangalam World School. Please wait for the
                              Entrance Test Result. All the best for result.
                            </Text>
                            <Text>Thanks K.R. Mangalam World School(Team)</Text>
                          </View>
                        </View> */}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8,
            flexDirection: 'row',
            borderTopColor: 'grey',
            borderTopWidth: 0.3,
          }}>
          <TouchableOpacity
            style={{
              padding: 14,
              //   borderRadius: 30,
              minHeight: 40,
              alignSelf: 'center',
              //   backgroundColor: '#F2F3FA',
            }}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            {/* onPr  ess={this.setModalVisible(true)}> */}
            <Text style={{color: '#262060', textAlign: 'center', fontSize: 14}}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              //   flex: 1,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 30,
              //   minHeight: 40,
              //   alignSelf: 'center',
              backgroundColor: '#262060',
            }}
            onPress={() => {
              this.props.navigation.navigate('EntranceResult');
            }}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 14}}>
              My School
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modeConatiner: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F6',
    height: hp(6),
    width: wp(27),
    borderRadius: 25,
  },
  modeViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    marginRight: 5,
  },
  modeTextConatainer: {fontSize: 18, fontWeight: 'bold', color: '#532280'},
  officialImageContainer: {
    height: 25,
    width: 50,
    marginLeft: wp(5),
    resizeMode: 'cover',
  },
  lineContainer: {
    height: 30,
    width: 60,

    marginLeft: wp(2),
    // resizeMode: 'contain',
  },
  backContainer: {
    flex: 1,
    backgroundColor: 'white',
    // opacity:1,
    alignItems: 'center',
    padding: 14,
    justifyContent: 'space-evenly',
    marginHorizontal: 4,
    borderRadius: 10,
    shadowColor: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
export default JoinAdmissionSubmit;
