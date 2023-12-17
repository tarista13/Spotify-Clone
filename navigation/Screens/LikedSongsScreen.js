import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

const LikedSongsScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  return (
    <LinearGradient colors={["#614385", "#516395"]} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, marginTop: 40 }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginHorizontal: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>

        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 9,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#42275a",
              padding: 9,
              flex: 1,
              borderRadius: 3,
              height: 38,
            }}
          >
            <AntDesign name="search1" size={20} color="white" />
            <TextInput
              value={input}
              onChangeText={(text) => SingleTouchInput(text)}
              placeholder="Find in Liked Songs"
              placeholderTextColor={"white"}
              style={{fontWeight:"500"}}
            />
          </Pressable>

          <Pressable
            style={{
              marginHorizontal: 10,
              backgroundColor: "#42275a",
              padding: 10,
              borderRadius: 3,
              height: 38,
            }}
          >
            <Text style={{color:"white"}}>Sort</Text>
          </Pressable>
        </Pressable>

        <View style={{height:50}}/>

        <View style={{marginHorizontal:10}}>
          <Text style={{color:"white", fontSize:18, fontWeight:"bold"}}>Liked Songs</Text>
          <Text style={{color:"white", fontSize:13, marginTop:5}}>450 Songs</Text>
        </View>

      </ScrollView>
    </LinearGradient>
  );
};

export default LikedSongsScreen;

const styles = StyleSheet.create({});
