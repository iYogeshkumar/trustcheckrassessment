import "./App.css";
import SearchFlight from "./Components/Flight";
import Enquery from "./Components/Find";
import { Box, Divider, useColorModeValue, Heading } from "@chakra-ui/react";
import Find from "./Components/Find";
function App() {
  return (
    <>
      <Heading>Flight Search</Heading>
      <div className="App">
        <br />
        <Divider />
        <Box
          display="flex"
          flex="1"
          flexDirection="row"
          justifyContent="space-evenly"
        >
          <Box>
            <Find />
          </Box>
          <Box>
            <SearchFlight />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default App;
