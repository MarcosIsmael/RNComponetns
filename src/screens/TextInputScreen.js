import React, { useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native'
import CustomSwitch from '../components/CustomSwitch'
import HeaderTitle from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/AppTheme'

const TextInputScreen = () => {
   const  { onChange, form}= useForm({
    name:'',
    email:'',
    phone:'',
    isSubscribe:false
})
  return (
      <KeyboardAvoidingView
      behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
      >
          <ScrollView>
                <View style={styles.marginGlobal}> 
                    <HeaderTitle title='TextInput'/>
                    <TextInput
                    key={'1'}
                    style={stylesScreen.inputStyle}    
                    placeholder={'Ingrese su name'}
                    autoCorrect={false}
                    autoCapitalize='words'
                    onChangeText={(value)=> onChange(value, 'name')}
                    />
                    <TextInput
                    key={'2'}
                    style={stylesScreen.inputStyle}    
                    placeholder={'Ingrese su email'}
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={(value)=> onChange(value, 'email')}
                    keyboardType='email-address'

                    />
                    <TextInput
                    key={'3'}
                    style={stylesScreen.inputStyle}   
                    placeholder={'Ingrese su phone'}
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={(value)=> onChange(value, 'phone')}
                    keyboardType='phone-pad'
                    />
                      <View style={styles.switchRow}>
                        <Text style={styles.switchText}>Suscribete</Text>
                    <CustomSwitch isOn={form.isSubscribe} onChange={(value)=> onChange(value,'isSubscribe')}/>
                    </View>
                </View>
                <HeaderTitle title={JSON.stringify(form, null, 3)}/>
                <View style={{height:20}}/>
          </ScrollView>
      </KeyboardAvoidingView>
  )
}

export default TextInputScreen
const stylesScreen = StyleSheet.create({
    inputStyle:{
        borderWidth: 1,
        height:50,
        paddingHorizontal:10,
        borderRadius:10,
        borderColor:'rgba(0,0,0,0.3)',
        marginVertical:10
    },
    switchRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    switchText:{
        fontSize:25
    }
});