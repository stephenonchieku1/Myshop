import './clerk.css';
import { Route, Routes } from "react-router";
import Table from "./components/ClerkPage/ItemsTables/Table"
function ClerkLandingPage({setClerkUser}) {
  return (
<>
  
        <Routes>
        <Route exact path='/' element={<Table setClerkUser={setClerkUser}  />} />
        </Routes>


      </>
  );
}

export default ClerkLandingPage;
