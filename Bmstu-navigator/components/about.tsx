import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ObjectInt } from './objectcard';
import NavigationBar from './navbar';

type ObjectDetailsRouteProp = RouteProp<{
  ObjectDetailsScreen: { object: ObjectInt };
}, 'ObjectDetailsScreen'>;

const ObjectDetailsScreen: React.FC = () => {
  const route = useRoute<ObjectDetailsRouteProp>();
  const { object } = route.params;

  return (
    <View style={styles.container}>
      <NavigationBar />
      <View style={styles.content}>
        <Text style={styles.title}>Путь:{object.name}</Text>
        <Text style={styles.info}>Описание: {object.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ObjectDetailsScreen;