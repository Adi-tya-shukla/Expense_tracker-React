// import { createSlice } from "@reduxjs/toolkit";


// const expenseInitial = { expenseData : [], edit : false}

// const expenseSlice = createSlice({
//     name : 'expenses',
//     initialState : expenseInitial,
//     reducers :{
//        fetchData = useCallback(async () => {
//             try {
//               const response = await fetch('https://expense-tracker-a7f26-default-rtdb.firebaseio.com/expenses.json');
        
//               if (!response.ok) {
//                 throw new Error('Something went wrong');
//               }
        
//               const data = await response.json();
//               const loadedExpenses = [];
        
//               for (const key in data) {
//                 if(data[key].email === emailAdd){
//                 loadedExpenses.push({
//                   id: key,
//                   expense_type: data[key].expense_type,
//                   category: data[key].category,
//                   amount: data[key].amount,
//                   email: data[key].email,
//                   text: data[key].text,
//                 });
//               }
//             }
        
//               setExpensesList(loadedExpenses);
//             } catch (error) {
//               console.log(error.message);
//             }
//           }, [emailAdd]);
        
//           useEffect(() => {
//             fetchData();
//           }, [fetchData]);
        
//           const addexpensehistory = async (inputData) => {
//             try {
//               const response = await fetch('https://expense-tracker-a7f26-default-rtdb.firebaseio.com/expenses.json', {
//                 method: 'POST',
//                 body: JSON.stringify(inputData),
//                 headers: {
//                   'Content-Type': 'application/json'
//                 }
//               });
        
//               if (!response.ok) {
//                 throw new Error('Something went wrong');
//               }
        
//               const data = await response.json();
//               console.log(data);
        
//               fetchData(); 
//             } catch (error) {
//               console.log(error.message);
//             }
//           };
        
        
//           // Remove Expense by ID
//           const removeexpensehistory = async(id) => {
//             console.log(id);
//             try{
//               const response = await axios.delete(`https://expense-tracker-a7f26-default-rtdb.firebaseio.com/expenses/${id}.json`)
//               console.log(response);
//               setExpensesList((prevList) => prevList.filter((item) => item.id !== id));
              
//           }
        
//           catch(error){
//           console.log(error);  
//           }
//           };
        
//           const editExpenses =(id)=>{
//             console.log(id);
//           const editTrans = expenseList.filter((item) => item.id === id);
//              setEdit({isEdit : true , item : editTrans});
//              removeexpensehistory(id);
               
//           }
        
//     }
// })