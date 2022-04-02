import { Button, Spinner } from 'react-bootstrap';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Using react bootstrap</h1>
      <Button variant='danger'>my button</Button>
      <br />
      <Spinner variant='danger' animation="grow" />
    </div>
  );
}

export default App;
