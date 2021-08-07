
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import ProfilePicture from'../components/ProfilePicture'
import Colors from '../constants/Colors';
import { Octicons, MaterialCommunityIcons} from '@expo/vector-icons';
import  ChatRoomScreen from "../screens/ChatRoomScreen";
import  ChamberRoomScreen from "../screens/ChamberScreens";
import  RoomScreen from "../screens/RoomsScreen"
import ContactsScreen from '../screens/ContactsScreen';
import { Logo } from "../assets/images/reactLogo.png";
import { ImageBackground } from 'react-native'
import styles from './styles';
import { Text, 
  View, 
  Image, 
} from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { FiberSmartRecord } from '@material-ui/icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: Colors.light.tint,
            shadowOpacity: 0,
            elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
        }
    }}>
      <Stack.Screen
          name="Root"
          component={MainTabNavigator}
          options={{
              showLabel: false,
              headerTitle: () => (
                <View style={styles.userName}>
                  <Text style={styles.userName}>Yonela Johannes</Text>
                </View>
              ),
              headerRight: () => (
                  <View
                      style={{
                          flexDirection: 'row',
                          width: 170,
                          cursor: 'pointer',
                          justifyContent: "space-between",
                          backgroundColor: "transparent",
                          marginRight: "10"}}>
                      <Octicons name={"search"} size={20} color={"#fff"}/>
                      <MaterialCommunityIcons name="creation" size={24} color="#fff" />
                      <Ionicons name="information-circle-outline" size={24} color="#fff" />
                      <MaterialCommunityIcons name={"dots-vertical"} size={20} color={"#fff"} />
                  </View>
              )
          }}
      />
      <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen} 
      options={({ route }) => ({
        title: route.params.name,
        headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
              <FontAwesome5 name="video" size={20} color={'white'} />
              <MaterialIcons name="call" size={20} color={'white'} />
              <Entypo name="dots-three-vertical" size={20} color={'white'} />
          </View>
      )
      })} 
      />
      <Stack.Screen name="Chambers" component={ChamberRoomScreen} options={{ title: 'Rooms' }} />
      <Stack.Screen name="Rooms" component={RoomScreen} options={{ title: 'Rooms' }} />
    </Stack.Navigator>
  );
}
