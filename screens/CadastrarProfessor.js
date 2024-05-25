import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const CadastrarProfessor = () => {
  return (
    <View style={styles.cadastrarprofessor}>
      <View style={styles.banner}>
        <View style={styles.blocoamarelo} />
        <Text style={[styles.titulo, styles.tituloTypo]}>CALL</Text>
        <View style={[styles.blocoazulcima, styles.blocoazulcimaLayout]} />
        <View style={styles.blocoazulmeio} />
        <Image
          style={styles.logotipo2Icon}
          contentFit="cover"
          source={require("../assets/logotipo.png")}
        />
        <Text style={[styles.biometric, styles.biometricFlexBox]}>
          BIOMETRIC
        </Text>
      </View>
      <View style={styles.login}>
        <View style={[styles.txtemail, styles.txtemailLayout]}>
          <View style={styles.loginWrapper}>
            <Text style={styles.login1}>Login</Text>
          </View>
        </View>
      </View>
      <View style={[styles.txtemail1, styles.txtemailLayout]}>
        <View style={styles.loginWrapper}>
          <Text style={styles.login1}>Senha</Text>
        </View>
      </View>
      <Text style={[styles.jTemContaContainer, styles.biometricFlexBox]}>
        <Text style={styles.jTemConta}>
          <Text style={styles.jTemConta1}>Já tem conta?</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.tituloTypo}>Conecte-se</Text>
        </Text>
      </Text>
      <View style={[styles.btncadastrar, styles.blocobrancoPosition]}>
        <View style={[styles.blocobranco, styles.blocobrancoPosition]} />
        <Text style={[styles.cadastrar, styles.cadastrarTypo]}>CADASTRAR</Text>
      </View>
      <View style={[styles.rodape, styles.rodapePosition]}>
        <View style={[styles.blocoamarelorodape, styles.rodapePosition]} />
        <View style={[styles.blocoazulbaixo, styles.blocoazulcimaLayout]} />
      </View>
      <Text style={[styles.cadastreSe, styles.cadastrarTypo]}>CADASTRE-SE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tituloTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  blocoazulcimaLayout: {
    height: 20,
    backgroundColor: Color.colorDeepskyblue,
    width: 360,
    top: 0,
    position: "absolute",
  },
  biometricFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  txtemailLayout: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    height: 35,
    width: 307,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  blocobrancoPosition: {
    width: 165,
    top: "50%",
    height: 35,
    left: "50%",
    position: "absolute",
  },
  cadastrarTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rodapePosition: {
    width: 367,
    left: 0,
    position: "absolute",
  },
  blocoamarelo: {
    height: 141,
    width: 360,
    backgroundColor: Color.colorOrange,
    left: 10,
    top: 0,
    position: "absolute",
  },
  titulo: {
    top: 80,
    left: 112,
    fontSize: FontSize.size_5xl,
    letterSpacing: 7.9,
    color: Color.colorSaddlebrown,
    width: 235,
    height: 50,
    textAlign: "left",
    position: "absolute",
  },
  blocoazulcima: {
    left: 10,
    height: 20,
  },
  blocoazulmeio: {
    top: 130,
    height: 24,
    backgroundColor: Color.colorDeepskyblue,
    width: 360,
    left: 10,
    position: "absolute",
  },
  logotipo2Icon: {
    top: 34,
    width: 133,
    height: 115,
    left: 0,
    position: "absolute",
  },
  biometric: {
    marginLeft: -166,
    top: 28,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.baloo,
    color: Color.colorOldlace,
    height: 63,
    left: "50%",
    textAlign: "center",
    width: 360,
  },
  banner: {
    left: -10,
    width: 388,
    height: 154,
    top: 0,
    position: "absolute",
  },
  login1: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  loginWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  txtemail: {
    top: 38,
    left: -112,
  },
  login: {
    top: 244,
    left: 142,
    width: 324,
    height: 60,
    position: "absolute",
  },
  txtemail1: {
    top: 364,
    left: 30,
  },
  jTemConta1: {
    color: Color.colorBlack,
  },
  text: {
    color: Color.colorSlateblue,
  },
  jTemConta: {
    fontFamily: FontFamily.interRegular,
  },
  jTemContaContainer: {
    top: 522,
    fontSize: FontSize.size_sm,
    width: 358,
    left: 0,
    height: 50,
  },
  blocobranco: {
    marginTop: -17.65,
    marginLeft: -82.5,
    backgroundColor: Color.colorSteelblue,
    borderRadius: Border.br_xl,
    width: 165,
  },
  cadastrar: {
    marginTop: -6.55,
    marginLeft: -68.4,
    display: "flex",
    width: 135,
    height: 14,
    top: "50%",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    left: "50%",
  },
  btncadastrar: {
    marginTop: 59,
    marginLeft: -82,
  },
  blocoamarelorodape: {
    top: 20,
    height: 65,
    backgroundColor: Color.colorOrange,
    width: 367,
  },
  blocoazulbaixo: {
    left: 2,
  },
  rodape: {
    top: 719,
    height: 85,
  },
  cadastreSe: {
    top: 223,
    left: 40,
    fontSize: FontSize.size_xl,
    width: 225,
    height: 44,
    textAlign: "left",
  },
  cadastrarprofessor: {
    backgroundColor: Color.colorLightblue,
    borderStyle: "solid",
    borderColor: Color.colorOldlace,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default CadastrarProfessor;
