import {
  Button as ButtonB,
  Divider,
  Icon,
  Layout as LayoutB,
  Text,
  TopNavigation,
  TopNavigationAction,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { NativeModules, Platform, StatusBar, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Layout({
  children,
  title = "Dashboard",
  navigation = () => {},
  isBack = false,
  accessoryRight = null,
  accessoryRightOnpress = null,
  accessoryRightIcon = null,
}) {
  const BackIcon = (props) => (
    <TouchableOpacity
      style={{
        width: 26,
        height: 26,
        backgroundColor: "#eee",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon {...props} name="arrow-ios-back" />
    </TouchableOpacity>
  );
  const BellIcon = (props) => (
    <TouchableOpacity>
      <Icon {...props} name="bell" />
    </TouchableOpacity>
  );

  const BackAction = () => <TopNavigationAction icon={BackIcon} />;
  const BellAction = () => <TopNavigationAction icon={BellIcon} />;

  const { StatusBarManager } = NativeModules;

  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 34 : StatusBarManager.HEIGHT;

  const theme = useTheme();

  return (
    <>
      <TopNavigation
        accessoryLeft={isBack && BackAction}
        accessoryRight={
          accessoryRight
            ? (props) => (
                <ButtonB
                  {...props}
                  size="tiny"
                  style={{ borderRadius: 100 }}
                  onPress={accessoryRightOnpress}
                  accessoryLeft={(props) =>
                    accessoryRightIcon && (
                      <Icon {...props} name={accessoryRightIcon} />
                    )
                  }
                >
                  {(evaProps) => (
                    <Text
                      {...evaProps}
                      category="p2"
                      style={{
                        color: "#fff",
                      }}
                    >
                      {accessoryRight}
                    </Text>
                  )}
                </ButtonB>
              )
            : !isBack && BellAction
        }
        alignment="center"
        title={(evaProps) => <Text {...evaProps}>{title}</Text>}
        style={
          {
            // backgroundColor: theme["color-info-default"],
            // marginTop: -STATUSBAR_HEIGHT,
            // zIndex: 100
          }
        }
      />
      <Divider />
      <LayoutB level="2" style={{ flex: 1 }}>
        {children}
      </LayoutB>
    </>
  );
}
