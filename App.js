import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useState } from 'react';


function JustifyContentBasics() {
  const [justifyContent, setJustifyContent] = useState("flex-start");

  return (
    <PreviewLayout
      label="NeighborAssist            Fannie Bay"
      selectedValue={justifyContent}
      values={[
        "Log in",
        "Register",
        "SOS",
        "Assistance",
      ]}
      setSelectedValue={setJustifyContent}
    >
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]} />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]} />
    </PreviewLayout>
  );
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);



  
const styles = StyleSheet.create({
container: {
  marginTop: 50,
  flex: 1, backgroundColor: "#0D98BA",
  alignItems: 'center',
},
box: {
  width: 365,
  height: 188,
},
row: {
  flexDirection: "row",
  flexWrap: "wrap",
},
button: {
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: 4,
  backgroundColor: "skyblue",
  alignSelf: "flex-start",
  marginHorizontal: "1%",
  marginBottom: 6,
  minWidth: "48%",
  textAlign: "center",
},
selected: {
  backgroundColor: "#0D98BA",
  borderWidth: 0,
},
buttonLabel: {
  fontSize: 14,
  fontWeight: "800",
  color: "black",
  textAlign: "center"

},
selectedLabel: {
  color: "white",
},
label: {
  textAlign: "center",
  marginBottom: 10,
  fontSize: 24,
},
});


export default JustifyContentBasics;