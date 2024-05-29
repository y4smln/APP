const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ConectarProfessor from "./screens/ConectarProfessor";
import TelaPrincipal from "./screens/TelaPrincipal";
import CadAluno from "./screens/CadAluno";
import AtualizarAluno from "./screens/AtualizarAluno";
import ApagarAluno from "./screens/ApagarAluno";
import VerificarAluno from "./screens/VerificarAluno";
import CadastrarProfessor from "./screens/CadastrarProfessor";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

<<<<<<< HEAD
=======
<<<<<<< HEAD
//testANDO COMENTARIO
=======
<<<<<<< HEAD
//teste iza 2
=======
//teste iza
>>>>>>> dcb2acba91c451d804e775bd76def4ce4136f1c6
>>>>>>> 03203c6e4e8affb83f12472bcb25573bf39f0973

>>>>>>> 48326d6a2cd9e184eb83c6329e4dc11dc264fd76
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ConectarProfessor"
              component={ConectarProfessor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaPrincipal"
              component={TelaPrincipal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadAluno"
              component={CadAluno}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AtualizarAluno"
              component={AtualizarAluno}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ApagarAluno"
              component={ApagarAluno}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificarAluno"
              component={VerificarAluno}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastrarProfessor"
              component={CadastrarProfessor}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
