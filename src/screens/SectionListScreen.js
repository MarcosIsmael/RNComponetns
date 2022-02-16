import React from 'react'
import { RefreshControl, ScrollView, SectionList, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import Separator from '../components/Separator';
import { styles } from '../theme/AppTheme'



const casas = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin","Batman", "Superman","Batman", "Superman","Batman", "Superman","Batman", "Superman","Batman", "Superman","Batman", "Superman","Batman", "Superman","Batman", "Superman" ]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", "Thor", "Spiderman","Antman", "Thor", "Spiderman" ]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", ]
  }
];
const Render = (data)=> {
  console.log(data)
  return <Text>hola</Text>
}
const SectionListScreen = () => {
  return (
      <View style={{...styles.marginGlobal, flex:1}}>

        <SectionList
        sections={casas}
        ListHeaderComponent={()=> <HeaderTitle title={'Section List'}/>}
        
        ListFooterComponent={()=> 
                    <View style={{marginBottom:70}}>
                    <HeaderTitle title={'Total casas ' + casas.length}/>
                    </View>}
                     
      
        stickySectionHeadersEnabled
        renderItem={({item})=> <Text>{item}</Text>}

        renderSectionHeader={({section})=> 
                    <View style={{backgroundColor:'white'}}>
                    <HeaderTitle title={section.casa}/>
                    </View>}
        renderSectionFooter={({section})=> 
                    <HeaderTitle title={ 'Total ' + section.data.length}/>}
        SectionSeparatorComponent={()=> <Separator/>}
        showsVerticalScrollIndicator={false}
        />
      </View>
  )
}

export default SectionListScreen