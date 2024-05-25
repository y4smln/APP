import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, SafeAreaView } from "react-native";
import { Picker } from '@react-native-picker/picker';

const CadAluno = () => {
  const [selectedSerie, setSelectedSerie] = React.useState();
  const [selectedCurso, setSelectedCurso] = React.useState();

  return (
    <View style={styles.cadaluno}>
      <SafeAreaView style={styles.banner}>
        <Text style={styles.subtitle}>Cadastrar Aluno</Text>
        <Image
           source={require('../assets/alunoImg.png')}
          style={styles.image}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          placeholderTextColor="#000"
        />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedSerie}
            onValueChange={(itemValue) => setSelectedSerie(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione a série do aluno" value="" />
            <Picker.Item label="1ª Série" value="1" />
            <Picker.Item label="2ª Série" value="2" />
            <Picker.Item label="3ª Série" value="3" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCurso}
            onValueChange={(itemValue) => setSelectedCurso(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione o curso do aluno" value="" />
            <Picker.Item label="ADM" value="A" />
            <Picker.Item label="DS" value="D" />
            <Picker.Item label="LOG" value="L" />
          </Picker>
        </View>
      </SafeAreaView>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cadaluno: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  banner: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
  subtitle: {
    marginTop:20,
    fontSize: 30,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
    fontSize: 16,
    borderColor: '#000',
    borderWidth: 1,
  },
  pickerContainer: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 25,
    justifyContent: 'center',
    marginBottom: 20,
    borderColor: '#000',
    borderWidth: 1,
  },
  picker: {
    height: 50,
    color: '#000',
  },
  button: {
    height: 50,
    backgroundColor: '#40A2E3',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CadAluno;
