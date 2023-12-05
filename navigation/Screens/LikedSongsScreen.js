import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LikedSongsScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={["#614385", "#516395"]} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, marginTop: 40 }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginHorizontal: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
      </ScrollView>
    </LinearGradient>
  );
};

export default LikedSongsScreen;

const styles = StyleSheet.create({});
