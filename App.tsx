import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, View, Image } from "react-native";
import axios from "axios";

export default function App() {
  const [quote, setQuote] = useState("quote");
  const [image, setImage] = useState(1);

  const getQuote = async () => {
    await axios
      .get("https://api.kanye.rest")
      .then((Response) => setQuote(Response.data.quote))
      .catch((error) => {
        setQuote("some error occured")
        console.log(error);
      });
  };
  useEffect(() => {
    getNewImage();
  });
  const getNewImage = () => {
    var randomnumber = Math.floor(Math.random() * 9);
    setImage(randomnumber);
  };
  let newImage = require(`./assets/images/kanye4.png`);

  switch (image) {
    case 1:
      newImage = require(`./assets/images/kanye3.png`); //deleted image 1
      break;
    case 2:
      newImage = require(`./assets/images/kanye3.png`);
      break;
    case 3:
      newImage = require(`./assets/images/kanye3.png`);
      break;
    case 4:
      newImage = require(`./assets/images/kanye4.png`);
      break;
    case 5:
      newImage = require(`./assets/images/kanye5.png`);
      break;
    case 6:
      newImage = require(`./assets/images/kanye6.png`);
      break;
    case 7:
      newImage = require(`./assets/images/kanye7.png`);
      break;
    case 8:
      newImage = require(`./assets/images/kanye8.png`);
      break;
    default:
      newImage = require(`./assets/images/kanye4.png`);
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.kanyeHead}>
        <View>
          <Pressable onPress={getQuote}>
            <Image style={styles.image} source={newImage} />
          </Pressable>
        </View>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>{quote}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    height: 180,
  },
  kanyeHead: {
    alignItems: "center",
    gap: 20,
    flexDirection: "column",
  },
  quoteContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "30%",
  },
  quoteText: {
    color: "white",
  },
});
