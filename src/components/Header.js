import React from 'react'
import { Box, Heading, Button, Flex } from '@chakra-ui/core' 
import "../app.css";

const Header = () => {

  const myFunction = () => {
    var btn;
    if(document.getElementById("light-mode"))
    btn = document.getElementById("light-mode");
    else
    btn =  document.getElementById("dark-mode");
    if (btn.value === "Dark") {
      btn.value = "Light";
      btn.innerHTML = "Light";
      btn.id="dark-mode"
    }
    else {
      btn.value = "Dark";
      btn.innerHTML = "Dark";
      btn.id="light-mode"

    }

    var btn2;
    if(document.getElementById("light")){
    btn2 = document.getElementById("light");
      btn2.id="dark";

  }
    else{

    btn2 =  document.getElementById("dark");
    btn2.id="light"
  }
  var btn3;
    if(document.getElementById("light1")){
    btn3 = document.getElementById("light1");
      btn3.id="dark1";

  }
    else{

    btn3 =  document.getElementById("dark1");
    btn3.id="light1"
  }


  }


  return (
    <Box as="header" py="6" borderBottomWidth="4px">
      <Flex maxW="5xl" mx="auto" px="5">
        <Heading as="h1" size="md">
          Where in the world?
      </Heading>
        <Button onClick={myFunction} id="light-mode" value="Dark" style={{border:"2px solid blue", marginLeft:"auto"}}>
          Dark
      </Button>
      </Flex>
    </Box>
  )
}

export default Header
