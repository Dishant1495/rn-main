import React, {Component} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';

import Info from './info';
import Notebook from './Notebook';
import Highlight from './Highlight';

import Chat from './Chat';
import Mates from './Mates';
import Doubts from './Doubts';

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: true,
      notebook: false,
      highlight: false,
      chat: false,
      mates: false,
      doubts: false,
    };
  }

  onClick = (key) => {
    switch (key) {
      case 'information':
        this.setState({
          information: true,
          notebook: false,
          highlight: false,
          chat: false,
          mates: false,
          doubts: false,
        });
        // this.props.navigation.navigate('Info');
        break;
      case 'notebook':
        this.setState({
          notebook: true,
          information: false,
          highlight: false,
          chat: false,
          mates: false,
          doubts: false,
        });
        break;
      case 'highlight':
        this.setState({
          highlight: true,
          information: false,
          notebook: false,
          chat: false,
          mates: false,
          doubts: false,
        });
        break;

      case 'chat':
        this.setState({
          chat: true,
          information: false,
          notebook: false,
          highlight: false,
          mates: false,
          doubts: false,
        });
        break;

      case 'mates':
        this.setState({
          chat: false,
          information: false,
          notebook: false,
          highlight: false,
          mates: true,
          doubts: false,
        });
        break;
      case 'doubts':
        this.setState({
          chat: false,
          information: false,
          notebook: false,
          highlight: false,
          mates: false,
          doubts: true,
        });
        break;
    }
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            minHeight: 62,
            alignItems: 'center',
            paddingHorizontal: 8,
            backgroundColor: '#F2F9FA',
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
              Science
            </Text>
          </View>
          <View style={{flex: 3, alignItems: 'center', flexDirection: 'row'}}>
            <View style={{marginRight: 30}}>
              <TouchableOpacity onPress={this.showDatePicker}>
                <Text
                  style={{color: '#532280', fontSize: 10, textAlign: 'right'}}>
                  Today
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: '#532280', fontSize: 10}}>
                    13-01-2021
                  </Text>
                  <Image
                    source={require('../utils/assets/Image/bottom_arrow.png')}
                    style={{
                      height: 8,
                      width: 8,
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
                //   right: 20,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>

        <ScrollView>
          <View style={{marginBottom: 20}}>
            <Image
              source={require('../utils/assets/Image/man_header.png')}
              style={{
                height: 200,
                width: '100%',
                resizeMode: 'stretch',
              }}
            />

            <ScrollView
              style={{paddingHorizontal: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  paddingVertical: 10,
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'column'}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.onClick('information');
                    }}>
                    <Text
                      style={{
                        color: '#9B3189',
                        color: this.state.information ? '#532280' : '#9B3189',
                        fontWeight: this.state.information ? 'bold' : null,
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginRight: 15,
                      }}>
                      Information
                    </Text>
                  </TouchableOpacity>

                  {this.state.information == true ? (
                    <View
                      style={{
                        backgroundColor: this.state.information
                          ? '#532280'
                          : '#9B3189',
                        height: 3,
                        width: 80,
                        marginTop: 3,
                      }}></View>
                  ) : null}
                </View>
                <View style={{flexDirection: 'column'}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.onClick('notebook');
                    }}>
                    <Text
                      style={{
                        color: this.state.notebook ? '#532280' : '#9B3189',
                        fontWeight: this.state.notebook ? 'bold' : null,
                        fontSize: 15,
                        marginRight: 15,
                      }}>
                      Notebook
                    </Text>
                  </TouchableOpacity>
                  {this.state.notebook == true ? (
                    <View
                      style={{
                        backgroundColor: this.state.notebook
                          ? '#532280'
                          : '#9B3189',
                        height: 3,
                        width: 65,
                        marginTop: 3,
                      }}></View>
                  ) : null}
                </View>

                <View style={{flexDirection: 'column'}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.onClick('highlight');
                    }}>
                    <Text
                      style={{
                        color: this.state.highlight ? '#532280' : '#9B3189',
                        fontWeight: this.state.highlight ? 'bold' : null,
                        fontSize: 15,
                        marginRight: 15,
                      }}>
                      Highlight
                    </Text>
                  </TouchableOpacity>
                  {this.state.highlight == true ? (
                    <View
                      style={{
                        backgroundColor: this.state.highlight
                          ? '#532280'
                          : '#9B3189',
                        height: 3,
                        width: 65,
                        marginTop: 3,
                      }}></View>
                  ) : null}
                </View>

                <View style={{flexDirection: 'column'}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.onClick('chat');
                    }}>
                    <Text
                      style={{
                        color: this.state.chat ? '#532280' : '#9B3189',
                        fontWeight: this.state.chat ? 'bold' : null,
                        fontSize: 15,
                        fontSize: 15,
                        marginRight: 15,
                      }}>
                      Chat
                    </Text>
                  </TouchableOpacity>
                  {this.state.chat == true ? (
                    <View
                      style={{
                        backgroundColor: this.state.chat
                          ? '#532280'
                          : '#9B3189',
                        height: 3,
                        width: 30,
                        marginTop: 3,
                      }}
                    />
                  ) : null}
                </View>
                <View style={{flexDirection: 'column'}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.onClick('mates');
                    }}>
                    <Text
                      style={{
                        color: this.state.mates ? '#532280' : '#9B3189',
                        fontWeight: this.state.mates ? 'bold' : null,
                        fontSize: 15,
                        marginRight: 15,
                      }}>
                      Mates
                    </Text>
                  </TouchableOpacity>
                  {this.state.mates == true ? (
                    <View
                      style={{
                        backgroundColor: this.state.mates
                          ? '#532280'
                          : '#9B3189',
                        height: 3,
                        width: 30,
                        marginTop: 3,
                      }}
                    />
                  ) : null}
                </View>

                <View style={{flexDirection: 'column'}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.onClick('doubts');
                    }}>
                    <Text
                      style={{
                        color: this.state.doubts ? '#532280' : '#9B3189',
                        fontWeight: this.state.doubts ? 'bold' : null,
                        fontSize: 15,
                        marginRight: 15,
                      }}>
                      Doubts
                    </Text>
                  </TouchableOpacity>
                  {this.state.doubts == true ? (
                    <View
                      style={{
                        backgroundColor: this.state.doubts
                          ? '#532280'
                          : '#9B3189',
                        height: 3,
                        width: 30,
                        marginTop: 3,
                      }}
                    />
                  ) : null}
                </View>
              </View>
            </ScrollView>

            {/* <Info /> */}
            {this.state.information == true ? <Info /> : null}
            {this.state.notebook == true && <Notebook />}

            {this.state.highlight == true && <Highlight />}
            {this.state.chat == true && <Chat />}
            {this.state.mates == true && <Mates />}
            {this.state.doubts == true && <Doubts />}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Information;
