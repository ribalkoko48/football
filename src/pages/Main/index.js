import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header";
import GeneralInfo from "../GeneralInfo";
import "./index.css";

const PLAYERS_DATA = {
  dataName: "player",
  buttonData: {
    label: "New Player",
    action: () => {},
  },
  nonRemoveblecolumns: [
    {
      id: 1,
      name: "Name",
    },
    {
      id: 2,
      name: "Position",
    },
  ],
  columns: [
    { id: 3, name: "Club" },
    { id: 4, name: "Rating" },
    { id: 5, name: "Country" },
  ],
};

const TEAMS_DATA = {
  dataName: "team",
  buttonData: {
    label: "New Team",
    action: () => {},
  },
  nonRemoveblecolumns: [
    {
      id: 1,
      name: "Name",
    },
    {
      id: 2,
      name: "League",
    },
  ],
  columns: [
    { id: 3, name: "Stadium" },
    { id: 4, name: "Coach" },
    { id: 5, name: "Transfers Budget" },
  ],
};

const MainPage = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
      });
  }, []);

  return (
    <div className="MainPage">
      <div className="MainPage__header">
        <Header theme={theme} handleThemeChange={handleThemeChange} />
      </div>
      <div className="MainPage__content">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <GeneralInfo
                dataName={PLAYERS_DATA.dataName}
                buttonData={PLAYERS_DATA.buttonData}
                nonRemoveblecolumns={PLAYERS_DATA.nonRemoveblecolumns}
                columns={PLAYERS_DATA.columns}
              />
            }
          />
          <Route
            exact
            path="/players"
            element={
              <GeneralInfo
                dataName={PLAYERS_DATA.dataName}
                buttonData={PLAYERS_DATA.buttonData}
                nonRemoveblecolumns={PLAYERS_DATA.nonRemoveblecolumns}
                columns={PLAYERS_DATA.columns}
              />
            }
          />
          <Route
            exact
            path="/teams"
            element={
              <GeneralInfo
                dataName={TEAMS_DATA.dataName}
                buttonData={TEAMS_DATA.buttonData}
                nonRemoveblecolumns={TEAMS_DATA.nonRemoveblecolumns}
                columns={TEAMS_DATA.columns}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
