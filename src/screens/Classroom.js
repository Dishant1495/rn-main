import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const Tab = createBottomTabNavigator();
import myaccount from './Myaccount';
import Information from './Information';
import Homework from './Homework';
import Periods from './Periods';

class Classroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      periods: false,
      homework: true,
      diary: false,
    };
  }
  showDatePicker = () => {
    // setDatePickerVisibility(true);
    this.setState({isDatePickerVisible: !this.state.isDatePickerVisible});
  };

  hideTimePicker = () => {
    // setDatePickerVisibility(false);
    this.setState({isDatePickerVisible: false});
  };
  tabClick = (key) => {
    switch (key) {
      case 'periods':
        this.setState({
          periods: true,
          homework: false,
          diary: false,
        });
        break;
      case 'homework':
        this.setState({
          periods: false,
          homework: true,
          diary: false,
        });
        break;

      case 'diary':
        this.setState({
          periods: false,
          homework: false,
          diary: true,
        });
        break;
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            minHeight: 62,
            alignItems: 'center',
            paddingHorizontal: 8,
            backgroundColor: '#F2F3FA',
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
              source={require('../utils/assets/Svg/back.svg')}
            />
          </View>

          <View style={{flex: 3}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#532280'}}>
              Classroom
            </Text>
          </View>
          <View style={{flex: 3, alignItems: 'center', flexDirection: 'row'}}>
            <View style={{marginRight: 30}}>
              <TouchableOpacity onPress={this.showDatePicker}>
                <Text style={{color: '#532280', textAlign: 'right'}}>
                  Today
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: '#532280'}}>13-01-2021</Text>
                  <Image
                    source={require('../utils/assets/Image/bottom_arrow.png')}
                    style={{
                      height: 10,
                      width: 10,
                      left: 4,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Image
              source={require('../utils/assets/Svg/notifications.svg')}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
        <DateTimePickerModal
          isVisible={this.state.isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'white',
          }}>
          <View style={{marginTop: 14}}>
            <TouchableOpacity onPress={() => this.tabClick('periods')}>
              <Text
                style={{
                  color: '#9B3189',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Periods
              </Text>
              {this.state.periods == true ? (
                <View
                  style={{
                    backgroundColor: '#9B3189',
                    height: 3,
                    marginTop: 3,
                  }}></View>
              ) : null}
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 14}}>
            <TouchableOpacity onPress={() => this.tabClick('homework')}>
              <Text
                style={{
                  color: '#9B3189',
                  textAlign: 'center',
                  fontSize: 15,
                  marginRight: 15,
                }}>
                HomeWork
              </Text>
            </TouchableOpacity>
            {this.state.homework == true ? (
              <View
                style={{
                  backgroundColor: '#9B3189',
                  height: 3,
                  marginTop: 4,
                  width: 70,
                }}></View>
            ) : null}
          </View>

          <View style={{marginTop: 14}}>
            <TouchableOpacity onPress={() => this.tabClick('diary')}>
              <Text
                style={{
                  color: '#9B3189',
                  textAlign: 'center',
                  fontSize: 15,
                  marginRight: 15,
                }}>
                Diary
              </Text>
            </TouchableOpacity>
            {this.state.diary == true ? (
              <View
                style={{
                  backgroundColor: '#9B3189',
                  height: 3,
                  width: 40,
                  marginTop: 3,
                }}></View>
            ) : null}
          </View>
        </View>

        {this.state.periods == true ? <Periods /> : null}
        {this.state.homework == true ? <Homework /> : null}
      </View>
    );
  }
}
export default function Bottomtab() {
  const customTabBarStyle = {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    style: {backgroundColor: '#532280', minHeight: 60, paddingBottom: 10},
  };
  return (
    <Tab.Navigator
      initialRouteName="Classroom"
      activeColor="#532280"
      tabBarOptions={customTabBarStyle}
      shifting="false">
      <Tab.Screen
        name="home"
        options={{
          tabBarLabel: 'My Campus',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../utils/assets/Image/home.png')}
              style={{
                height: 35,
                width: 35,
                resizeMode: 'cover',
                // marginLeft: 8,
              }}
            />
          ),
        }}
        component={Classroom}
      />

      <Tab.Screen
        name="Information"
        options={{
          tabBarLabel: 'Classroom',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../utils/assets/Image/home.png')}
              style={{
                height: 40,
                width: 40,
                resizeMode: 'cover',
                // marginLeft: 8,
              }}
            />
          ),
        }}
        component={Information}
      />
      <Tab.Screen
        name="account"
        options={{
          tabBarLabel: 'Notice Board',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../utils/assets/Image/home.png')}
              style={{
                height: 40,
                width: 40,
                resizeMode: 'cover',
                // marginLeft: 8,
              }}
            />
          ),
        }}
        component={myaccount}
      />
      <Tab.Screen
        name="xx"
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../utils/assets/Image/home.png')}
              style={{
                height: 40,
                width: 40,
                resizeMode: 'cover',
                // marginLeft: 8,
              }}
            />
          ),
        }}
        component={myaccount}
      />
    </Tab.Navigator>
  );
}
