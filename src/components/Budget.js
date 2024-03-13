import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  // Update displayed budget immediately on component mount and whenever newBudget changes
  useEffect(() => {
    setNewBudget(budget); // Update displayed budget upon initial render
  }, [budget]); // Dependency array: update only when budget changes

  const handleBudgetChange = (event) => {
    const enteredBudget = parseInt(event.target.value, 10); // Ensure numeric input
    // Validate entered budget (optional)
    if (enteredBudget >= 0) { // Example validation: non-negative budget
      setNewBudget(enteredBudget);
      dispatch({ type: 'SET_BUDGET', payload: enteredBudget }); // Dispatch action to update global state
    } else {
      // Handle invalid input (optional)
      console.error('Invalid budget entered (must be non-negative):', enteredBudget);
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £{newBudget}</span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
    </div>
  );
};

export default Budget;
