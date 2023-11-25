/*Här gav jag mig på DatePickerIOS från ett bibliotek 'react-native-datepicker',
var ett förslag till en typisk IOS komponent.
I framtiden ska det vara att jag kan lägga till en anteckning om jag gjort mina
övningar för magen eller liknande. */

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import DatePickerIOS from 'react-native-datepicker';

export default function DetailsScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Home')} style={styles.title}>
        Make notes about your daily health or food intake
      </Text>

      <DatePickerIOS
        date={selectedDate}
        onDateChange={handleDateChange}
        mode="date"
        style={styles.datePicker}
        locale="en"
        useNativeDriver={true}
      />
    </View>
  );
}

DetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 26,
    fontWeight: 'thin',
  },
  datePicker: {
    marginTop: 20,
  },
});
