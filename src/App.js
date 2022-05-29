import './App.css';
import React from 'react';
import NavBar from "./components/navbar/NavBar";
import {Routes,Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import HomeNavBar from "./components/home/HomeNavBar";

import ExploreAccessories from "./components/explore/ExploreAccessories";
import ExploreFilaments from "./components/explore/ExploreFilaments";
import ExploreDiy from "./components/explore/ExploreDiy";
import ExploreStemGames from "./components/explore/ExploreStemGames";
import Contact from "./components/contact/Contact";
import ContactForm from "./components/contact/ContactForm";
import ContactFAQ from "./components/contact/ContactFAQ";
import ContactMaps from "./components/contact/ContactMaps";
import ActivityOne from "./components/activity/ActivityOne";
import ActivityTwo from "./components/activity/ActivityTwo";
import ActivityThree from "./components/activity/ActivityThree";
import ActivityFour from "./components/activity/ActivityFour";
import CommunityOne from "./components/community/CommunityOne";
import CommunityTwo from "./components/community/CommunityTwo";
import CommunityThree from "./components/community/CommunityThree";
import CommunityFour from "./components/community/CommunityFour";
import PagesOne from "./components/pages/PagesOne";
import PagesTwo from "./components/pages/PagesTwo";
import PagesThree from "./components/pages/PagesThree";
import PagesFour from "./components/pages/PagesFour";
import Search from "./components/search/Search";

let App = ()=>{
  return (
    <React.Fragment>
      <Router>
        <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<HomeNavBar></HomeNavBar>}>
            </Route>
            <Route path="/explore/" element={<ExploreAccessories></ExploreAccessories>}>
            </Route>
            <Route path="/explore/filaments" element={<ExploreFilaments></ExploreFilaments>}>
            </Route>
            <Route path="/explore/diy" element={<ExploreDiy></ExploreDiy>}>
            </Route>
            <Route path="/explore/stem" element={<ExploreStemGames></ExploreStemGames>}>
            </Route>

            <Route path="/activity/" element={<ActivityOne></ActivityOne>}>
            </Route>

            <Route path="/activity/two" element={<ActivityTwo></ActivityTwo>}>
            </Route>

            <Route path="/activity/three" element={<ActivityThree></ActivityThree>}>
            </Route>

            <Route path="/activity/four" element={<ActivityFour></ActivityFour>}>
            </Route>

            <Route path="/contact" element={<Contact></Contact>}>
            </Route>

            <Route path="/contact/query" element={<ContactForm></ContactForm>}>
            </Route>

            <Route path="/contact/faq" element={<ContactFAQ></ContactFAQ>}>
            </Route>

            <Route path="/contact/maps" element={<ContactMaps></ContactMaps>}>
            </Route>



            <Route path="/community" element={<CommunityOne></CommunityOne>}>
            </Route>

            <Route path="/community/two" element={<CommunityTwo></CommunityTwo>}>
            </Route>

            <Route path="/community/three" element={<CommunityThree></CommunityThree>}>
            </Route>

            <Route path="/community/four" element={<CommunityFour></CommunityFour>}>
            </Route>

            <Route path="/pages" element={<PagesOne></PagesOne>}>
            </Route>

            <Route path="/pages/two" element={<PagesTwo></PagesTwo>}>
            </Route>

            <Route path="/pages/three" element={<PagesThree></PagesThree>}>
            </Route>

            <Route path="/pages/four" element={<PagesFour></PagesFour>}>
            </Route>

            <Route path="/search" element={<Search></Search>}>
            </Route>



          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App;
