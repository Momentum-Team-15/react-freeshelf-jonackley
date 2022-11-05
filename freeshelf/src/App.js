import { useState } from 'react';
import './App.css';

const App = ({bookData}) => {
  const [readMore,setReadMore]=useState(false)

  const linkName=readMore ? 'Read Less ▾ ' : 'Read More ▸ '
  return (
    <div className="info">
        <img src={cover} alt='cover'></img>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h3>{description}</h3>
    <div>
        <button className="read-more-link" onClick={() => { setReadMore(!readMore); } }><h2>{linkName}</h2></button></>
        {readMore && (
          <div>
            <h3>{publisher}</h3>
            <h4>{publicationDate}</h4>
            <h4>{detailedDescription}</h4>
          </div>
        )
      }

    </div>
  );
}

export default App;
