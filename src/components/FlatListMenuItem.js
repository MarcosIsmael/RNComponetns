import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

const FlatListMenuItem = ({item}) => {
  return ( 
      <TouchableOpacity
      activeOpacity={0.8}>
        <View style={styles.container}>
            <Icon
            name={item.icono}
            size={23}
            color='gray'
            />
            <View>
                <Text style={styles.itemText}>{item.nombre}</Text>
            </View>
            <Icon
            name='arrow-forward-circle-outline'
            size={23}
            color='gray'
            />
        </View>
      </TouchableOpacity>
  )
}

export default FlatListMenuItem

const styles = StyleSheet.create({
    container :{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemText :{
        fontSize:19
    }
})