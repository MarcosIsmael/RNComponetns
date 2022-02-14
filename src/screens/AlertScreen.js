import React from 'react'
import { Alert, Button, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'

const AlertScreen = () => {
    const showAlert = ()=>{
        Alert.alert(
            "Titulo",
            "Este es el mensaje de ela alerta",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "destructive"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {
                cancelable:true
            }
          );
    }
  return (
    <View style={styles.marginGlobal}>
        <HeaderTitle title={'Alerts'}/>
        <Button
        title='mostrar alerta'
        onPress={showAlert}
        />
    </View>
  )
}

export default AlertScreen