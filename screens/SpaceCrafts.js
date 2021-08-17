import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image} from 'react-native';

export default class SpaceCrafts extends React.Component{
  render(){
    return(
      <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>

      
      <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Image
            style={{ width: 30, height: 30}}
            source={require('../backarrow.png')}
          />
        </TouchableOpacity>

        <Text>
           Space Crafts
        </Text>
      </View>
    );
  }
}