import React from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import SentimentTable from "./SentimentTable";

function Data({ data }) {
    return (
        <div>
            <Stat>
                <StatLabel>Positive</StatLabel>
                <StatNumber>20 / 30</StatNumber>
            </Stat>
            <Stat>
                <StatLabel>Negative</StatLabel>
                <StatNumber>20 / 30</StatNumber>
            </Stat>
            <SentimentTable data={{'comments': ['hi', 'no', 'hea;ljeisdjf;aishvioeah;voi', 'hiowa;ihf;ioeaho;idhvoiawehcoihoie;haew']}}/>
        </div>

    );

}

export default Data;