import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Button
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
            label={label}
        />
    );
};

export default ButtonMailto;