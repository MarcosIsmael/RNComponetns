import React from 'react';
import { FlatList, Text, View } from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import { MenuItems } from '../data/MenuItems';
import { styles } from '../theme/AppTheme';
const HomeScreen = () => {


  const item = ({ nombre }) => {
   return <View>
      <Text >{nombre}</Text>
    </View>
  ;}



  const separator = ()=>{
    return (
      <View style={{borderBottomWidth:2,opacity:0.4,marginVertical:8}}></View>
    )
  }
  return (
          <View style={{flex:1, ...styles.marginGlobal}}>
            <FlatList
            data={MenuItems}
            renderItem={({item})=> <FlatListMenuItem item={item}/>}
            ListHeaderComponent={()=> <HeaderTitle title='opciones de Menu'/>}
            ItemSeparatorComponent={separator}
            />
          </View>
        );
};

export default HomeScreen;
