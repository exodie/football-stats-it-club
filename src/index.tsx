import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";


// import main styles...
import "antd/dist/antd"; // .js
import "antd/dist/reset.css";
import "./styles/app.scss";

// import pages & components...
import TeamProfile from "./page/Team.page";
import CompetitionProfile from "./page/Competition.page";
import CardList from "./components/CardList.component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<CardList />} />
        <Route path="/teams" element={<CardList />} />
        <Route path="/teams/:id/:tab?" element={<TeamProfile />} />
        <Route path="/competitions/:id/:tab?" element={<CompetitionProfile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
