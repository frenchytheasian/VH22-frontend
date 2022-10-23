import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Button, CircularProgress } from "@chakra-ui/react";
import Data from "./Data";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(true);
  const [sentiment, setSentiment] = useState({});

  function fetchSentiment() {
    fetch('http://127.0.0.1:8000/search', {
      method: 'POST',
      body: JSON.stringify({ url: input }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then(response => response.json())
      .then(data => {
        setLoaded(true);
        setSentiment(data);
      })
      .catch((error) => {
        setLoaded(true);
        console.error('Error:', error);
      });
  }


  function handleSubmit() {
    setSubmitted(true);
    setLoaded(false);
    fetchSentiment()
  }

  return (
    <>
      {!loaded && <div className='align'><CircularProgress isIndeterminate color='green.300' /></div>}
      <div className="align">
        <h1 className='header green'>Welcome</h1>
        <InputGroup>
          <Input
            className="searchBar"
            variant="outline"
            placeholder="Paste your link here"
            value={input}
            onInput={e => setInput(e.target.value)}
          />
          <InputRightElement children={<Button colorScheme='teal'>
            GO
          </Button>} onClick={handleSubmit} />
        </InputGroup>
      </div>
      {submitted && <Data data={sentiment} />}
    </>
  );
}

export default App;
