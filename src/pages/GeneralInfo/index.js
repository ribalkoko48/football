import React, { useState, useEffect } from "react";
import CustomTable from "../../components/Table";
import SearchBar from "../../components/SearchBar";
import FilterComponent from "../../components/Filters";
import { useLocationQuery } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import "./index.css";

const DEFAULT_QUERY_PARAMS = {
  league: 0,
  club: 0,
  position: 0,
};

const GeneralInfo = ({
  dataName,
  buttonData,
  nonRemoveblecolumns,
  columns,
}) => {
  const [queryParams, setQueryParams] = useState(DEFAULT_QUERY_PARAMS);
  const [preSelectedColumns, setPreSelectedColumns] = useState(columns);
  const currentURL = useLocationQuery();
  const navigate = useNavigate();

  const handleQueryParamsChange = (queryParamName, queryParamValue) => {
    setQueryParams({ ...queryParams, [queryParamName]: queryParamValue });
  };

  const handleReset = () => {
    setQueryParams(DEFAULT_QUERY_PARAMS);
    navigate(currentURL);
  };

  useEffect(() => {
    if (localStorage.getItem(dataName)) {
      setPreSelectedColumns(JSON.parse(localStorage.getItem(dataName)));
    }
  }, [dataName]);

  useEffect(() => {
    setQueryParams(DEFAULT_QUERY_PARAMS);
    if (currentURL.get("position_id")) {
      handleQueryParamsChange("position", currentURL.get("position_id"));
    }
    if (currentURL.get("league_id")) {
      handleQueryParamsChange("league", currentURL.get("league_id"));
    }
    // eslint-disable-next-line
  }, [currentURL]);

  return (
    <div className="GeneralInfo">
      <div className="GeneralInfo__header">
        <span className="GeneralInfo__header-title">
          {dataName.toUpperCase()}S
        </span>
        <div className="GeneralInfo__header-actions">
          <SearchBar placeholder={dataName.toUpperCase()} />

          <button
            className="GeneralInfo__header-actions-button"
            onClick={buttonData.action}
          >
            {buttonData.label}
          </button>
        </div>
      </div>
      <div className="GeneralInfo__content">
        <FilterComponent
          queryParams={queryParams}
          handleQueryParamsChange={handleQueryParamsChange}
          handleReset={handleReset}
          columns={columns}
          preSelectedColumns={preSelectedColumns}
          dataName={dataName}
        />
        <CustomTable
          queryParams={queryParams}
          columns={columns}
          handleQueryParamsChange={handleQueryParamsChange}
          nonRemoveblecolumns={nonRemoveblecolumns}
          preSelectedColumns={preSelectedColumns}
          dataName={dataName}
        />
      </div>
    </div>
  );
};

export default GeneralInfo;
