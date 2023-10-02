import { Box, Typography, styled } from '@mui/material' ;


const BalanceText = styled(Typography)`
   font-size : 20px;
   margin-bottom : 25px; 
`

const Balance = ({ transactions }) => {
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item), 0);

 
    return(
        <Box>
           <BalanceText> Balance : ₹{total}</BalanceText>
        </Box>
    )
}

export default Balance ;