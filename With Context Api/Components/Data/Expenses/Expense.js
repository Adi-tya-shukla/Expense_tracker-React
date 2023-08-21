import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseResults from './ExpenseResults';
import expenseClass from './Expense.module.css';

const Expense = () => {
	return (
		
		<div className={expenseClass.expense_div}>
			
            <ExpenseForm />
            <ExpenseResults />
		</div>
	);
};

export default Expense;