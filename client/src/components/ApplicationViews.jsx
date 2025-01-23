import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
// import UserProfileList from "./userprofiles/UserProfilesList";
// import UserProfileDetails from "./userprofiles/UserProfileDetails";
import { createContext, useState } from "react";
import { HomeView } from "./home/HomeView";
import { EnemyList } from "./enemies/EnemyList";
import { EnemyDetails } from "./enemies/EnemyDetails";
import { CreateEnemy } from "./enemies/CreateEnemy";
import { EnemyEdit } from "./enemies/EnemyEdit";
import { MyProfile } from "./myProfile/MyProfile";
import { Admin } from "./admin/Admin";
export const UserContext = createContext();

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  const test = "test"
  const [selectedCharacter, setSelectedCharacter] = useState({})
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, test, selectedCharacter, setSelectedCharacter }}>
      <Routes>
        <Route path="/">
          <Route index 
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <HomeView />
              </AuthorizedRoute>
            } 
          />
          <Route path="enemy-list">
            <Route index element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <EnemyList />
              </AuthorizedRoute>
              } 
              />
            <Route path=":id" element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <EnemyDetails />
              </AuthorizedRoute>
              } /> 
            <Route path="edit/:id" element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <EnemyEdit />
              </AuthorizedRoute>
              } /> 
          </Route>
          <Route path="create-enemy" element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <CreateEnemy />
            </AuthorizedRoute>
            } />
            <Route path="myprofile" element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <MyProfile />
              </AuthorizedRoute>
            } />
            <Route path="admin" element={
              <AuthorizedRoute loggedInUser={loggedInUser} roles={["Admin"]}>
                <Admin />
              </AuthorizedRoute>
            } />
          <Route path="login" element={<Login setLoggedInUser={setLoggedInUser} />} />
          <Route path="register" element={<Register setLoggedInUser={setLoggedInUser} />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}
