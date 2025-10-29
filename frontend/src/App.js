import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Comment from './components/Comment/Comment';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    exampleApiCall();
    getPosts();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prev) => [...prev]); // triggers re-render, no data change
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // example of talking to the api
  async function exampleApiCall() {
    const result = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/health`)
    console.log(result)

  }

  async function getPosts() {
    const result = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/comments`)
    console.log(result)
    setComments(result.data);
  }


  return (
    <div className="App">
      <Comment comments={comments} />
      {/* <Router /> */}
    </div>
  );
}

export default App;
