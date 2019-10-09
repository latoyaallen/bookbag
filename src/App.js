import React from 'react';
import Text from './components/Text';
import thepower from './data/images/thepower.png';


const pageTitleStyle = {
  fontSize: '15px',
}

const image = {
  flex: 1,
  height: 500,
  aspectRatio: 1.5,
  resizeMode: 'contain',
}

const booksIveRead = "Books I've Read in 2019";
const bookTitle = "The Power";
const bookAuthor = "Naomi Alderman";

function App() {
  return (
    <div>
      <Text text={booksIveRead}/>
      <img style={image} src={thepower} alt="The Power" />;
      <Text text={bookTitle}/>
      <Text text={bookAuthor}/>
    </div>
  );
}

export default App;
