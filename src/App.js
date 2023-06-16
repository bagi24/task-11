import "./App.css";
import BookComponent from "./Components/BookComponent";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="App">
      <BookComponent
        image="https://media.istockphoto.com/id/628925698/vector/pile-of-hardcover-books.jpg?s=1024x1024&w=is&k=20&c=om0-5vADCc1gSlXaM1RHeKVA8ypRsIqUsOoQyaCG744="
        title="The Great Book"
        description="A captivating book that will keep you hooked until the end."
        characters={["Character 1", "Character 2", "Character 3"]}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
