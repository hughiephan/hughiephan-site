import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getAllReading } from '../../../FirebaseClient';

const Reading = () => {
    const [allReading, setAllReading] = useState('');

    useEffect(() => {
        const fetchAllReading = async () => { setAllReading(await getAllReading()); }
        fetchAllReading()
    }, []);

    return (
        <TableContainer style={{position: "relative", marginTop: "-240px", backgroundColor: "transparent"}} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Topic</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allReading && allReading.map((reading) => (
                        <TableRow key={reading.topic}>
                            <TableCell>
                                <a href={reading.url} style={{ color: reading.url ? '#0aa3f5' : 'black' }}>
                                    {reading.title}
                                </a>
                            </TableCell>
                            <TableCell>{reading.author}</TableCell>
                            <TableCell>{reading.topic}</TableCell>
                            <TableCell>{reading.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Reading;
