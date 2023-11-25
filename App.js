import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import MainContainer from './navigation/MainContainer';

const SplashScreen = ({ onSplashFinished }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      onSplashFinished();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const loadingText = 'Loading...';

  return showSplash ? (
    <View style={styles.container}>
      <Image
        source={require('./assets/hiatus-hernia-lifestyle2.jpg')}
        resizeMode="contain"
        style={styles.image}
      />

      <Text>{loadingText}</Text>
    </View>
  ) : null;
};

SplashScreen.propTypes = {
  onSplashFinished: PropTypes.func.isRequired,
};

const App = () => {
  const [splashFinished, setSplashFinished] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleSplashFinished = () => {
    setSplashFinished(true);
  };

  const onRefresh = () => {
    setRefreshing(true);

    // Återställ logiken här

    setRefreshing(false);
  };

  useEffect(() => {
    if (splashFinished) {
      // Återställ tillståndet här när sidan besöks igen
    }
  }, [splashFinished]);

  return splashFinished ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/stomach-icon-logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Hiatus Hernia Lifestyle</Text>
      </View>
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <MainContainer />
      </ScrollView>
    </View>
  ) : (
    <SplashScreen onSplashFinished={handleSplashFinished} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingTop: 30,
    paddingBottom: 10,
    height: 100,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapper: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default App;
