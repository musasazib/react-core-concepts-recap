// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <BookCount></BookCount>
      <Posts></Posts>
    </div>
  );
}

function BookCount() {
  const [book, setBook] = useState(0);
  const addBook = () => setBook(book + 5);
  const giftBook = () => setBook(book - 5);
  return (
    <div>
      <h2>Book: {book}</h2>
      <button onClick={addBook}>New Book</button>
      <button onClick={giftBook}>Gift Book</button>
    </div>
  )
}

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      {
        posts.map(post => <Show title={post.title} body={post.body} id={post.id}></Show>)
      }
    </div>
  )
}
function Show(props) {
  return (
    <div className="style">
      <h3>{props.id}</h3>
      <h2>{props.title}</h2>
      <h4>{props.body}</h4>
    </div>
  )
}

export default App;
