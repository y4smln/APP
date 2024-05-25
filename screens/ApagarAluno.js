import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, Padding, FontFamily, FontSize, RadioButton } from "../GlobalStyles";

const ApagarAluno = () => {
  return (
    <View style={styles.apagaraluno}>
      <View style={[styles.rodape, styles.rodapePosition]}>
        <View style={[styles.blocoamarelorodape, styles.rodapePosition]} />
        <View style={[styles.blocoazulbaixo, styles.blocoazulcimaLayout]} />
        <Image
          style={styles.logotipo3Icon}
          contentFit="cover"
          source={require("../assets/logotipo.png")}
        />
      </View>
      <View style={[styles.banner, styles.bannerPosition]}>
        <View style={[styles.blocoamarelo, styles.blocoamareloPosition]} />
        <Text style={styles.titulo}>CALL</Text>
        <View style={[styles.blocoazulcima, styles.blocoamareloPosition]} />
        <View style={[styles.blocoazulmeio, styles.blocoamareloPosition]} />
        <Image
          style={[styles.logotipo2Icon, styles.bannerPosition]}
          contentFit="cover"
          source={require("../assets/logotipo.png")}
        />
        <Text style={styles.biometric}>BIOMETRIC</Text>
      </View>
      <View style={styles.btncadastrar}>
        <View style={[styles.blocobranco, styles.txtboxnomeLayout]} />
        <Text style={styles.apagar}>APAGAR</Text>
      </View>
      <View style={[styles.txtboxnome, styles.txtboxnomeSpaceBlock]}>
        <View style={[styles.txtnomeWrapper, styles.txtboxnomeSpaceBlock]}>
          <Text style={styles.txtnome}>Código do aluno</Text>
        </View>
      </View>
      <Text style={[styles.txtcad, styles.simTypo]}>APAGAR ALUNO</Text>
      <View style={[styles.rbadm, styles.rbadmPosition]}>
        <RadioButton value="second" />
        <Text style={[styles.sim, styles.simTypo]}>SIM</Text>
      </View>
      <View style={[styles.rbadm1, styles.rbadmPosition]}>
       <RadioButton value="second" />
        <Text style={[styles.sim, styles.simTypo]}>NÃO</Text>
      </View>
      <Text style={styles.txtapagar}>TEM CERTEZA QUE DESEJA APAGAR?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rodapePosition: {
    width: 367,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  blocoazulcimaLayout: {
    height: 20,
    backgroundColor: Color.colorDeepskyblue,
  },
  bannerPosition: {
    left: "50%",
    top: "50%",
  },
  blocoamareloPosition: {
    marginLeft: -184,
    width: 360,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  txtboxnomeLayout: {
    borderRadius: Border.br_xl,
    height: 35,
    position: "absolute",
  },
  txtboxnomeSpaceBlock: {
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  simTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rbadmPosition: {
    left: "16.67%",
    right: "-27.5%",
    width: "110.83%",
    height: "4.88%",
    position: "absolute",
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
    width: 360,
    height: 20,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  logotipo3Icon: {
    top: 31,
    left: 14,
    width: 42,
    height: 42,
    position: "absolute",
  },
  rodape: {
    marginTop: 319,
    marginLeft: -180,
    height: 85,
  },
  blocoamarelo: {
    height: 141,
    marginTop: -77,
    marginLeft: -184,
    backgroundColor: Color.colorOrange,
  },
  titulo: {
    marginTop: 3,
    marginLeft: -82,
    fontSize: FontSize.size_5xl,
    letterSpacing: 7.9,
    color: Color.colorSaddlebrown,
    width: 235,
    height: 50,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  blocoazulcima: {
    marginTop: -77,
    marginLeft: -184,
    height: 20,
    backgroundColor: Color.colorDeepskyblue,
  },
  blocoazulmeio: {
    marginTop: 53,
    height: 24,
    marginLeft: -184,
    backgroundColor: Color.colorDeepskyblue,
  },
  logotipo2Icon: {
    marginTop: -43,
    marginLeft: -194,
    width: 133,
    height: 115,
    position: "absolute",
  },
  biometric: {
    marginTop: -49,
    marginLeft: -166,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.baloo,
    color: Color.colorOldlace,
    height: 63,
    textAlign: "center",
    width: 360,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  banner: {
    marginTop: -400,
    marginLeft: -190,
    width: 388,
    height: 154,
    position: "absolute",
  },
  blocobranco: {
    marginTop: -17.65,
    marginLeft: -82.5,
    backgroundColor: Color.colorSteelblue,
    width: 165,
    borderRadius: Border.br_xl,
    left: "50%",
    top: "50%",
  },
  apagar: {
    marginTop: -6.55,
    marginLeft: -68.4,
    width: 135,
    height: 14,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  btncadastrar: {
    marginTop: 124,
    marginLeft: -89,
    height: 35,
    width: 165,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  txtnome: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  txtnomeWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtboxnome: {
    top: 299,
    left: 30,
    backgroundColor: Color.colorWhite,
    width: 307,
    borderRadius: Border.br_xl,
    height: 35,
    position: "absolute",
  },
  txtcad: {
    marginTop: -148,
    marginLeft: -142,
    fontSize: FontSize.size_xl,
    width: 299,
    left: "50%",
    top: "50%",
  },
  vectorIcon: {
    height: "38.46%",
    width: "3.76%",
    top: "0%",
    right: "96.24%",
    bottom: "61.54%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sim: {
    top: 0,
    left: 18,
    width: 381,
    height: 39,
    fontSize: FontSize.size_base,
  },
  rbadm: {
    top: "50.25%",
    bottom: "44.88%",
  },
  rbadm1: {
    top: "55.13%",
    bottom: "40%",
  },
  txtapagar: {
    top: 339,
    left: 37,
    width: 323,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    height: 50,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  apagaraluno: {
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

export default ApagarAluno;
