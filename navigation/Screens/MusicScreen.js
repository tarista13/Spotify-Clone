import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const MusicScreen = () => {
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={{color:"white"}}>Music Screen</Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({});
