import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Homework extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      que1: false,
      value1: '',
      que2: false,
      que3: false,
      que4: false,
      que5: false,
      value2: '',
      value3: '',
      value4: '',
      value5: '',
    };
  }

  onSubmit = () => {
    this.setState({open: true});
  };

  question1 = (key) => {
    switch (key) {
      case 'que1':
        this.setState({que1: !this.state.que1});
        break;

      case 'que2':
        this.setState({que2: !this.state.que2});
        break;
      case 'que3':
        this.setState({que3: !this.state.que3});
        break;
      case 'que4':
        this.setState({que4: !this.state.que4});
        break;
      case 'que5':
        this.setState({que5: !this.state.que5});
        break;
    }
  };
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
      <ScrollView>
        {this.state.open == false ? (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
              style={{marginTop: hp(1), backgroundColor: 'white'}}
              numColumns={2}
              data={popularschool}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      // marginTop: hp(2),
                      // marginRight: wp(5),
                      backgroundColor: 'white',
                      height: '88%',
                      width: '45%',
                      borderRadius: 30,
                      shadowOffset: {width: 3, height: 3},
                      shadowColor: 'black',
                      shadowOpacity: 1,
                      elevation: 8,

                      margin: 8,
                    }}>
                    <View
                      style={{
                        // width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                        paddingHorizontal: 20,
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontWeight: 'bold', fontSize: 14}}>
                        Science
                      </Text>
                      <Text style={{fontSize: 12, color: 'red'}}>Unsolved</Text>
                    </View>

                    <Text
                      style={{
                        marginTop: 8,
                        color: '#451D6A',
                        fontSize: 12,
                        paddingHorizontal: 20,
                      }}>
                      Chp. 1 Gravitational Force What is Gravity?
                    </Text>

                    <Text
                      style={{
                        color: '#451D6A',
                        fontSize: 10,
                        paddingHorizontal: 20,
                        marginTop: 10,
                      }}>
                      Date: 13-01-2021
                    </Text>

                    <TouchableOpacity
                      style={{
                        padding: 15,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        marginTop: 10,
                        backgroundColor: '#F2F3FA',
                      }}
                      onPress={this.onSubmit}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontWeight: 'bold',
                          color: '#451D6A',
                        }}>
                        View & Submit
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        ) : (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View
              style={{
                backgroundColor: '#F2F3FA',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 16,
                marginTop: 10,
              }}>
              <Text style={{fontWeight: 'bold'}}>Science</Text>
              <Text style={{color: '#9B3189'}}>Chp. 1 Gravitational Force</Text>

              <Text style={{fontWeight: 'bold'}}>5/5</Text>
            </View>

            <View style={{backgroundColor: 'white'}}>
              <View style={{marginHorizontal: 16}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#9B3189',
                    marginVertical: 10,
                  }}>
                  Q1 - What is Gravity?
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    borderRadius: 15,
                    borderWidth: 0.5,
                    borderColor: '#532280',
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 0},
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    zIndex: 5,
                    elevation: 8,
                    minHeight: 50,
                  }}
                  onPress={() => {
                    this.question1('que1');
                  }}>
                  {!this.state.que1 ? (
                    <Text style={{padding: 15, color: '#9B3189'}}>
                      {this.state.value1 == ''
                        ? 'Write your Answer Here...…….'
                        : this.state.value1}
                    </Text>
                  ) : null}
                  {this.state.que1 ? (
                    <View>
                      <TextInput
                        placeholder="Write your Answer Here...……."
                        placeholderTextColor="#9B3189"
                        multiline={true}
                        onChangeText={(text) => this.setState({value1: text})}
                        value={this.state.value1}
                        style={{
                          zIndex: 2,

                          paddingLeft: 15,
                          marginRight: 30,
                        }}
                      />
                      <View style={{flexDirection: 'row-reverse'}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#9B3189',
                            padding: 2,
                            // position: 'absolute',
                            width: '20%',
                            margin: 20,
                            borderRadius: 30,
                          }}
                          onPress={() => {
                            this.question1('que1');
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 18,
                              color: 'white',
                            }}>
                            Save
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : null}
                  <Image
                    style={{
                      right: 0,
                      top: 17,
                      position: 'absolute',
                      marginRight: 10,
                      resizeMode: 'contain',
                    }}
                    resizeMode="contain"
                    source={require('../utils/assets/Svg/kalam.svg')}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginHorizontal: 16}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#9B3189',
                    marginVertical: 10,
                  }}>
                  Q2 - What is Gravity?
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    borderRadius: 15,
                    borderWidth: 0.5,
                    borderColor: '#532280',
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 0},
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    zIndex: 5,
                    elevation: 8,
                  }}
                  onPress={() => {
                    this.question1('que2');
                  }}>
                  {!this.state.que2 ? (
                    <Text style={{padding: 15, color: '#9B3189'}}>
                      {this.state.value2 == ''
                        ? 'Write your Answer Here...…….'
                        : this.state.value2}
                    </Text>
                  ) : null}
                  {this.state.que2 ? (
                    <View>
                      <TextInput
                        placeholder="Write your Answer Here...……."
                        placeholderTextColor="#9B3189"
                        multiline={true}
                        onChangeText={(text) => this.setState({value2: text})}
                        value={this.state.value2}
                        style={{
                          zIndex: 2,

                          paddingLeft: 15,
                          marginRight: 30,
                        }}
                      />
                      <View style={{flexDirection: 'row-reverse'}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#9B3189',
                            padding: 2,
                            // position: 'absolute',
                            width: '20%',
                            margin: 20,
                            borderRadius: 30,
                          }}
                          onPress={() => {
                            this.question1('que2');
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 18,
                              color: 'white',
                            }}>
                            Save
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : null}
                  <Image
                    style={{
                      right: 0,
                      top: 17,
                      position: 'absolute',
                      marginRight: 10,
                      resizeMode: 'contain',
                    }}
                    resizeMode="contain"
                    source={require('../utils/assets/Svg/kalam.svg')}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginHorizontal: 16}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#9B3189',
                    marginVertical: 10,
                  }}>
                  Q3 - What is Gravity?
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    borderRadius: 15,
                    borderWidth: 0.5,
                    borderColor: '#532280',
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 0},
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    zIndex: 5,
                    elevation: 8,
                  }}
                  onPress={() => {
                    this.question1('que3');
                  }}>
                  {!this.state.que3 ? (
                    <Text style={{padding: 15, color: '#9B3189'}}>
                      {this.state.value3 == ''
                        ? 'Write your Answer Here...…….'
                        : this.state.value3}
                    </Text>
                  ) : null}
                  {this.state.que3 ? (
                    <View>
                      <TextInput
                        placeholder="Write your Answer Here...……."
                        placeholderTextColor="#9B3189"
                        multiline={true}
                        onChangeText={(text) => this.setState({value3: text})}
                        value={this.state.value3}
                        style={{
                          zIndex: 2,

                          paddingLeft: 15,
                          marginRight: 30,
                        }}
                      />
                      <View style={{flexDirection: 'row-reverse'}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#9B3189',
                            padding: 2,
                            // position: 'absolute',
                            width: '20%',
                            margin: 20,
                            borderRadius: 30,
                          }}
                          onPress={() => {
                            this.question1('que3');
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 18,
                              color: 'white',
                            }}>
                            Save
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : null}
                  <Image
                    style={{
                      right: 0,
                      top: 17,
                      position: 'absolute',
                      marginRight: 10,
                      resizeMode: 'contain',
                    }}
                    resizeMode="contain"
                    source={require('../utils/assets/Svg/kalam.svg')}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginHorizontal: 16}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#9B3189',
                    marginVertical: 10,
                  }}>
                  Q4 - What is Gravity?
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    borderRadius: 15,
                    borderWidth: 0.5,
                    borderColor: '#532280',
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 0},
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    zIndex: 5,
                    elevation: 8,
                  }}
                  onPress={() => {
                    this.question1('que4');
                  }}>
                  {!this.state.que4 ? (
                    <Text style={{padding: 15, color: '#9B3189'}}>
                      {this.state.value4 == ''
                        ? 'Write your Answer Here...…….'
                        : this.state.value4}
                    </Text>
                  ) : null}
                  {this.state.que4 ? (
                    <View>
                      <TextInput
                        placeholder="Write your Answer Here...……."
                        placeholderTextColor="#9B3189"
                        multiline={true}
                        onChangeText={(text) => this.setState({value4: text})}
                        value={this.state.value4}
                        style={{
                          zIndex: 2,

                          paddingLeft: 15,
                          marginRight: 30,
                        }}
                      />
                      <View style={{flexDirection: 'row-reverse'}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#9B3189',
                            padding: 2,
                            // position: 'absolute',
                            width: '20%',
                            margin: 20,
                            borderRadius: 30,
                          }}
                          onPress={() => {
                            this.question1('que4');
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 18,
                              color: 'white',
                            }}>
                            Save
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : null}
                  <Image
                    style={{
                      right: 0,
                      top: 17,
                      position: 'absolute',
                      marginRight: 10,
                      resizeMode: 'contain',
                    }}
                    resizeMode="contain"
                    source={require('../utils/assets/Svg/kalam.svg')}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginHorizontal: 16}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#9B3189',
                    marginVertical: 10,
                  }}>
                  Q5 - What is Gravity?
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    borderRadius: 15,
                    borderWidth: 0.5,
                    borderColor: '#532280',
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 0},
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    zIndex: 5,
                    elevation: 8,
                  }}
                  onPress={() => {
                    this.question1('que5');
                  }}>
                  {!this.state.que5 ? (
                    <Text style={{padding: 15, color: '#9B3189'}}>
                      {this.state.value5 == ''
                        ? 'Write your Answer Here...…….'
                        : this.state.value5}
                    </Text>
                  ) : null}
                  {this.state.que5 ? (
                    <View>
                      <TextInput
                        placeholder="Write your Answer Here...……."
                        placeholderTextColor="#9B3189"
                        multiline={true}
                        onChangeText={(text) => this.setState({value5: text})}
                        value={this.state.value5}
                        style={{
                          zIndex: 2,

                          paddingLeft: 15,
                          marginRight: 30,
                        }}
                      />
                      <View style={{flexDirection: 'row-reverse'}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#9B3189',
                            padding: 2,
                            // position: 'absolute',
                            width: '20%',
                            margin: 20,
                            borderRadius: 30,
                          }}
                          onPress={() => {
                            this.question1('que5');
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 18,
                              color: 'white',
                            }}>
                            Save
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : null}
                  <Image
                    style={{
                      right: 0,
                      top: 17,
                      position: 'absolute',
                      marginRight: 10,
                      resizeMode: 'contain',
                    }}
                    resizeMode="contain"
                    source={require('../utils/assets/Svg/kalam.svg')}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 20,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F2F3FA',
                    borderRadius: 10,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 18, color: '#9B3189'}}>
                    Save & Review
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#9B3189',
                    padding: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 18, color: 'white'}}>
                    Save & Review
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
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
export default Homework;
