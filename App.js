import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bigwhite}>HEY RN </Text>
      <Image  style={{
            resizeMode: "stretch",
            height: 300,
            width: 200
          }} source={require('./assets/pixiv.jpg')}
      />
      <Text style={styles.bigwhite}>110819005 數位二甲 曾浩儀 </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#8BEDFE',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  bigwhite: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
