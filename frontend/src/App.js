import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Comment from './components/Comment/Comment';

function App() {

  useEffect(() => {
    exampleApiCall();
    getPosts();
  }, [])

  // example of talking to the api
  async function exampleApiCall() {
    const result = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/health`)
    console.log(result)
  }

  async function getPosts() {
    const result = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/posts`)
    console.log(result)
  }

  return (
    <div className="App">
      <Comment />
      {/* <Router /> */}
    </div>
  );
}

export default App;
