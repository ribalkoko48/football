import {CircularProgress, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";

export const PositionFilter = ({ isLoading, isError, data, handlePositionChange, position = ''}) => {
    if (isLoading) {
        return <CircularProgress/>;
    }

    if (isError) {
        return <div>Error!</div>;
    }

    return (
        <div className="Filter__field Custom__filter">
            <InputLabel className="Filter__field-title Custom__filter-title">
                FILTER BY POSITIONS
            </InputLabel>
            <Select
                value={position}
                // label="FILTER BY LEAGUE"
                onChange={handlePositionChange}
                variant="standard"
            >
                {data?.data.map((option, index) => {
                    return (
                        <MenuItem key={index} value={option.id}>
                            {option.name}
                        </MenuItem>
                    );
                })}
            </Select>
        </div>
    );
};
