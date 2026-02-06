import { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

import './App.css';
import getQuotes from './getQuotes';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleClick = async () => {
    try {
      const data = await getQuotes();

      setQuote(data[0].quote);
      setAuthor(data[0].author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  }

  return (
    <>
    <div className='app'>
      <Typography variant='h2'>Random Quote Generator</Typography>
      <Card className='card'>
        <CardContent>
          <Typography variant='h5'>{quote}</Typography>
          <Typography className='margin-top' color='textSecondary'>{author}</Typography>
          <hr/>
          <button className='margin-top' color='primary' variant='outlined' onClick={handleClick}>Click for quotes</button>
        </CardContent>
      </Card>
    </div>
    </>
  )
}

export default App
