import './App.css';
import { useState } from 'react';

const App = ({bookData}) => {
  return (
    <section className="info">
      {bookData.map((detail) => (
          <div className='book-card'>
            <div>
              <h2>{detail.title}</h2>
              <h3>{detail.author}</h3>
              <p>{detail.shortDescription}</p>
              <BookSection
                publisher={detail.publisher}
                publicationDate={detail.publicationDate}
                description={detail.detailedDescription}
                url={detail.url} />
            </div>

            <div className='cover-container'>
              <img className='cover' src={detail.coverImageUrl} alt='book-cover' />
            </div>
          </div>      
      )
    </section>
  )
}
 
const BookSection = ({ publisher, publicationDate, description, url }) => {
  const [readMore,setReadMore]=useState(false)
  const handleClick = () => {
    setReadMore(!readMore)
  }
  return (
    <div className='descriptions'>
         <div className='button'>
        <button onClick={handleClick}>
          {readMore ? '✂︎ Less' : '☀︎ More'} Data
        </button>
      </div>
      {expanded &&
        <div>
          <br></br>
          URL: <a href={url}>{url}</a>
          {publisher && (<p>Publisher: {publisher}</p>)}
          {pubDate && (<p>PublicationDate: {publicationDate}</p>)}
          <p>Full description: {description}</p>
        </div>
      }
    </div>
  )
}
   

    </div>
 
    }



export default App;