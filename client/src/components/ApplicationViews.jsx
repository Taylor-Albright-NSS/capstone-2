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
              <AuthorizedRoute>
                <EnemyList />
              </AuthorizedRoute>
              } />
            <Route path=":id" element={
              <AuthorizedRoute>
                <EnemyDetails />
              </AuthorizedRoute>
              } /> 
            <Route path="edit/:id" element={
              <AuthorizedRoute>
                <EnemyEdit />
              </AuthorizedRoute>
              } /> 
          </Route>
          <Route path="create-enemy" element={
            <AuthorizedRoute>
              <CreateEnemy />
            </AuthorizedRoute>
            } />
          <Route path="login" element={<Login setLoggedInUser={setLoggedInUser} />} />
          <Route path="register" element={<Register setLoggedInUser={setLoggedInUser} />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </UserContext.Provider>

































    // <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
    //   <Routes>
    //     <Route path="/">
    //       <Route
    //         index
    //         element={
    //           <AuthorizedRoute loggedInUser={loggedInUser}>
    //             <HomeView />
    //           </AuthorizedRoute>
    //         }
    //       />
    //       <Route path="/userprofiles">
    //         <Route
    //           index
    //           element={
    //             <AuthorizedRoute loggedInUser={loggedInUser} roles={["Admin"]}>
    //               <UserProfileList />
    //             </AuthorizedRoute>
    //           }
    //         />
    //         <Route
    //           path=":id"
    //           element={
    //             <AuthorizedRoute loggedInUser={loggedInUser} roles={["Admin"]}>
    //               <UserProfileDetails />
    //             </AuthorizedRoute>
    //           }
    //         />
    //       </Route>

    //       <Route path="/myposts">
    //           {/* <Route index element={<MyPostsList />} /> */}
    //       </Route>
          
    //       <Route path="/create-post">
    //           {/* <Route index element={<CreatePost />} /> */}
    //       </Route>

    //       <Route
    //         path="login"
    //         element={<Login setLoggedInUser={setLoggedInUser} />}
    //       />
    //       <Route
    //         path="register"
    //         element={<Register setLoggedInUser={setLoggedInUser} />}
    //       />
    //     </Route>
    //     <Route path="*" element={<p>Whoops, nothing here...</p>} />
    //   </Routes>
    // </UserContext.Provider>
  );
}
