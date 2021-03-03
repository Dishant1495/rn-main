import React, {
  useState,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from 'react';

import {
  Animated,
  Dimensions,
  Platform,
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
const windowSize = Dimensions.get('window');

const Toast = forwardRef((props, ref) => {
  //   const {colors} = data.themeReducers;

  const [toastText, setToastText] = useState('Toast');
  const [toastType, setToastType] = useState('MESSAGE');
  const [isVisible, setIsVisible] = useState(false);
  const [toastAnimation] = useState(new Animated.Value(0));

//   const toastAnimation = new Animated.Value(0);

  const firstTopPosition = -(
    styles.toastTextStyle.padding * 5 +
    styles.toastTextStyle.fontSize * 5
  );

  const topPosition = toastAnimation.interpolate({
    inputRange: [0, 0.03, 0.95, 1],
    outputRange: [firstTopPosition, 10, 10, firstTopPosition],
  });
  /**
   * Animates Toast
   * @param { } None
   * @returns { } None
   */
  function animationDown() {
    Animated.timing(toastAnimation, {
      toValue: 1,
      duration: props.duration,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    return () => {};
  }, []);

  hide = () => {
    setIsVisible(false);
  };

  /**
   * Sets visibility of toast to true
   * @param {*} text
   * @param {string} [type="ERROR"]
   * @returns {} None
   */
  useImperativeHandle(ref, () => ({
    show(text, type = 'ERROR') {
      setIsVisible(true);

      console.log('-----------', text);

      toastAnimation.setValue(0);
      animationDown();
      setTimeout(() => {
        setIsVisible(false);
      }, props.duration);

      setToastText(text);
      setToastType(type);
    },
  }));

  return (
    <SafeAreaView>
      <Modal
        animationType="none"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {}}>
        <SafeAreaView>
          <TouchableOpacity
            style={{height: '100%', width: '100%'}}
            activeOpacity={1}
            onPress={() => setIsVisible(false)}>
            <Animated.View
              style={[
                styles.toastStyle,
                {
                  top: 8,
                  backgroundColor:
                    toastType == 'ERROR'
                      ? 'red'
                      : toastType == 'SUCCESS'
                      ? 'green'
                      : 'red',
                },
              ]}>
              <Text
                style={[
                  styles.toastTextStyle,
                  {
                    color: '#ffffff',
                  },
                ]}>
                {toastText}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  toastStyle: {
    // backgroundColor: Theme.colors.error,
    borderRadius: 4,
    // marginHorizontal: windowSize.width > 500 ? '23%' : '4%',
    width: '94%',
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  toastTextStyle: {
    ...Platform.select({
      android: {
        padding: 10,
      },
      ios: {
        padding: 15,
      },
    }),
    // color: Theme.colors.white,
    // fontSize: Theme.fontSizes.medium,
  },
});

export default Toast;
