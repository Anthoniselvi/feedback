import AdminPage from "./AdminPage";
import "./App.css";
import BasicRating from "./BasicRating";
import Form from "./Form";
import Accepted from "./Accepted";
import AdminTable from "./AdminTable";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Form />} />
            <Route path="adminPage" element={<AdminPage />} />
            <Route path="admintable" element={<AdminTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Accepted /> */}
    </div>
  );
}

export default App;
