import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

export const ColorButton = styled(Button)(() => ({
    marginLeft: 'auto !important',

    "&:hover": {
        background: "#ff2882",
        border: "1px solid #efefef",
        color: "#fff",
    },
    borderRadius: "3px",
    lineHeight: "3.8rem",
    background: "#fff",
    border: "1px solid #efefef",
    color: "#2f2f2f",
    padding: "0 1rem",
    transition: ".2s",
    fontWeight: "400",
}));
