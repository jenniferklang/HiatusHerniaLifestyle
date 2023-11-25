import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';

export default function SettingsScreen({ navigation }) {
  const scale = useRef(new Animated.Value(1)).current;
  const [refreshing, setRefreshing] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const animateScale = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
    ]).start();
  };

  useEffect(() => {
    animateScale();
  }, []);

  const scaleStyle = {
    transform: [{ scale }],
  };

  const onRefresh = () => {
    setRefreshing(true);
    animateScale();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setScrollOffset(offsetY);
  };

  const handleScrollEndDrag = () => {
    setScrollEnabled(true);
  };

  const handleScrollBeginDrag = () => {
    if (scrollOffset === 0) {
      setScrollEnabled(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onScroll={handleScroll}
      onScrollEndDrag={handleScrollEndDrag}
      onScrollBeginDrag={handleScrollBeginDrag}
      scrollEnabled={scrollEnabled}
    >
      <View style={styles.content}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={styles.headerText}
        >
          It is important to make sure you are getting all the nutrients because
          you have to avoid certain foods.
        </Text>
        <View style={styles.imageContainer}>
          <Animated.Image
            style={[styles.image, scaleStyle]}
            source={require('../../assets/vitamins2.jpg')}
            resizeMode="cover"
          />
        </View>
      </View>
    </ScrollView>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 26,

    marginBottom: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
