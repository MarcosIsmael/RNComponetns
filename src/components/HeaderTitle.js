import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'

const HeaderTitle = ({title}) => {
  return (
        <View style={{marginTop:20}}>
          <Text style={styles.title}> {title}</Text>
        </View>
    )
}

export default HeaderTitle
