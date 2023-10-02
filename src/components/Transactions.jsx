import { Box, Typography, Divider, List } from "@mui/material";
import Transaction from './Transaction';



const Transactions = ({transactions, setTransactions}) => {

    console.log(transactions);
    return (
        <Box>
            <Typography variant="h5">Transaction History</Typography>
            <Divider />
            <List>
                {transactions ? 
                    transactions.map(transaction => (
                        <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
                    ))
                 : null}
            </List>
        </Box>
    )
}

export default Transactions;