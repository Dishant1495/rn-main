import React, {PureComponent} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

class componentName extends PureComponent {
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
      <View style={{flex: 1}}>
        <Text
          style={{fontWeight: 'bold', color: '#532280', marginHorizontal: 20}}>
          45 Mates Joined this Class{' '}
        </Text>

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
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  margin: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 4,
                  }}>
                  <Image
                    source={require('../utils/assets/Image/user_name.png')}
                    style={{
                      resizeMode: 'contain',
                      height: 45,
                      width: 45,
                      left: 2,
                      marginRight: 20,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#9B3189',
                        fontWeight: 'bold',
                        fontSize: 13,
                      }}>
                      Ashu Gupta{' '}
                    </Text>
                    <Text
                      style={{
                        color: '#9B3189',
                        fontSize: 10,
                      }}>
                      Student
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: '#9B3189',
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: 'white'}}>Chat</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default componentName;
