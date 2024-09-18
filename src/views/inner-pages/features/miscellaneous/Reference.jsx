import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getReference } from '../../../FirebaseClient';

const Reference = (props) => {
    const { referenceId } = props;
    const [reference, setReference] = useState('');
    useEffect(() => {
      const fetchReference = async () => {
        const reference = await getReference(referenceId)
        setReference(reference);
      }
      fetchReference()
    }, [referenceId]);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>Topic</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Prototype</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reference && reference.children.map((reference) => (
                        <TableRow key={reference.topic}>
                            <TableCell>{reference.type}</TableCell>
                            <TableCell>{reference.topic}</TableCell>
                            <TableCell>
                                <a href={reference.url} style={{ color: reference.url ? '#0aa3f5' : 'black' }}>
                                    {reference.title}
                                </a>
                            </TableCell>
                            <TableCell style={{background: reference.todo && reference.todo.includes("kaggle") ? "#FFF3DE" : "inherit",}}>
                                {reference.kaggle && (
                                    <a href={reference.kaggle}>
                                        <img 
                                            height="20" 
                                            src="https://www.kaggle.com/static/images/logos/kaggle-logo-transparent-300.png" 
                                            style={{ display: 'inline-block', verticalAlign: 'middle' }} 
                                            alt="Kaggle Logo"
                                        /> 
                                    </a>
                                )}
                            </TableCell>
                            <TableCell>{reference.description}</TableCell>
                            <TableCell>{reference.result}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Reference;
