import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";

import { BottomNavigator } from "./BottomNavigator";
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

const { Navigator, Screen } = createStackNavigator();

export default ClientsStack = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Navigator headerMode="none">
      <Screen name="BottomNavigator" component={BottomNavigator} />
      <Screen name="Visits" component={Visits} />
      <Screen name="ClientDetails" component={ClientDetails} />
      <Screen name="ClientCallToAction" component={ClientCallToActions} />
      <Screen name="ClientCheckIn" component={ClientCheckIn} />
      <Screen name="ClientCarePlan" component={ClientCarePlan} />
      <Screen name="ClientTasks" component={ClientTasks} />
      <Screen name="ClientVisitLog" component={ClientVisitLog} />
      <Screen name="ClientMedication" component={ClientMedication} />
      <Screen
        name="ClientMedicationInstruction"
        component={ClientMedicationInstruction}
      />
      <Screen name="ClientDoseRecord" component={ClientDoseRecord} />
      <Screen
        name="ClientMedicationNotTaken"
        component={ClientMedicationNotTaken}
      />
      <Screen
        name="ClientMedicationNotAdministered"
        component={ClientMedicationNotAdministered}
      />
      <Screen
        name="ClientMedicationAddNote"
        component={ClientMedicationAddNote}
      />
      <Screen name="ClientCareLog" component={ClientCareLog} />
      <Screen name="ClientCareLogDrink" component={ClientCareLogDrink} />
      <Screen
        name="ClientCareLogDrinkType"
        component={ClientCareLogDrinkType}
      />
      <Screen
        name="ClientCareLogDrinkHowMuch"
        component={ClientCareLogDrinkHowMuch}
      />
      <Screen
        name="ClientCareLogDrinkAddedList"
        component={ClientCareLogDrinkAddedList}
      />
      <Screen name="ClientCareLogToilet" component={ClientCareLogToilet} />
      <Screen
        name="ClientCareLogToiletUrine"
        component={ClientCareLogToiletUrine}
      />
      <Screen
        name="ClientCareLogToiletAddNote"
        component={ClientCareLogToiletAddNote}
      />
      <Screen
        name="ClientCareLogToiletAddedList"
        component={ClientCareLogToiletAddedList}
      />
      <Screen name="ClientCareLogMood" component={ClientCareLogMood} />
      <Screen
        name="ClientCareLogMoodAddNote"
        component={ClientCareLogMoodAddNote}
      />
      <Screen name="ClientCareLogCovid" component={ClientCareLogCovid} />
      <Screen
        name="ClientCareLogCovidAddNote"
        component={ClientCareLogCovidAddNote}
      />
      <Screen name="ClientCareLogFood" component={ClientCareLogFood} />
      <Screen name="ClientCareLogFoodType" component={ClientCareLogFoodType} />
      <Screen
        name="ClientCareLogFoodAddedList"
        component={ClientCareLogFoodAddedList}
      />
      <Screen
        name="ClientCareLogFoodAddNote"
        component={ClientCareLogFoodAddNote}
      />
      <Screen name="ClientCareLogAddNote" component={ClientCareLogAddNote} />

      <Screen
        name="ClientLivingSkills"
        component={ClientLivingSkills}
        screenOptions={{ presentation: "modal" }}
      />
      <Screen
        name="ClientLivingSkillsAddNote"
        component={ClientLivingSkillsAddNote}
        screenOptions={{ presentation: "modal" }}
      />

      <Screen name="ClientRaiseConcern" component={ClientRaiseConcern} />
      <Screen
        name="ClientRaiseConcernLevel"
        component={ClientRaiseConcernLevel}
      />
      <Screen name="ClientRaiseConcernWho" component={ClientRaiseConcernWho} />
      <Screen
        name="ClientRaiseConcernAddNote"
        component={ClientRaiseConcernAddNote}
      />
      <Screen
        name="ClientRaiseConcernIncident"
        component={ClientRaiseConcernIncident}
      />
      <Screen name="ClientCheckout" component={ClientCheckout} />
      <Screen name="ClientCheckoutUnable" component={ClientCheckoutUnable} />
      <Screen
        name="ClientCheckoutUnableAddNote"
        component={ClientCheckoutUnableAddNote}
      />

      <Screen name="ClientCareProfile" component={ClientCareProfile} />
      <Screen name="ClientCareProfileInfo" component={ClientCareProfileInfo} />
      <Screen
        name="ClientCareProfileAbout"
        component={ClientCareProfileAbout}
      />
      <Screen
        name="ClientCareProfileNeedAccessments"
        component={ClientCareProfileNeedAccessments}
      />
      <Screen
        name="ClientCareProfileNDPersonalCare"
        component={ClientCareProfileNDPersonalCare}
      />
      <Screen
        name="ClientCareProfileByCategory"
        component={ClientCareProfileByCategory}
      />
      <Screen
        name="ClientCareProfileBCPersonalCare"
        component={ClientCareProfileBCPersonalCare}
      />
    </Navigator>
  </SafeAreaView>
);
