import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Button, CircularProgress } from "@chakra-ui/react";
import Data from "./Data";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

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
        <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <a> What's a name you would NEVER give your child?</a>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <h1>9.7K Upvotes - 14.1K Comments&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <a href='https://www.reddit.com/r/AskReddit/comments/yaugmy/whats_a_name_you_would_never_give_to_your_child/'className="blue-link"><u>Click Here</u></a>
      </h1>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
           <a>Thousands of Protesters March in Central London to call for UK to rejoin the EU.</a>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <h1>41.9K Upvotes - 2.8K Comments&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <a href='https://www.reddit.com/r/worldnews/comments/yav8t8/thousands_of_protesters_march_in_central_london/'  className="blue-link"><u>Click Here</u></a>
      </h1>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </div>
      {submitted && loaded && <Data data={sentiment} />}
    </>
  );
}

export default App;
