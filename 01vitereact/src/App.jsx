import Test from "./test"

function App() {
  const username = "yashasvi"
  return (
      < > 
      <Test/>        
    <h1>testing by {username}</h1>    //  the parenthis is simlar to `${}`
    <p>test para</p>
    </>
  );
}

export default App;


 //so in order to return just one element we use fragment(so now technically it is 1 element  but within that 1 element theres multile)
// jsx rule isthat here you can return only 1 element 