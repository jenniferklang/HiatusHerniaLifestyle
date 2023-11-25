/*
Kriterier:
1. useEffect i samband med fetchanropet till ett API som jag lånat. Ska föreställa "caring" recept. Får bytas ut i framtiden.
2. Här har jag även använt mig utav, react-gesture-handler som fanns med i (https://reactnative.directory/?expo=true) när expo go är iklickad.
När jag fetchar recepten, så om recepten och bilden inte kommer med i rutan kan man kunna scrolla, men tror det har endast med ScrollView att göra men trodde först de var kopplat med biblioteket. lite osäker.
(Har använt mig av fler bibliotek i andra filer som är funkar.)
*/
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState();
  const [randomMeal, setRandomMeal] = useState();

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
          console.log(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  const getRandomMeal = () => {
    if (response && response.meals) {
      const meals = response.meals;
      const randomIndex = Math.floor(Math.random() * meals.length);
      const randomMeal = meals[randomIndex];
      setRandomMeal(randomMeal);
    }
  };

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error.message}</Text>;
    }

    return (
      <View style={styles.contentContainer}>
        <Text style={styles.mealTitle}>{randomMeal && randomMeal.strMeal}</Text>
        <Text style={styles.instructions}>
          {randomMeal && randomMeal.strInstructions}
        </Text>
        {randomMeal && (
          <View>
            <Image
              source={{ uri: randomMeal.strMealThumb }}
              style={styles.image}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View style={styles.sectionTitle}>
          <Button
            title="Shuffle to Get Caring Food Recipes!"
            onPress={getRandomMeal}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {getContent()}
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 20,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 40,
  },
});
