import React from 'react';
import Text from './components/Text';


const pageTitleStyle = {
  fontSize: '15px',
}

const booksIveRead = "Books I've Read in 2019";
const bookTitle = "The Power";
const bookAuthor = "Naomi Alderman";

function App() {
  return (
    <div>
      <Text text={booksIveRead}/>
      <Text text={bookTitle}/>
      <Text text={bookAuthor}/>
    </div>
  );
}

export default App;
