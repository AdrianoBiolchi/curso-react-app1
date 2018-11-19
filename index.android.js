import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio *10);
  alert(numero_aleatorio);
};


const App = () => {
  return (  
    <View 
      style={{ flex: 1,
     
      flexDirection: 'column',
      justifyContent: 'center',}}>

    <Text 
      style={{
        textAlign: 'center', // <-- the magic
        
    }}
    > Gerador de números randômicos! </Text> 

    <Button  style={{
      
    }}
    title="Gerar um número randômico"
    onPress={geraNumeroAleatorio} 
    /> 
    </View>  
     
  );  
};

AppRegistry.registerComponent('app1', () => App);

