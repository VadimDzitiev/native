import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export interface ObjectInt {
  pk: number;
  name: string;
  status: boolean;
  building:string;
  transition:string;
  transition_time: string;
  description: string;
}
interface ObjectCardProps {
  object: ObjectInt;
  onDetailsPress: () => void;
}

const ObjectCard: React.FC<ObjectCardProps> = ({ object, onDetailsPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <Text style={styles.title}>{object.name}</Text>
        <Text style={styles.info}>{object.description}</Text>
        <Text style={styles.info}>{object.transition_time}</Text>
        <Text style={styles.price}>{object.transition}</Text>

 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: 'gray',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  detailsButton: {
    backgroundColor: '#171717',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ObjectCard;