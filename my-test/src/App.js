import "./App.css";
import Book from "./components/Book";
function App() {
  const firstBook = [
    {
      img: "https://loremflickr.com/320/241",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/242",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/243",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/244",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/245",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/246",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/247",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/248",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/249",
      title: "Atomic Habits",
      author: "James Clear",
    },
  ];
  return (
    <div className="container">
      <h1 className="headline">Welcome to our shopping mall)</h1>

      <div className="book_wrapper">
        {firstBook.map((books, index) => {
          return (
            <Book
              img={books.img}
              title={books.title}
              author={books.author}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
