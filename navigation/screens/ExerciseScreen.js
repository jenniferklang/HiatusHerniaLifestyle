/*
1. I den här filen har jag använt mig utav,
react-native-reanimated som fanns med i (https://reactnative.directory/?expo=true)
när expo go är iklickad.
Jag har gett mig på en animation, så när man klickar på knappen ska det hända saker.
Jag använder ett gäng "moduler" i samband med det biblioteket. Som importeras.
*/
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Image,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

export default function App() {
  const AnimatedBox = () => {
    const width = useSharedValue(200);
    const height = useSharedValue(200);
    const borderRadius = useSharedValue(0);
    const imageSource = require('../../assets/exercise1.jpg');
    const [showText, setShowText] = useState(false);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        width: withTiming(width.value),
        height: withTiming(height.value),
        borderRadius: withSpring(borderRadius.value),
      };
    });

    const handlePress = () => {
      width.value = width.value === 200 ? 300 : 200;
      height.value = height.value === 200 ? 300 : 200;
      borderRadius.value = borderRadius.value === 0 ? 50 : 0;
      setShowText(!showText);
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Image source={imageSource} style={styles.image} resizeMode="cover" />
          {showText && <Text style={styles.text}>Lets Go!</Text>}
        </Animated.View>
        <TouchableWithoutFeedback onPress={handlePress}>
          <Text style={styles.button}>Push to see animation</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AnimatedBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -66 }, { translateY: -70 }],
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    color: 'black',
    fontSize: 20,
  },
});
