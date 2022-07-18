import React from "react";
import CustomTable from "../../components/Table";
import SearchBar from "../../components/SearchBar";
import FilterComponent from "../../components/Filters";
import {ColorButton} from "./style";
import "./index.css";

const GeneralInfo = ({ props }) => {
  const { dataName, buttonData, filterData } = props;
/*
  const [query, setQuery] = useState({
    club: "",
    position: "",
  });*/
  // There is a problem, when the data is loaded, it doubles, so I can see the data in the console twice.

  return (
    <div className="GeneralInfo">
      <div className="GeneralInfo__header">
        <span className="GeneralInfo__header-title">
          {dataName.toUpperCase()}S
        </span>
        <div className="GeneralInfo__header-actions">
          <SearchBar placeholder={dataName.toUpperCase()} />
          <ColorButton
            variant="outlined"
            onClick={buttonData.action}
          >
            {buttonData.label}
          </ColorButton>
        </div>
      </div>
      <div className="GeneralInfo__content">
        <FilterComponent dataName={dataName} filterData={filterData} />
        <CustomTable />
      </div>
    </div>
  );
};

export default GeneralInfo;
