import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SongItem from "../../components/SongItem";
import { Player } from "../../PlayerContext";

const LikedSongsScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const { currentTrack, setCurrentTrack } = useContext(Player);
  const [savedTracks, setSavedTracks] = useState([]);
  async function getSavedTracks() {
    const accessToken = await AsyncStorage.getItem("token");
    const response = await fetch(
      "https://api.spotify.com/v1/me/tracks?offset=0&limit=50",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          limit: 50,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch the tracks");
    }
    const data = await response.json();
    setSavedTracks(data.items);
  }
  useEffect(() => {
    getSavedTracks();
  }, []);
  console.log(savedTracks);

  const playTrack = async () => {
    if (savedTracks.length > 0) {
      setCurrentTrack(savedTracks[0]);
    }
    await play(savedTracks[0]);
  };
  const play = async () => {};

  console.log(currentTrack);
  return (
    <>
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
                style={{ fontWeight: "500" }}
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
              <Text style={{ color: "white" }}>Sort</Text>
            </Pressable>
          </Pressable>

          <View style={{ height: 50 }} />

          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Liked Songs
            </Text>
            <Text style={{ color: "white", fontSize: 13, marginTop: 5 }}>
              450 Songs
            </Text>
          </View>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 10,
            }}
          >
            <Pressable
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#1D8954",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="arrow-down" size={20} color="black" />
            </Pressable>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="shuffle" size={27} color="black" />
              </Pressable>
              <Pressable
                onPress={playTrack}
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 30,
                  backgroundColor: "#1D8954",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="controller-play" size={24} color="black" />
              </Pressable>
            </View>
          </Pressable>

          <FlatList
            data={savedTracks}
            renderItem={({ item }) => <SongItem item={item} />}
          />
        </ScrollView>
      </LinearGradient>

      {currentTrack && (
        <Pressable
          style={{
            backgroundColor: "#1DB954",
            width: "90%",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 15,
            position: "absolute",
            borderRadius: 6,
            left: 20,
            bottom: 10,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              style={{ width: 40, height: 40 }}
              source={{ uri: currentTrack?.track?.album?.images[0].url }}
            />
            <Text
              numberOfLines={1}
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 13,
                width: 220,
              }}
            >
              {currentTrack?.track?.name} |{" "}
              {currentTrack?.track?.artists[0].name}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <AntDesign name="heart" size={22} color="pink" />
            <Pressable>
              <Ionicons name="pause-circle" size={26} color="black" />
            </Pressable>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default LikedSongsScreen;

const styles = StyleSheet.create({});
