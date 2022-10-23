import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import Data from "./Data";

function App() {
  const [submitted, setSubmitted] = useState(false);


  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <>
      {submitted ? (<Data />) : (
        <div className="align">
          <h1 className='header green'>Welcome</h1>
          <InputGroup>
            <Input className="searchBar" variant="outline" placeholder="Paste your link here" />
            <InputRightElement children={<Button colorScheme='teal'>
              GO
            </Button>} onClick={handleSubmit} />
          </InputGroup>
        </div>)
      }
    </>
  );
}

export default App;
