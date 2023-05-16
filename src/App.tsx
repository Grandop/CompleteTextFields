import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity 
} from "react-native"
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import { useForm, Controller, FieldValues } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().required('informe seu username'),
  email: yup.string().email('email invalido').required('informe seu email'),
  password: yup.string().min(6,'a senha deve ter pelo menos 6 dígitos').required('digite sua senha'),
  url: yup.string().url('digite url válida').required('digite um url')
})


export default function App() {
  const { control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSignIn = (data: FieldValues) => {
    console.log(data)
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo(a)</Text>

        <Controller
          control={control}
          name="username"
          render={({ field: {onChange, onBlur, value} }) => (
            <TextInput
              style={[
                styles.textField, {
                  borderWidth: errors.username && 1,
                  borderColor: errors.username && '#ff375b'
                }
              ]}
              placeholder="username"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.username && typeof errors.username.message === 'string' && (
          <Text style={styles.labelError}>{errors.username.message}</Text>
        )}

        <Controller
          control={control}
          name="email"
          render={({ field: {onChange, onBlur, value} }) => (
            <TextInput
              style={[
                styles.textField, {
                  borderWidth: errors.email && 1,
                  borderColor: errors.email && '#ff375b'
                }
              ]}
              placeholder="email"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.email && typeof errors.email.message === 'string'&& (
          <Text style={styles.labelError}>{errors.email.message}</Text>
        )}

        <Controller
          control={control}
          name="password"
          render={({ field: {onChange, onBlur, value} }) => (
            <TextInput
            style={[
                styles.textField, {
                  borderWidth: errors.password && 1,
                  borderColor: errors.password && '#ff375b'
                }
              ]}
              placeholder="senha"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.password && typeof errors.password.message === 'string'&& (
          <Text style={styles.labelError}>{errors.password.message}</Text>
        )}

        <Controller
          control={control}
          name="url"
          render={({ field: {onChange, onBlur, value} }) => (
            <TextInput
            style={[
                styles.textField, {
                  borderWidth: errors.url && 1,
                  borderColor: errors.url && '#ff375b'
                }
              ]}
              placeholder="url"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.url && typeof errors.url.message === 'string'&& (
          <Text style={styles.labelError}>{errors.url?.message}</Text>
        )}
        

        <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleSignIn)}
        >
          <Text style={styles.buttonText} >Acessar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bde0fe',
    paddingHorizontal: 18,
  },
  title : {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 34,
    color: 'black',
  },
  textField: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#45d800',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  labelError: {
    alignSelf: "flex-start",
    color: '#ff375b',
    marginBottom: 8
  }
})