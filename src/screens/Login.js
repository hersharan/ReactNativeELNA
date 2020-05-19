import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { AuthContext } from '../../App';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = React.useContext(AuthContext);
  return (
    <View>
      <Text>Login</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={username}
        onChangeText={(val) => setUsername(val)}
      />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(val) => setPassword(val)}
        secureTextEntry
      />
      <Button
        style={styles.buttonStyle}
        title="Login"
        onPress={() => signIn({ username, password })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    color: 'red',
    fontSize: 30,
    backgroundColor: 'black',
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 15,
  },
});

export default Login;
