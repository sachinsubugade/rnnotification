import React from 'react';
import { Text, View } from 'react-native';
import RegisterNotification from './RegisterNotification';
import { Notifications } from 'react-native-notifications'
const App = () => {
  Notifications.registerRemoteNotifications();

  // Notifications.events().registerRemoteNotificationsRegistered((event) => {
  //   // TODO: Send the token to my server so it could send back push notifications...
  //   console.log("Device Token Received", event.deviceToken);
  // });
  // Notifications.events().registerRemoteNotificationsRegistrationFailed((event) => {
  //   console.error(event);
  // });
  // Notifications.ios.checkPermissions().then((currentPermissions) => {
  //   console.log(currentPermissions)
  // }).catch(error => console.log(error))
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
      <Text >React Native Notifications</Text>
    </View>
  );
};

export default App;
