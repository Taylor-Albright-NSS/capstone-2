import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
// import UserProfileList from "./userprofiles/UserProfilesList";
// import UserProfileDetails from "./userprofiles/UserProfileDetails";
import { createContext } from "react";
import { HomeView } from "./home/HomeView";
import { EnemyList } from "./enemies/EnemyList";
import { EnemyDetails } from "./enemies/EnemyDetails";
import { CreateEnemy } from "./enemies/CreateEnemy";
import { EnemyEdit } from "./enemies/EnemyEdit";
export const UserContext = createContext();

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  const test = "test"
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, test }}>
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
          <Route path="login" element={<Login setLoggedInUser={setLoggedInUser} />} />
          <Route path="register" element={<Register setLoggedInUser={setLoggedInUser} />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}
