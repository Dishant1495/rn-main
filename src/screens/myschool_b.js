import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Popover, PopoverController} from 'react-native-modal-popover';

export default class myschool_b extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;

    var schoolinfo = [
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
        schoolname: 'K.R. Mangalam World School',
        schoollocation: 'Noida, UP',
        standard: 'Std 4th  to 10th',
        fees: 'Rs- 500-10000 ',
      },
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
        schoolname: 'K.R. Mangalam World School',
        schoollocation: 'Noida, UP',
        standard: 'Std 4th  to 10th',
        fees: 'Rs- 500-10000 ',
      },
    ];

    return (
      <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
        <ScrollView>
          <View>
            <LinearGradient
              colors={['#9266BA', '#4B286C']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={{
                height: hp(16),
                width: '100%',
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Myschool_a')}>
                  <Image
                    source={require('../utils/assets/Image/whiteback.png')}
                    style={{
                      height: 35,
                      width: 35,
                      resizeMode: 'contain',
                      marginTop: hp(5),
                      marginLeft: wp(3),
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: hp(5),
                    marginLeft: wp(5),
                  }}>
                  My School
                </Text>
                <Image
                  source={require('../utils/assets/Image/whitenotification.png')}
                  style={{
                    height: 30,
                    width: 30,
                    resizeMode: 'contain',
                    marginTop: hp(5),
                    marginLeft: wp(3),
                    right: 20,
                    position: 'absolute',
                  }}
                />
              </View>
            </LinearGradient>
          </View>
          <Image
            source={require('../utils/assets/Image/schoolillustartor.png')}
            style={{
              height: 205,
              width: 285,
              alignSelf: 'center',
              marginTop: hp(13),
            }}
          />
          <View
            style={{
              height: '100%',
              width: '100%',
              marginTop: hp(7),
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: wp(10),
                  color: '#532280',
                  marginTop: hp(4),
                }}>
                You enquired 2 School yet.
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Discoverlocality')}>
                <View
                  style={{
                    backgroundColor: '#532280',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: wp(28),
                    borderRadius: 30,
                    height: 40,
                    marginTop: hp(3),
                    marginLeft: wp(10),
                  }}>
                  <Text style={{color: '#FFFFFF', fontSize: 13}}>
                    Check Status
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                style={{marginTop: hp(1), marginLeft: wp(6), marginBottom: 20}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={schoolinfo}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        // marginTop: hp(2),
                        // marginRight: wp(5),
                        backgroundColor: 'white',
                        height: hp(37),
                        width: wp(75),
                        borderRadius: 30,

                        shadowOffset: {width: 3, height: 3},
                        shadowColor: 'black',
                        shadowOpacity: 1,
                        elevation: 8,
                        marginRight: 14,
                        marginLeft: 8,
                        marginVertical: 13,
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('Addmisiontimeline')
                        }>
                        <Image
                          source={item.schoolimage}
                          style={{
                            width: wp(75),
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            height: hp(20),
                          }}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          backgroundColor: '#4CC632', //4CC632
                          height: hp(5),
                          width: wp(38),
                          borderBottomRightRadius: 32,
                          borderTopLeftRadius: 30,
                          marginTop: hp(-20),
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#FDFDFE',
                            fontSize: 12,
                            fontWeight: 'bold',
                          }}>
                          Admission Open
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Image
                            source={require('../utils/assets/Image/seatlogo.png')}
                            style={{
                              height: 10,
                              width: 10,
                              resizeMode: 'contain',
                            }}
                          />
                          <Text style={{color: 'white', fontSize: 12}}>
                            20 Seat Left
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          backgroundColor: '#F2F3FA',
                          height: hp(5),
                          width: wp(15),
                          right: 0,
                          position: 'absolute',
                          borderBottomLeftRadius: 30,
                          borderTopRightRadius: 30,
                          alignItems: 'center',
                          justifyContent: 'center',
                          // borderColor: '#707070',
                          // borderWidth: 1,
                        }}>
                        <Image
                          source={require('../utils/assets/Image/pendingback.png')}
                          style={{
                            height: 170,
                            width: 130,
                            resizeMode: 'contain',
                            right: 2,
                            top: -43,
                            position: 'absolute',
                          }}
                        />
                        <Text
                          style={{
                            color: '#FFFFFF',
                            fontSize: 12,
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            right: 15,
                            top: 10,
                            position: 'absolute',
                          }}>
                          Pending
                        </Text>
                        <Image
                          source={require('../utils/assets/Image/timewatch.png')}
                          style={{
                            height: 15,
                            width: 15,
                            right: 25,
                            top: 30,
                            position: 'absolute',
                          }}
                        />
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            backgroundColor: '#FFFFFF',
                            height: hp(5),
                            width: wp(18),
                            borderTopRightRadius: 8,
                            borderBottomRightRadius: 8,
                            opacity: 0.8,
                            marginTop: hp(8),
                            bottom: 8,

                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color: '#9B3189', fontWeight: 'bold'}}>
                            CBSE
                          </Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#FFFFFF',
                            height: hp(5),
                            width: wp(18),
                            borderTopLeftRadius: 8,
                            borderBottomLeftRadius: 8,
                            opacity: 0.8,
                            shadowColor: '#000000',
                            marginTop: hp(8),
                            justifyContent: 'center',
                            alignItems: 'center',
                            right: 0,
                            bottom: 8,
                            position: 'absolute',
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              color: '#9B3189',
                              textAlign: 'center',
                              fontWeight: 'bold',
                            }}>
                            1.2 k
                          </Text>
                          <Image
                            source={require('../utils/assets/Image/eye.png')}
                            style={{
                              height: 15,
                              width: 15,
                              alignItems: 'center',
                              resizeMode: 'cover',
                              marginLeft: 8,
                            }}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          backgroundColor: 'white',
                          paddingLeft: 10,
                        }}>
                        <Text
                          style={{
                            marginTop: hp(1.5),
                            marginLeft: wp(2),
                            color: '#532280',
                            fontWeight: 'bold',
                          }}>
                          {item.schoolname}
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: hp(1),
                            alignItems: 'center',
                          }}>
                          <Image
                            source={require('../utils/assets/Image/map.png')}
                            style={{
                              height: 12,
                              width: 12,
                              resizeMode: 'contain',
                              marginLeft: 8,
                            }}
                          />

                          <Text style={{color: '#9B3189', marginLeft: wp(2)}}>
                            {item.schoollocation}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: hp(0.8),
                            alignItems: 'center',
                          }}>
                          <Image
                            source={require('../utils/assets/Image/std.png')}
                            style={{
                              height: 12,
                              width: 12,
                              resizeMode: 'contain',
                              marginLeft: 8,
                            }}
                          />

                          <Text style={{color: '#532280', marginLeft: wp(2)}}>
                            {item.standard}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: hp(0.8),
                            alignItems: 'center',
                          }}>
                          <Image
                            source={require('../utils/assets/Image/rs.png')}
                            style={{
                              height: 12,
                              width: 12,
                              resizeMode: 'contain',
                              marginLeft: 8,
                            }}
                          />

                          <Text style={{color: '#532280', marginLeft: wp(2)}}>
                            {item.fees}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor: '#F5F5F6',
                          height: hp(6),
                          width: wp(27),
                          marginTop: hp(-7),
                          marginLeft: wp(44),
                          borderRadius: 25,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <PopoverController>
                          {({
                            openPopover,
                            closePopover,
                            popoverVisible,
                            setPopoverAnchor,
                            popoverAnchorRect,
                          }) => (
                            <React.Fragment>
                              <TouchableOpacity
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  height: 45,
                                  marginRight: 5,
                                }}
                                activeOpacity={0.5}
                                ref={setPopoverAnchor}
                                onPress={openPopover}>
                                <Image
                                  source={require('../utils/assets/Image/officialpartner.png')}
                                  style={{
                                    height: 25,
                                    width: 50,
                                    marginLeft: wp(5),
                                    resizeMode: 'cover',
                                  }}
                                />
                                <Image
                                  source={require('../utils/assets/Image/info.png')}
                                  style={{
                                    height: 10,
                                    width: 10,
                                    marginTop: hp(1),
                                    marginLeft: wp(3),
                                    resizeMode: 'cover',
                                  }}></Image>
                              </TouchableOpacity>
                              <Popover
                                contentStyle={styles.content}
                                arrowStyle={styles.arrow}
                                backgroundStyle={styles.background}
                                visible={popoverVisible}
                                onClose={closePopover}
                                fromRect={popoverAnchorRect}
                                supportedOrientations={[
                                  'portrait',
                                  'landscape',
                                ]}>
                                <Text
                                  style={{
                                    color: 'white',
                                    // backgroundColor: 'red',
                                  }}>
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit, sed diam nonummy nibh euismod
                                  tincidunt ut laoreet dolore magna aliquam erat
                                  volutpat. Ut wisi enim ad minim veniam, quis
                                  nostrud exerci tation ullamcorper suscipit
                                  lobortis nisl ut aliquip ex ea co
                                </Text>
                              </Popover>
                            </React.Fragment>
                          )}
                        </PopoverController>
                      </View>

                      <View
                        style={{
                          backgroundColor: 'white',
                          height: hp(4),
                          width: wp(40),
                          right: 0,
                          bottom: 0,
                          position: 'absolute',
                          borderTopLeftRadius: 30,
                          borderBottomRightRadius: 30,
                          borderColor: '#9B3189',
                          borderWidth: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#9B3189',
                            fontSize: 10,
                            fontWeight: 'bold',
                          }}>
                          Check Admission Date
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainlogo: {
    width: wp(23),
    height: 25,
    marginTop: hp(3.12),
    left: 20,
    resizeMode: 'contain',
  },
  notificationbell: {
    width: 15,
    height: 19,
    marginTop: hp(3.12),
    right: 20,
    // position: 'absolute',
  },
  searchbox: {
    backgroundColor: 'white',
    height: 38,
    width: wp(88),
    justifyContent: 'center',
    marginTop: hp(3),
    borderRadius: 18,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 8,
  },
  searchicon: {
    width: 22,
    height: 22,
    right: 0,
    position: 'absolute',
    resizeMode: 'contain',
    marginRight: 10,
  },
  schooltext: {
    // marginTop: hp(3),
    fontSize: 18,
    color: '#532280',
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
    backgroundColor: '#0E2F57',
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  arrow: {
    borderTopColor: '#0E2F57',
  },
  background: {
    // backgroundColor: 'rgba(0, 0, 255, 0.5)',
  },
});
