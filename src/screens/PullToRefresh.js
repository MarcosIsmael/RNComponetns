import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'

const PullToRefresh = () => {
    const [refreshing, setRefreshing] = useState(false)

    const [data, setData] = useState('')

    const onRefresh = ()=> {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
            setData('hola mundo')
            console.log('terminamos')
        }, 1500);
    }
  return (
      <ScrollView 
      refreshControl={
          <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={'#5856d6'}
          colors={['white', 'red', 'orange']}
          />
      }
      >
        <View style={styles.marginGlobal}>
            <HeaderTitle title={'Pull to refresh'}/>

            <HeaderTitle title={data}/>
        </View>
      </ScrollView>
  )
}

export default PullToRefresh