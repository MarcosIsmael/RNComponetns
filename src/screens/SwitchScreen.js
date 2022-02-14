import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';

const SwitchScreen = () => {
    const [state, setstate] = useState({
        isActive: false,
        isHungry : false,
        isHappy:true
    })
    const {isActive, isHappy,  isHungry}= state
    const onChange = (value, field)=>{
        setstate({
            ...state,
            [field]:value
        })
    }
  return (
    <View style={{marginHorizontal:20}}>

        <HeaderTitle title='Switches'/>
        <View style={styles.switchRow}>
            <Text style={styles.switchText}>isActive</Text>
           <CustomSwitch isOn={isActive} onChange={(value)=>onChange(value, 'isActive')}/>
        </View>
        <View style={styles.switchRow}>
            <Text style={styles.switchText}>isHungry</Text>
           <CustomSwitch isOn={isHungry} onChange={(value)=>onChange(value, 'isHungry')}/>
        </View>
        <View style={styles.switchRow}>
            <Text style={styles.switchText}>isHappy</Text>
           <CustomSwitch isOn={isHappy} onChange={(value)=>onChange(value, 'isHappy')}/>
        </View>
        <Text style={styles.switchText}>
            {JSON.stringify(state, null,5)}
        </Text>
    </View> 
  )
}

export default SwitchScreen

const styles = StyleSheet.create({
switchRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
},
switchText:{
    fontSize:25
}
});