import axios from "axios";
import * as SecureStore from "expo-secure-store";
import get from "lodash.get";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { GetUser } from "../utils/useAuth";

const usePost = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState({});

  const Post = async (
    url,
    data,
    onDone = () => {
      console.log("done");
    },
    onError = () => {
      console.log("error");
    }
  ) => {
    const user = JSON.parse(await SecureStore.getItemAsync("userToken"));

    await axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${user?.token}`,
      },
      proxy: {
        host: "104.236.174.88",
        port: 3128,
      },
      method: "POST",
      url: "https://carelly-backend.herokuapp.com" + url,
      data,
    })
      .then((res) => {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: res?.data?.message || "Successful!",
        });
        onDone();
        setResponse(res.data);
      })
      .catch((er) => {
        const msg =
          get(er, "response.data.message" || "response.message") || er.message;
        setMessage(msg);
        onError();
        Toast.show({
          type: "error",
          text1: "Error!",
          text2: msg,
        });
        console.log(er);
      });
  };

  const Put = async (
    url,
    data,
    onDone = () => {
      console.log("done");
    }
  ) => {
    const user = await SecureStore.getItemAsync("userToken");

    await axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${user?.token}`,
      },
      proxy: {
        host: "104.236.174.88",
        port: 3128,
      },
      method: "PUT",
      url: "https://carelly-backend.herokuapp.com" + url,
      data,
    })
      .then((res) => {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: res?.data?.message || "Successful!",
        });
        setResponse(res.data);
      })
      .catch((er) => {
        const msg =
          get(er, "response.data.message" || "response.message") || er.message;

        Toast.show({
          type: "error",
          text1: "Error!",
          text2: msg,
        });
      })
      .finally(() => {
        onDone();
      });
  };

  return { Post, Put, message, response };
};

export const fetcher = async (url) => {
  const user = await GetUser();
  try {
    await axios
      .get(`https://carelly-backend.herokuapp.com${url}`, {
        headers: user && {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then(
        (response) =>
          new Promise((resolve) => {
            resolve(response);
          })
      );
  } catch (er) {
    const msg =
      get(er, "response.data.message" || "response.message") || er.message;

    Toast.show({
      type: "error",
      text1: "Error!",
      text2: msg,
    });
  }
};

export default usePost;
