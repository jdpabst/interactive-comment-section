import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Comment from './components/Comment/Comment';

function App() {
  const [posts, setPosts] = useState([]);

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
    setPosts(result.data);
  }

  return (
    <div className="App">
      <Comment posts={posts} />
      {/* <Router /> */}
    </div>
  );
}

export default App;
