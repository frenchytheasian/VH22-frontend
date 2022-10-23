import React from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

function Data({ data }) {
    return (
        <div>
            <Stat>
                <StatLabel>Positive</StatLabel>
                <StatNumber>{data.positive} / {data.total}</StatNumber>
            </Stat>
            <Stat>
                <StatLabel>Negative</StatLabel>
                <StatNumber>{data.negative} / {data.total}</StatNumber>
            </Stat>
        </div>

    );

}

export default Data;