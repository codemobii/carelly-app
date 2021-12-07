import * as SecureStore from "expo-secure-store";

const bootstrapAsync = async () => {
  let userToken;

  try {
    userToken = await SecureStore.getItemAsync("userToken");
  } catch (e) {
    // Restoring token failed
  }
  return JSON.parse(userToken);
};

const getUserPIN = async () => {
  let userToken;

  try {
    userToken = await SecureStore.getItemAsync("userPIN");
  } catch (e) {
    // Restoring token failed
  }
  return userToken;
};

export const GetUser = bootstrapAsync;
export const GetPIN = getUserPIN;
