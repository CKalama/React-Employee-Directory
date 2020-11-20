import '../App.css';
//Impotant Import
import react, {useState} from "react";
import Header from "../components/Header";
import Body from "../components/Body";


function HomePage() {

  const [state, setState] = useState({
    emps: [{name: 'jay', email: 'jay@jay.com', DOB:'01.01.1990'}, {name: 'chris', email: 'chris@chris.com', DOB:'02.16.1996'},{name: 'tyler', email: 'tyler@tyler.com', DOB:'02.02.1991'}],
    filteredEmps: []
  })


  const handleSearch = (event) => {
    console.log("WE ARE TYPING!",event.target.value)
    var newFiltered = []

    for (let i =0; i<state.emps.length; i++) {
      //console.log(state.emps[i].name)

      //the event.target.value is waiting for the state.emps.name.substring(which is a JS function to wait for how many letters the user types into the search bar. Has a couple cool features that can limit what is being typed or displayed based on that function) If it is at the "length" of the value in the search bar, then it will push into the empty array newFiltered)
      if(event.target.value === state.emps[i].name.substring(0, event.target.value.length)){
        newFiltered.push(state.emps[i]);
      }
    }

    //console.log('new filtered ppeps to disply', newFiltered)
    //...state is taking a copy of the original state and then pushing what info. in this case it is filteredEmps with newFiltered.
    //Once pushed into the new array, we want to update the state, we can do that with the '...' and pushing the filteredEmps array from the state into the array we created in the function
    setState({...state, filteredEmps: newFiltered})
  }

  console.log('STATE!!', state)
  var empsToDisplay = state.emps

  if (state.filteredEmps.length > 0){
    empsToDisplay = state.filteredEmps
  }



  return (
    <div className="App">
      <Header />
      <Body />

    <input onChange={handleSearch}></input>
    
    <h1>Name</h1>

{/* Map over array like a loop. */}
  {empsToDisplay.map((emp)=>{

    return(
      <div>
        <h1>{emp.name}</h1>
        <h1>{emp.email}</h1>
        <h1>{emp.DOB}</h1>
        {/* <h1>{emp.email}</h1> */}
      </div>
    )
  })}
    </div>
  );
}

export default HomePage;


//TODO LIST!
//1. Click the name label and then re arange our state array alphabetically
  // just how u did a onchange with a helper bunction - this time on on click with a helper function
  // inside on on click helper you will sort the array alphabetically!! and then update the state
    // similar to hwo you did it on the filter but this time we are just sorting abc order

// 2. Fill out each emp html thats getting displayed - fill it up with h1s for email name phone ect... make look nice!

// 3. GH pages react deploy
