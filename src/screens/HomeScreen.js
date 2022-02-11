import React from 'react';
import { FlatList, Text, View } from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { styles } from '../theme/AppTheme';
const HomeScreen = () => {

  const lista = [
    {
      nombre:'Estrella',
      icono:'star-outline'
    },
    {
      nombre:'Marcos',
      icono: 'cube-outline'
    },
    {
      nombre:'Lucas',
      icono:'body-outline'
    },
    {
      nombre:'Andres',
      icono:'beer-outline'
    }
  ]

  const item = ({ nombre }) => {
   return <View>
      <Text >{nombre}</Text>
    </View>
  ;}

  const renderListHeader = ()=>{
    return (
        <View style={{marginTop:20}}>
          <Text style={styles.title}> opciones de Menu</Text>
        </View>
    )
  }


  const separator = ()=>{
    return (
      <View style={{borderBottomWidth:2,opacity:0.4,marginVertical:8}}></View>
    )
  }
  return (
          <View style={{flex:1, ...styles.marginGlobal}}>
            <FlatList
            data={lista}
            renderItem={({item})=> <FlatListMenuItem item={item}/>}
            ListHeaderComponent={renderListHeader}
            ItemSeparatorComponent={separator}
            />
          </View>
        );
};

export default HomeScreen;
