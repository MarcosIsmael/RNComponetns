import React,{useState} from 'react'
import { View, FlatList, Text, StyleSheet, ActivityIndicator, Image} from 'react-native'
import HeaderTitle from '../components/HeaderTitle'

const InfinityScrollScreen = () => {
  
const [numbers, setNumbers] = useState([1,2,3,4,5])
const onLoadNumbers = ()=>{
  let newArray = []
  for (let i = 1; i < 5; i++) {
    newArray[i - 1] = numbers.length + i;
  }
  setNumbers([...numbers,...newArray])
}


const renderItem = ({item})=>{
  return (
      <Image
      source={{uri:`https://picsum.photos/id/${item}/500/400`}}
      style={{
        width:500,
        height:400
      }}
      />
  )
}
console.log('??', numbers)
  return (
    <View style={{flex:1, backgroundColor:'red'}}>
      <FlatList
      data={numbers}
      //  keyExtractor={(item)=> item.toString()}
      renderItem={(item)=> renderItem(item)}
      ListHeaderComponent={<HeaderTitle  title={'Infinity scroll'}/>}

      onEndReached={onLoadNumbers}
      onEndReachedThreshold={0.5}

      ListFooterComponent={()=>(
        <View style={{
          height:150,
          width:'100%',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <ActivityIndicator size={25} color={'#5658d6'}/>
        </View>
      )}
      />
    </View>
  )
}

export default InfinityScrollScreen

const styles = StyleSheet.create({
  textItem:{
    backgroundColor:'green',
    height:150
  }
})