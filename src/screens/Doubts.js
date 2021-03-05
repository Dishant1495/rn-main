import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Doubts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, marginHorizontal: 20}}>
        <Text style={{fontWeight: 'bold', color: '#532280'}}>Your Doubts </Text>

        <Text style={{color: '#9B3189', marginTop: 16}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
          {/* nodoubts */}
        </Text>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <Image
            source={require('../utils/assets/Svg/nodoubts.svg')}
            style={{
              resizeMode: 'contain',
              height: 200,
              width: '75%',
            }}
          />
        </View>
      </View>
    );
  }
}

export default Doubts;
