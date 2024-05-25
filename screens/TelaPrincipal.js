import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import BtnCad from "../components/BtnCad";
import BtnAtu from "../components/BtnAtu";
import BtnVer from "../components/BtnVer";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const TelaPrincipal = () => {
  return (
    <View style={styles.telaprincipal}>
      <View style={[styles.banner, styles.bannerPosition]}>
        <View style={[styles.blocoamarelo, styles.biometricPosition]} />
        <Text style={[styles.titulo, styles.bannerPosition]}>CALL</Text>
        <View style={[styles.blocoazulcima, styles.blocoazulcimaPosition]} />
        <View style={styles.blocoazulmeio} />
        <Image
          style={[styles.logotipo2Icon, styles.bannerPosition]}
          contentFit="cover"
          source={require("../assets/logotipo.png")}
        />
        <Text style={[styles.biometric, styles.biometricPosition]}>
          BIOMETRIC
        </Text>
      </View>
      <View style={[styles.rodape, styles.rodapePosition]}>
        <View style={[styles.blocoamarelorodape, styles.rodapePosition]} />
        <View style={[styles.blocoazulbaixo, styles.blocoazulcimaPosition]} />
      </View>
      <BtnCad
        cADASTRAR="CADASTRAR"
        logotipo2={require("../assets/logotipo.png")}
      />
      <BtnVer
        vERIFICAR="VERIFICAR"
        cHAMADA="CHAMADA"
        logotipo3={require("../assets/logotipo.png")}
      />
      <BtnAtu
        cADASTRAR="ATUALIZAR"
        logotipo2={require("../assets/logotipo.png")}
        propMarginTop={66}
        propMarginLeft={-144}
        propLeft={35}
      />
      <BtnVer
        vERIFICAR="APAGAR"
        cHAMADA="ALUNO"
        logotipo3={require("../assets/logotipo.png")}
        propMarginTop={66}
        propMarginLeft={20}
        propWidth={60}
        propHeight={59}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  biometricPosition: {
    width: 360,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  blocoazulcimaPosition: {
    height: 20,
    backgroundColor: Color.colorDeepskyblue,
    width: 360,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rodapePosition: {
    width: 367,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  blocoamarelo: {
    height: 141,
    backgroundColor: Color.colorOrange,
    marginLeft: -184,
    marginTop: -77,
  },
  titulo: {
    marginTop: 3,
    marginLeft: -82,
    fontSize: FontSize.size_5xl,
    letterSpacing: 7.9,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorSaddlebrown,
    textAlign: "left",
    width: 235,
    height: 50,
  },
  blocoazulcima: {
    marginLeft: -184,
    marginTop: -77,
  },
  blocoazulmeio: {
    marginTop: 53,
    height: 24,
    backgroundColor: Color.colorDeepskyblue,
    width: 360,
    marginLeft: -184,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  logotipo2Icon: {
    marginTop: -43,
    marginLeft: -194,
    width: 133,
    height: 115,
  },
  biometric: {
    marginTop: -49,
    marginLeft: -166,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.baloo,
    color: Color.colorOldlace,
    textAlign: "center",
    height: 63,
  },
  banner: {
    marginTop: -400,
    marginLeft: -190,
    width: 388,
    height: 154,
  },
  blocoamarelorodape: {
    marginTop: -22.5,
    marginLeft: -183.5,
    height: 65,
    backgroundColor: Color.colorOrange,
  },
  blocoazulbaixo: {
    marginTop: -42.5,
    marginLeft: -181.5,
  },
  rodape: {
    marginTop: 319,
    marginLeft: -180,
    height: 85,
  },
  telaprincipal: {
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

export default TelaPrincipal;
