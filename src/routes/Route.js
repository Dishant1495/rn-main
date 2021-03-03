import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Mobile from '../screens/Mobile';
import OTP from '../screens/OTP';
import accesslocation from '../screens/accesslocation';
import enterlocation from '../screens/enterlocation';
import searchcity from '../screens/searchcity';
import home from '../screens/homepage';
import typesearchscreen from '../screens/typesearchscreen';
import advancessearch from '../screens/Advancessearch';
import editprofile from '../screens/editprofile';
import myaccount from '../screens/Myaccount';
import myschool_a from '../screens/myschool_a';
import myschool_b from '../screens/myschool_b';
import discoverlocality from '../screens/discoverlocality';
import compareschool from '../screens/compareschool';
import comparisionschoolwise from '../screens/Comparisionschoolwise';
import addfavouriteschool from '../screens/Addfavouriteschool';
import favouritescreen from '../screens/Favouritescreen';
import addmisiontimeline from '../screens/Addmisiontimeline';
import Onlineoverview from '../screens/Onlineoverview';
import Offlineoverview from '../screens/Offlineoverview';
import feestructure from '../screens/Feestructure';
import critearea from '../screens/Critearea';
import admission from '../screens/Admission';
import faqs from '../screens/Faqs';
import reviews from '../screens/Reviews';
import reviewscommentadd from '../screens/Reviewscommentadd';
import reviewsposted from '../screens/Reviewposted';
import Applyforadmission from '../screens/Applyforadmission';
import Getfeestructure from '../screens/Getfeestructure';
import Getfeestructurewithoutlogin from '../screens/Getfeestrucutrewithoutlogin';
import Apply from '../screens/Apply';
import KYC from '../screens/KYC';
import KycRejeacted from '../screens/KycRejeacted';
import PayAdmission from '../screens/PayAdmission';
import PaymentMethod from '../screens/PaymentMethod';
import Entrance from '../screens/Entrance';
import Joinadmis from '../screens/Joinadmis';
//import popupscreen from '../screens/Popupscreen';
import JoinAdmission from '../screens/JoinAdmission';

import JoinAdmissionSubmit from '../screens/JoinAdmissionSubmit';

// import JoinAdmissionSubmit from '../screens/JoinAdmissionSubmit';
import EntranceResult from '../screens/EntranceResult';

// import Classroom from '../screens/Classroom';

// import Information from '../screens/Information';
// import Info from '../screens/info';
// import Notebook from '../screens/Notebook';
// import Highlight from '../screens/Highlight';

// import Chat from '../screens/Chat';
// import Mates from '../screens/Mates';
// import Doubts from '../screens/Doubts';
// import Homework from '../screens/Homework';
// import Periods from '../screens/Periods';


const Stack = createStackNavigator();

Route = () => {
  createHomeStack = () => (
    <Stack.Navigator headerMode="none" initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Mobile" component={Mobile} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="Accesslocation" component={accesslocation} />
      <Stack.Screen name="Enterlocation" component={enterlocation} />
      <Stack.Screen name="Searchcity" component={searchcity} />
      <Stack.Screen name="Home" component={home} />
      {/* <Stack.Screen name="Popupscreen" component={popupscreen} /> */}
      <Stack.Screen name="Typesearchscreen" component={typesearchscreen} />
      <Stack.Screen name="Advancesearch" component={advancessearch} />
      <Stack.Screen name="Editprofile" component={editprofile} />
      <Stack.Screen name="Myaccount" component={myaccount} />
      <Stack.Screen name="Myschool_a" component={myschool_a} />
      <Stack.Screen name="Myschool_b" component={myschool_b} />
      <Stack.Screen name="Discoverlocality" component={discoverlocality} />
      <Stack.Screen name="Compareschool" component={compareschool} />
      <Stack.Screen
        name="Comparisionschoolwise"
        component={comparisionschoolwise}
      />
      <Stack.Screen name="Addfavouriteschool" component={addfavouriteschool} />
      <Stack.Screen name="Favouritescreen" component={favouritescreen} />
      <Stack.Screen name="Addmisiontimeline" component={addmisiontimeline} />
      <Stack.Screen name="Onlineoverview" component={Onlineoverview} />
      <Stack.Screen name="Offlineoverview" component={Offlineoverview} />

      <Stack.Screen name="Feestructure" component={feestructure} />
      <Stack.Screen name="Critearea" component={critearea} />
      <Stack.Screen name="Admission" component={admission} />
      <Stack.Screen name="Faqs" component={faqs} />
      <Stack.Screen name="Reviews" component={reviews} />
      <Stack.Screen name="Reviewscommentadd" component={reviewscommentadd} />
      <Stack.Screen name="Reviewposted" component={reviewsposted} />
      <Stack.Screen name="Applyforadmission" component={Applyforadmission} />
      <Stack.Screen name="Getfeestructure" component={Getfeestructure} />
      <Stack.Screen
        name="Getfeestructurewithoutlogin"
        component={Getfeestructurewithoutlogin}
      />
      <Stack.Screen name="Apply" component={Apply} />
      <Stack.Screen name="KYC" component={KYC} />
      <Stack.Screen name="KycRejeacted" component={KycRejeacted} />
      <Stack.Screen name="PayAdmission" component={PayAdmission} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="Entrance" component={Entrance} />
      <Stack.Screen name="Joinadmis" component={Joinadmis} />
      <Stack.Screen name="JoinAdmission" component={JoinAdmission} />
      <Stack.Screen
        name="JoinAdmissionSubmit"
        component={JoinAdmissionSubmit}
      />
      <Stack.Screen name="EntranceResult" component={EntranceResult} />

      {
      /* <Stack.Screen name="Classroom" component={Classroom} />

      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Notebook" component={Notebook} />

      <Stack.Screen name="Highlight" component={Highlight} />

      <Stack.Screen name="Chat" component={Chat} />

      <Stack.Screen name="Mates" component={Mates} />
      <Stack.Screen name="Doubts" component={Doubts} />
      <Stack.Screen name="Homework" component={Homework} />

      <Stack.Screen name="Periods" component={Periods} /> 
      */}
      
    </Stack.Navigator>
  );

  return <NavigationContainer>{this.createHomeStack()}</NavigationContainer>;
};

export default Route;
