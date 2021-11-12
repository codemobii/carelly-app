import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import * as SecureStore from "expo-secure-store";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import usePost from "../utils/PostRequest";

export const AuthContext = React.createContext();
export const LoadingContext = React.createContext();

export default function Navigation({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  const [loading, setLoading] = React.useState(false);

  const { Post } = usePost();

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <LoadingContext.Provider value={loading}>
        <NavigationContainer>
          {state.userToken == null ? <AuthStack /> : <UserStack />}
        </NavigationContainer>
      </LoadingContext.Provider>
    </AuthContext.Provider>
  );
}
