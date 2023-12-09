
import './App.css';
import React from 'react';
import HomePage from './HomePage';
import SummaryPage from './SummaryPage';
import OrderPage from './OrderPage';

function App() {

  const [stage, setStage]= React.useState("homepage")
  

  return (
  
    <div>
      
        {stage === "homepage" && <HomePage data={setStage}/>}
        {stage === "summarypage" && <SummaryPage data={setStage}/>}
        {stage === "orderpage" && <OrderPage/>}
      
    </div>

  );
}

export default App;
