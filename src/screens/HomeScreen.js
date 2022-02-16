import React from 'react';
import { FlatList, Text, View } from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import Separator from '../components/Separator';
import { MenuItems } from '../data/MenuItems';
import { styles } from '../theme/AppTheme';
const HomeScreen = () => {





  return (
          <View style={{flex:1, ...styles.marginGlobal}}>
            <FlatList
            data={MenuItems}
            renderItem={({item})=> <FlatListMenuItem item={item}/>}
            ListHeaderComponent={()=> <HeaderTitle title='opciones de Menu'/>}
            ItemSeparatorComponent={Separator}
            />
          </View>
        );
};

export default HomeScreen;
