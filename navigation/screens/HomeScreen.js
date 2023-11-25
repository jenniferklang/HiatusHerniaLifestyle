/* Det här är en app för de som lider av diafragmabråck,
magmunsbråck som det också kallas. Sen längre fram ska man kunna skriva ner sin matdagbok, träning etc. Det ska finnas bra recept för magen, utan för mkt syra. etc. */

import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'lightblue',
      }}
    >
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          marginTop: 15,
          marginBottom: 20,
        }}
      >
        We want to inspire and assist you in improving your quality of life
        despite having a hiatal hernia.
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            flex: 1,
            aspectRatio: 1,
            margin: 2,
            backgroundColor: 'white',
            borderRadius: 20,
            overflow: 'hidden',
          }}
          onPress={() => navigation.navigate('DiaryScreen')}
        >
          <Image
            source={require('../../assets/diary2.jpg')}
            style={{ flex: 1, width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            aspectRatio: 1,
            margin: 2,
            backgroundColor: 'white',
            borderRadius: 20,
            overflow: 'hidden',
          }}
          onPress={() => navigation.navigate('ExerciseScreen')}
        >
          <Image
            source={require('../../assets/exercise1.jpg')}
            style={{ flex: 1, width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            flex: 1,
            aspectRatio: 1,
            margin: 2,
            backgroundColor: 'lightcyan',
            borderRadius: 20,
            overflow: 'hidden',
          }}
          onPress={() => navigation.navigate('RecipesScreen')}
        >
          <Image
            source={require('../../assets/food2.jpg')}
            style={{ flex: 1, width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            aspectRatio: 1,
            margin: 2,
            backgroundColor: 'white',
            borderRadius: 20,
            overflow: 'hidden',
          }}
          onPress={() => navigation.navigate('VitaminsScreen')}
        >
          <Image
            source={require('../../assets/vitamins1.jpg')}
            style={{ flex: 1, width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <Button
        title="Get caring recipes for your stomach?"
        onPress={() => navigation.navigate('RecipesScreen')}
      />
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
