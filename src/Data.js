import React from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import SentimentTable from "./SentimentTable";

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
            <SentimentTable data={data}/>
        </div>

    );

}

export default Data;