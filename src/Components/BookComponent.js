const BookComponent = ({
  image,
  title,
  description,
  characters,
  handleClick,
}) => {
  const handleButtonClick = () => {
    console.log(`Title: ${title}`);
    console.log(`Characters: ${characters.join(", ")}`);
    handleClick();
  };

  return (
    <div>
      <img className="BookPic" src={image} alt="Book" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleButtonClick}>Print Book Info</button>
    </div>
  );
};

export default BookComponent;
