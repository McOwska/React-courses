// import Message from './Message'
// import ListGroup from "./components/ListGroup";

// function App(){
//   let items = [
//     'New York',
//     'Los Angeles',
//     'Chicago',
//     'Houston'
//   ];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }

//   return <div>< ListGroup items = {items} heading = {"Cities"} onSelectItem={handleSelectItem}/></div> //<Message /> -> self-closing tag
// }

// export default App;
// import Alert from "./components/Alert";

// const App = () => {
//   return (
//     <div>
//       <Alert>
//         Hello world
//       </Alert>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";

// const App = () => {
//   const handleOnClick = () => {
//     console.log('Button clicked!')
//     setAlertVisible(true);
//   };

//   const handleOnClose = () => {
//     setAlertVisible(false);
//   }

//   const [alertVisible, setAlertVisible] = useState(false);

//   return (
//     <div>
//       { alertVisible && <Alert onClose = {handleOnClose}>Test alert</Alert>}
//       <Button handleOnClick={handleOnClick}> Hello</Button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import Form from "./ExpenceTrackerProject/components/Form";
import ExpenseList from "./ExpenceTrackerProject/components/ExpenseList";
import ExpenseFilter from "./ExpenceTrackerProject/components/ExpenseFilter";
import categories from "./ExpenceTrackerProject/categories";

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('');

  const [expenses, setExpenses] = useState([
    { id: 1, description: "banana", amount: 100, category: "food" },
    { id: 2, description: "apple", amount: 200, category: "food" },
    { id: 3, description: "rent", amount: 300, category: "rent" },
    { id: 4, description: "bills", amount: 400, category: "bills" },
  ])

  const onDelete = (id: number) => {
    console.log(id);
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const onSelectCategory = (category: string) => {
    console.log(category);
    setSelectedCategory(category);
  };

  const selectExpenses = (category: string) => {
    console.log("selecting expenses");
    return expenses.filter((e) => e.category === category);
  }


  const visibleExpenses = selectedCategory ? expenses.filter(e=> e.category === selectedCategory) : expenses;

  return (
    <>
      <Form onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
      <ExpenseFilter
        onSelectCategory={(category) => onSelectCategory(category)}
      ></ExpenseFilter>
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
    </>
  );
}

export default App;
