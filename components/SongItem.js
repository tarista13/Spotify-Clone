import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";

const SongItem = ({ item }) => {
  return (
    <Pressable style={{ flexDirection: "row", alignItems:"center", padding:10 }}>
      <Image
        style={{ width: 50, height: 50, marginRight:10}}
        source={{ uri: item?.track?.album?.images[0].url }}
      />

      <View style={{flex:1}}>
        <Text numberOfLines={1} style={{fontWeight:"bold", fontSize:14, color:"white"}}>{item?.track?.name}</Text>
        <Text style={{marginTop:4, color:"#989898"}}>{item?.track?.artists[0].name}</Text>
      </View>

      <View style={{flexDirection:"row", alignItems:"center", gap:7, marginHorizontal:10}}>
        <AntDesign name="heart" size={24} color="pink" />
        <SimpleLineIcons name="options-vertical" size={24} color="#989898" />
      </View>
    </Pressable>
  );
};

export default SongItem;

const styles = StyleSheet.create({});
