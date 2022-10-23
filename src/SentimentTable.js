import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

function SentimentTable({ data }) {
    return (
        <div className="table">
            <TableContainer>
                <Table size='sm' variant='simple'>
                    <TableCaption>Individual Messages and Sentiments</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Comment</Th>
                            <Th>Sentiment</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.comments.map((comment, index) => {
                            return (
                                <Tr className="row" key={index}>
                                    <Td className="comment-cell">{comment}</Td>
                                    <Td>sentiment</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default SentimentTable