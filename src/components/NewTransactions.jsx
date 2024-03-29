import { useState } from 'react';
import { Box, Typography, TextField, Button, styled } from '@mui/material';
import { uuid } from 'uuidv4';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px;
    }
`

const NewTransactions = ({ setTransactions }) =>{

    const[text, setText] = useState('');
    const[amount, setAmount] = useState() ;

    const addTransaction = () => {
        
        const transaction = {
            id: Date.now() + '-' + Math.floor(Math.random() * 1000),
            text: text,
            amount: +amount
        }   
        setTransactions(prevState => [transaction, ...prevState]);
    }
    return(
        <Container>
            <Typography variant='h5'>New Transaction</Typography>
            <TextField label='Enter Expense' onChange = {(e) => setText(e.target.value)} />
            <TextField label='Enter Amount' onChange = {(e) => setAmount(e.target.value)} />
            <Button variant='contained' style={{color: 'black', backgroundColor: 'green'}} onClick = {() => addTransaction()}>Add Transaction</Button>
        </Container>
    )
}

export default NewTransactions ;