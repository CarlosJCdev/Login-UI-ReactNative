import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class App extends React.Component{
  render(){
    
  return (
    <View style={styles.container}>
      <Image
      source={require('../asset/logo.png')}
      style={{width: "100%", height: 300}}
      resizeMode="contain"
      />
      <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>JCdev</Text>
      <Text style={{fontSize: 16, color: 'gray', textAlign: 'center', marginHorizontal: 20}}>
        Development, design, and style</Text>

      <View style={{flexDirection: 'row', margin: 20, paddingVertical: 20}}>
        <TouchableOpacity style={{ backgroundColor: '#0d47a1', padding: 10, width: 150, 
        borderRadius: 30, marginHorizontal: 2}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: '#FFF', padding: 10, width: 150, 
        borderRadius: 30, marginHorizontal: 2, borderWidth: 1 , borderColor: '#0d47a1'}}>
          <Text style={{textAlign: 'center', color: '#0d47a1', fontSize: 18}}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={{fontSize: 16, marginTop: 10}}>o donde ya te conocen</Text>

      <View style={{flexDirection: 'row', marginTop: 20}}>

        <View style={{height: 50, width: 50, borderRadius: 50/2, backgroundColor: '#3f51b2', alignItems: 'center',
        justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>f</Text>
        </View>

        <View style={{height: 50, width: 50, borderRadius: 50/2, backgroundColor: '#f44336', marginHorizontal: 10,
        alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>G</Text>
        </View>
      </View>

    </View>
  );
};
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
