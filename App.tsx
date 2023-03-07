import * as React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient colors={['#dd3r54', '#dd3e09']}>
        <View>
          <Text>Not a HotDog</Text>
          <Text>Food Identifier Startup</Text>
        </View>
        <View>
          <Text>Output</Text>
        </View>
        <View>
          <Button
            title="Camera Roll"
            titleStyle={{fontSize: 20}}
            containerStyle={{margin: 5}}
          />
          <Button
            title="Take a Photo"
            titleStyle={{fontSize: 20}}
            containerStyle={{margin: 5}}
          />
        </View>
      </LinearGradient>
    );
  }
}
