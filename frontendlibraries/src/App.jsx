import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ list, setList] = useState(null)
  const [ random, setRandom ] = useState(null)
  useEffect(() => {
    handleRandomNumbers()
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => setList(res.data.quotes))
    console.log(list)
  },[])

  const handleRandomNumbers = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    setRandom(randomNumber)
  }

  const handleNewQuote = () => {
    handleRandomNumbers()
  }

  return (
    <>
      <main id='quote-box'>
        <div id='quote'>
          <p id='text'>
            { list ? list[random].quote : null }
          </p>
          <span id='author'>
            { list ? list[random].author : null }
          </span>
        </div>
        <div id='quote-actions'>
        <button id='new-quote' onClick={handleNewQuote}>
          NEW QUOTE
        </button>
        <a id='tweet-quote' target='_blank' href={ list ? `https://twitter.com/intent/tweet/${list[random].quote}` : '/'}>
          Tweet Quote
        </a>
        </div>
      </main>
    </>
  )
}

export default App
