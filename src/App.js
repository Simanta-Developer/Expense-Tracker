import logo from './logo.svg';
import './App.css';
import { Typography, styled, Box } from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';

import { useState } from 'react';


const Header = styled(Typography)`
  font-size : 40px;
  color : blue;
  text-transform : uppercase;
`
const Component = styled(Box)`
  display: flex;
  background: #fff;
  width: 800px;
  padding: 10px
  border-radius: 25px;
  margin: auto;

  &>div{
    height: 83vh;
    width: 50%;
    padding: 10px; 
  }

`
function App() {

  // const defaultValue = {
  //   id : '',
  //   Text : '' ,
  //   amount : ''     
  // }  
  const [transactions, setTransactions] = useState([])

  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransactions setTransactions={setTransactions} />
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions} />
        </Box>
      </Component>
    </div>
  );
}

export default App;
