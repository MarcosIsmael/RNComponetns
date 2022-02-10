import React from 'react';
import { FlatList, Text, View } from 'react-native';
const HomeScreen = () => {

  const lista = [
    {
      nombre:'Estrella',
    },
    {
      nombre:'Marcos'
    },
    {
      nombre:'Lucas'
    },
    {
      nombre:'Andres'
    }
  ]

  const Item = ({ nombre }) => (
    <View>
      <Text >{nombre}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item nombre={item.nombre} />
  );
  return (
          <View style={{flex:1}}>
            <FlatList
            data={lista}
            renderItem={renderItem}
            horizontal={true}
            />
          </View>
        );
};

export default HomeScreen;
