import React from "react";
import { Button, Icon, Text, useTheme } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from "@react-navigation/elements";

import BottomNavigator from "./BottomNavigator";
import Visits from "../screens/client/Visits";
import ClientDetails from "../screens/client/ClientDetails";
import ClientCallToActions from "../screens/client/ClientCallToActions";
import ClientCheckIn from "../screens/client/ClientCheckIn";
import ClientCarePlan from "../screens/client/ClientCarePlan";
import ClientTasks from "../screens/client/ClientTasks";
import ClientVisitLog from "../screens/client/ClientVisitLog";
import ClientMedication from "../screens/client/ClientMedication";
import ClientMedicationInstruction from "../screens/client/ClientMedicationInstruction";
import ClientDoseRecord from "../screens/client/ClientDoseRecord";
import ClientMedicationNotTaken from "../screens/client/ClientMedicationNotTaken";
import ClientMedicationNotAdministered from "../screens/client/ClientMedicationNotAdministered";
import ClientMedicationAddNote from "../screens/client/ClientMedicationAddNote";
import ClientCareLog from "../screens/client/ClientCareLog";
import ClientCareLogDrink from "../screens/client/ClientCareLogDrinks";
import ClientCareLogDrinkType from "../screens/client/ClientCareLogDrinksType";
import ClientCareLogDrinkHowMuch from "../screens/client/ClientCareLogDrinkHowMuch";
import ClientCareLogDrinkAddedList from "../screens/client/ClientCareLogDrinkAddedList";
import ClientCareLogToilet from "../screens/client/ClientCareLogToilet";
import ClientCareLogToiletUrine from "../screens/client/ClientCareLogToiletUrine";
import ClientCareLogToiletAddNote from "../screens/client/ClientCareLogToiletAddNote";
import ClientCareLogToiletAddedList from "../screens/client/ClientCareLogToiletAddedList";
import ClientCareLogMood from "../screens/client/ClientCareLogMood";
import ClientCareLogMoodAddNote from "../screens/client/ClientCareLogMoodAddNote";
import ClientCareLogCovid from "../screens/client/ClientCareLogCovid";
import ClientCareLogCovidAddNote from "../screens/client/ClientCareLogCovidAddNote";
import ClientCareLogFood from "../screens/client/ClientCareLogFood";
import ClientCareLogFoodType from "../screens/client/ClientCareLogFoodType";
import ClientCareLogFoodAddedList from "../screens/client/ClientCareLogFoodAddedList";
import ClientCareLogFoodAddNote from "../screens/client/ClientCareLogFoodAddNote";
import ClientLivingSkills from "../screens/client/ClientLivingSkills";
import ClientCareLogAddNote from "../screens/client/ClientCareLogAddNote";
import ClientRaiseConcern from "../screens/client/ClientRaiseConcern";
import ClientRaiseConcernLevel from "../screens/client/ClientRaiseConcernLevel";
import ClientRaiseConcernWho from "../screens/client/ClientRaiseConcernWho";
import ClientRaiseConcernAddNote from "../screens/client/ClientRaiseConcernAddNote";
import ClientCheckout from "../screens/client/ClientCheckout";
import ClientCheckoutUnable from "../screens/client/ClientCheckoutUnable";
import ClientCheckoutUnableAddNote from "../screens/client/ClientCheckoutUnableAddNote";
import ClientLivingSkillsAddNote from "../screens/client/ClientLivingSkillsAddNote";
import ClientRaiseConcernIncident from "../screens/client/ClientRaiseConcernIncident";
import ClientCareProfile from "../screens/client/ClientCareProfile";
import ClientCareProfileInfo from "../screens/client/ClientCareProfileInfo";
import ClientCareProfileAbout from "../screens/client/ClientCareProfileAbout";
import ClientCareProfileNeedAccessments from "../screens/client/ClientCareProfileNeedAccessments";
import ClientCareProfileNDPersonalCare from "../screens/client/ClientCareProfileNDPersonalCare";
import ClientCareProfileByCategory from "../screens/client/ClientCareProfileByCategory";
import ClientCareProfileBCPersonalCare from "../screens/client/ClientCareProfileBCPersonalCare";
import ClientCareProfileDocuments from "../screens/client/ClientCareProfileDocument";
import ClientCareProfileCareCircle from "../screens/client/ClientCareProfileCareCircle";
import ClientCareProfileDocumentViewer from "../screens/client/ClientCareProfileDocumentViewer";
import ClientNightCheck from "../screens/client/ClientNightChecks";
import ClientNightCheckScanner from "../screens/client/ClientNightCheckScanner";
import ClientCareProfileCareCircleDetails from "../screens/client/ClientCareProfileCareCircleDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Clients from "../screens/client/Clients";
import { LinearGradient } from "expo-linear-gradient";
import ClientCareProfileRiskAssessment from "../screens/client/ClientCareProfileRiskAssessment";
import ClientCareProfileRAEnvironmental from "../screens/client/ClientCareProfileRAEnvironmental";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import ClientRaiseConcernIncidentWho from "../screens/client/ClientRaiseConcernIncidentWho";
import ClientMakeNote from "../screens/client/ClientMakeNote";
import ClientNoteList from "../screens/client/ClientNoteList";
import ClientMakeNoteEdit from "../screens/client/ClientMakeNoteEdit";
import ClientCareLogPhysicalHealth from "../screens/client/ClientCareLogPhsyicalHealth";
import ClientCareLogMentalHealth from "../screens/client/ClientCareLogMentalHealth";
import ClientCareLogWeight from "../screens/client/ClientCareLogWeight";
import ClientCareLogBehaviour from "../screens/client/ClientCareLogBehaviour";
import ClientCareLogPresentation from "../screens/client/ClientCareLogPresentation";
import ClientCareLogSocial from "../screens/client/ClientCareLogSocial";
import ClientCheckinDay from "../screens/client/ClientCheckinDay";
import ClientCheckinNight from "../screens/client/ClientCheckinNight";
import ClientChecks from "../screens/client/ClientChecks";

