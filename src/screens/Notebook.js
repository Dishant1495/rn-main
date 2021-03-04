import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Popover, PopoverController} from 'react-native-modal-popover';

class Notebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <View style={{flex: 1, marginHorizontal: 20, backgroundColor: 'white'}}>
        <View
          style={{
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#532280',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Enter your notes
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#F2F3FA',
            borderRadius: 30,
            padding: 20,
            marginTop: 10,
          }}>
          <View>
            <TextInput
              //   style={{minHeight: 100}}
              multiline={true}
              placeholderTextColor="#9B3189"
              placeholder="Write your notes here"
              onChangeText={(text) => {
                this.setState({value: text});
              }}
              value={this.state.value}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: '30%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Image
                    source={require('../utils/assets/Svg/image.svg')}
                    style={{
                      height: 20,
                      width: 20,
                      //   right: 20,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{textAlign: 'center', marginTop: 2, fontSize: 10}}>
                    Image
                  </Text>
                </View>
                <View>
                  <Image
                    source={require('../utils/assets/Svg/video.svg')}
                    style={{
                      height: 20,
                      width: 20,
                      //   right: 20,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{textAlign: 'center', marginTop: 2, fontSize: 10}}>
                    Video
                  </Text>
                </View>
                <View>
                  <Image
                    source={require('../utils/assets/Svg/file.svg')}
                    style={{
                      height: 20,
                      width: 20,
                      //   right: 20,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{textAlign: 'center', marginTop: 2, fontSize: 10}}>
                    file
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: '#262060',
                    alignItems: 'center',
                    padding: 6,
                    marginRight: 10,

                    backgroundColor: 'white',
                  }}>
                  <Image
                    source={require('../utils/assets/Svg/image.svg')}
                    style={{
                      height: 10,
                      width: 10,
                      margin: 3,
                      right: 4,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text style={{fontSize: 10}}>Friends</Text>
                </View>

                <TouchableOpacity
                  style={{
                    width: 100,
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
                      fontSize: 12,
                    }}>
                    Save Video
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            borderRadius: 10,
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#F2F3FA',
          }}>
          <View
            style={{
              height: 40,
              flex: 8,
              flexDirection: 'row',
              fontSize: 20,
              paddingHorizontal: 16,
              alignItems: 'center',
            }}>
            <Text
              style={{
                flex: 2,
                fontSize: 12,
                fontWeight: 'bold',
                color: '#9B3189',
              }}>
              Gravity
            </Text>
            <View
              style={{
                backgroundColor: '#9B3189',
                width: 1,
                height: '100%',
              }}></View>
            <Text
              style={{
                flex: 2,
                fontSize: 12,
                color: '#9B3189',
                textAlign: 'center',
              }}>
              You
            </Text>
            <View
              style={{
                backgroundColor: '#9B3189',
                width: 1,
                height: '100%',
              }}></View>

            <Text
              style={{
                flex: 2,
                fontSize: 12,
                color: '#9B3189',
                textAlign: 'center',
              }}>
              Type
            </Text>
            <Image
              source={require('../utils/assets/Svg/notifications.svg')}
              style={{
                height: 20,
                width: 20,
                //   right: 20,
                alignItems: 'flex-end',
                resizeMode: 'contain',
              }}
            />
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
            marginTop: 20,
            borderRadius: 10,
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#F2F3FA',
          }}>
          <View
            style={{
              height: 40,
              flex: 8,
              flexDirection: 'row',
              fontSize: 20,
              paddingHorizontal: 16,
              alignItems: 'center',
            }}>
            <Text
              style={{
                flex: 2,
                fontSize: 12,
                fontWeight: 'bold',
                color: '#9B3189',
              }}>
              Gravity
            </Text>
            <View
              style={{
                backgroundColor: '#9B3189',
                width: 1,
                height: '100%',
              }}></View>
            <Text
              style={{
                flex: 2,
                fontSize: 12,
                color: '#9B3189',
                textAlign: 'center',
              }}>
              Friends
            </Text>
            <View
              style={{
                backgroundColor: '#9B3189',
                width: 1,
                height: '100%',
              }}></View>

            <Text
              style={{
                flex: 2,
                fontSize: 12,
                color: '#9B3189',
                textAlign: 'center',
              }}>
              Type
            </Text>
            <Image
              source={require('../utils/assets/Svg/notifications.svg')}
              style={{
                height: 20,
                width: 20,
                //   right: 20,
                alignItems: 'flex-end',
                resizeMode: 'contain',
              }}
            />
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
            marginTop: 20,
            borderRadius: 10,
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#F2F3FA',
          }}>
          <View
            style={{
              height: 40,
              flex: 8,
              flexDirection: 'row',
              fontSize: 20,
              paddingHorizontal: 16,
              alignItems: 'center',
            }}>
            <Text
              style={{
                flex: 2,
                fontSize: 12,
                fontWeight: 'bold',
                color: '#9B3189',
              }}>
              Gravity
            </Text>
            <View
              style={{
                backgroundColor: '#9B3189',
                width: 1,
                height: '100%',
              }}></View>
            <Text
              style={{
                flex: 2,
                fontSize: 12,
                color: '#9B3189',
                textAlign: 'center',
              }}>
              Teacher
            </Text>
            <View
              style={{
                backgroundColor: '#9B3189',
                width: 1,
                height: '100%',
              }}></View>

            <Text
              style={{
                flex: 2,
                fontSize: 12,
                color: '#9B3189',
                textAlign: 'center',
              }}>
              Type
            </Text>
            <Image
              source={require('../utils/assets/Svg/notifications.svg')}
              style={{
                height: 20,
                width: 20,
                //   right: 20,
                alignItems: 'flex-end',
                resizeMode: 'contain',
              }}
            />
          </View>

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
                    borderRadius: 10,
                    flex: 3,
                    backgroundColor: '#9B3189',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  ref={setPopoverAnchor}
                  onPress={openPopover}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    View
                  </Text>
                </TouchableOpacity>
                <Popover
                  contentStyle={styles.content}
                  arrowStyle={styles.arrow}
                  backgroundStyle={styles.background}
                  visible={popoverVisible}
                  onClose={closePopover}
                  fromRect={popoverAnchorRect}
                  supportedOrientations={['portrait', 'landscape']}>
                  <Text
                    style={{
                      color: 'white',
                      // backgroundColor: 'red',
                    }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea co
                  </Text>
                </Popover>
              </React.Fragment>
            )}
          </PopoverController>
        </View>
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
    width: 300,
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

export default Notebook;
