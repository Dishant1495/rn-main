import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Highlight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, margin: 20}}>
        <Text style={{fontWeight: 'bold', color: '#532280'}}>
          Nothing Highlight Today
        </Text>
        <Text style={{color: '#9B3189', marginTop: 16}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        </Text>
      </View>
    );
  }
}

export default Highlight;