const { Navigator, Screen } = createStackNavigator();

export default ClientsStack = ({ navigation }) => {
  const theme = useTheme();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerStyle: { backgroundColor: "#50CCCC" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "600" },
      }}
    >
      <Stack.Screen
        name="ClientStack"
        options={{
          title: "Clients",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <Icon style={{ width: 24, height: 24 }} name="bell" fill="#fff" />
              <View
                style={{
                  paddingVertical: 3,
                  paddingHorizontal: 8,
                  backgroundColor: "red",
                  borderRadius: 100,
                  position: "absolute",
                  top: -8,
                  right: -8,
                }}
              >
                <Text style={{ fontSize: 12, color: "#fff" }}>2</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
        component={Clients}
      />
      <Stack.Screen name="Visits" component={Visits} />
      <Stack.Screen
        name="ClientDetails"
        component={ClientDetails}
        options={{
          title: "",
          headerRight: () => (
            <Button
              size="tiny"
              style={{ borderRadius: 100 }}
              onPress={() => navigation.navigate("ClientCareProfile")}
              accessoryLeft={(props) => (
                <Icon {...props} name="folder-outline" />
              )}
            >
              {(evaProps) => (
                <Text
                  {...evaProps}
                  category="p2"
                  style={{
                    color: "#fff",
                  }}
                >
                  Care plan
                </Text>
              )}
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="ClientCallToAction"
        component={ClientCallToActions}
        options={{
          title: "",
          headerRight: () => (
            <Button
              size="tiny"
              style={{ borderRadius: 100 }}
              onPress={() => navigation.navigate("ClientRaiseConcern")}
              accessoryLeft={(props) => (
                <Icon {...props} name="alert-triangle-outline" />
              )}
            >
              {(evaProps) => (
                <Text
                  {...evaProps}
                  category="p2"
                  style={{
                    color: "#fff",
                  }}
                >
                  Raise concern
                </Text>
              )}
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="ClientCheckIn"
        component={ClientCheckIn}
        options={{
          title: "Check in",
        }}
      />
      <Stack.Screen
        name="ClientCheckinDay"
        component={ClientCheckinDay}
        options={{
          title: "Day check in",
        }}
      />
      <Stack.Screen
        name="ClientCheckinNight"
        component={ClientCheckinNight}
        options={{
          title: "Night check in",
        }}
      />
      <Stack.Screen
        name="ClientChecks"
        component={ClientChecks}
        options={{
          title: "Checks",
        }}
      />
      <Stack.Screen
        name="ClientCarePlan"
        component={ClientCarePlan}
        options={{
          title: "Tasks",
        }}
      />
      <Stack.Screen
        name="ClientTasks"
        component={ClientTasks}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientVisitLog"
        component={ClientVisitLog}
        options={{
          title: "Care monitoring",
        }}
      />
      <Stack.Screen
        name="ClientMedication"
        component={ClientMedication}
        options={{
          title: "Medications",
        }}
      />
      <Stack.Screen
        name="ClientMedicationInstruction"
        component={ClientMedicationInstruction}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientDoseRecord"
        component={ClientDoseRecord}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientMedicationNotTaken"
        component={ClientMedicationNotTaken}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientMedicationNotAdministered"
        component={ClientMedicationNotAdministered}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientMedicationAddNote"
        component={ClientMedicationAddNote}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLog"
        component={ClientCareLog}
        options={{
          title: "Care monitoring",
        }}
      />
      <Stack.Screen
        name="ClientCareLogDrink"
        component={ClientCareLogDrink}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogDrinkType"
        component={ClientCareLogDrinkType}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogDrinkHowMuch"
        component={ClientCareLogDrinkHowMuch}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogDrinkAddedList"
        component={ClientCareLogDrinkAddedList}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogToilet"
        component={ClientCareLogToilet}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogToiletUrine"
        component={ClientCareLogToiletUrine}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogToiletAddNote"
        component={ClientCareLogToiletAddNote}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogToiletAddedList"
        component={ClientCareLogToiletAddedList}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogMood"
        component={ClientCareLogMood}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogMoodAddNote"
        component={ClientCareLogMoodAddNote}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogCovid"
        component={ClientCareLogCovid}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogCovidAddNote"
        component={ClientCareLogCovidAddNote}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogFood"
        component={ClientCareLogFood}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogFoodType"
        component={ClientCareLogFoodType}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogFoodAddedList"
        component={ClientCareLogFoodAddedList}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogPhysicalHealth"
        component={ClientCareLogPhysicalHealth}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogMentalHealth"
        component={ClientCareLogMentalHealth}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogWeight"
        component={ClientCareLogWeight}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogFoodAddNote"
        component={ClientCareLogFoodAddNote}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogSocial"
        component={ClientCareLogSocial}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogPresentation"
        component={ClientCareLogPresentation}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogBehaviour"
        component={ClientCareLogBehaviour}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareLogAddNote"
        component={ClientCareLogAddNote}
        options={{
          title: "",
        }}
      />

      <Stack.Screen
        name="ClientLivingSkills"
        component={ClientLivingSkills}
        screenOptions={{ presentation: "modal" }}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientLivingSkillsAddNote"
        component={ClientLivingSkillsAddNote}
        screenOptions={{ presentation: "modal" }}
        options={{
          title: "",
        }}
      />

      <Stack.Screen
        name="ClientRaiseConcern"
        component={ClientRaiseConcern}
        options={{
          title: "Raise concern",
        }}
      />
      <Stack.Screen
        name="ClientRaiseConcernLevel"
        component={ClientRaiseConcernLevel}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientRaiseConcernWho"
        component={ClientRaiseConcernWho}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientRaiseConcernAddNote"
        component={ClientRaiseConcernAddNote}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientRaiseConcernIncidentWho"
        component={ClientRaiseConcernIncidentWho}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientRaiseConcernIncident"
        component={ClientRaiseConcernIncident}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientNoteList"
        component={ClientNoteList}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientMakeNote"
        component={ClientMakeNote}
        options={{
          title: "Make a note",
        }}
      />
      <Stack.Screen
        name="ClientMakeNoteEdit"
        component={ClientMakeNoteEdit}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCheckout"
        component={ClientCheckout}
        options={{
          title: "Check out",
        }}
      />
      <Stack.Screen
        name="ClientCheckoutUnable"
        component={ClientCheckoutUnable}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCheckoutUnableAddNote"
        component={ClientCheckoutUnableAddNote}
      />

      <Stack.Screen
        name="ClientCareProfile"
        component={ClientCareProfile}
        options={{
          title: "Care plan",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileInfo"
        component={ClientCareProfileInfo}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileAbout"
        component={ClientCareProfileAbout}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileNeedAccessments"
        component={ClientCareProfileNeedAccessments}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileNDPersonalCare"
        component={ClientCareProfileNDPersonalCare}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileByCategory"
        component={ClientCareProfileByCategory}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileBCPersonalCare"
        component={ClientCareProfileBCPersonalCare}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileDocuments"
        component={ClientCareProfileDocuments}
        options={{
          title: "Documents",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileDocumentViewer"
        component={ClientCareProfileDocumentViewer}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileCareCircle"
        component={ClientCareProfileCareCircle}
        options={{
          title: "Care circle",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileCareCircleDetails"
        component={ClientCareProfileCareCircleDetails}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileRiskAssessment"
        component={ClientCareProfileRiskAssessment}
        options={{
          title: "Risk assessment",
        }}
      />
      <Stack.Screen
        name="ClientCareProfileRAEnvironmental"
        component={ClientCareProfileRAEnvironmental}
        options={{
          title: "",
        }}
      />

      <Stack.Screen
        name="ClientNightCheckScanner"
        component={ClientNightCheckScanner}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ClientNightCheck"
        component={ClientNightCheck}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};
