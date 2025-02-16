import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
   flex: 1,
   borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9
  }
})