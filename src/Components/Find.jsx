import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
export default function Find() {
  const [planeData, setplaneData] = useState({});
  const handleChange = (event) => {
    planeData[event.target.name] = event.target.value;

    setplaneData(planeData);
  };
  return (
    <>
      <Tabs isFitted variant="enclosed" w={"100"}>
        <TabList mb="1em" border={"none"}>
          <Tab>Oneway</Tab>
          <Tab>Return</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={4} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <FormControl id="orcity" isRequired>
                      <FormLabel>Enter Origin City</FormLabel>
                      <Input
                        type="text"
                        onChange={handleChange}
                        name="origincity"
                        value={planeData.Name}
                      />
                    </FormControl>
                    <FormControl id="decity" isRequired>
                      <FormLabel>Enter Destination City</FormLabel>
                      <Input type="text" />
                    </FormControl>

                    <FormControl id="decity" isRequired>
                      <FormLabel>Departure date</FormLabel>
                      <Input type="date" />
                    </FormControl>

                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Search
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              // minH={'100vh'}
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={4} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={"10"}
                >
                  <Stack spacing={4} width={"64"}>
                    <FormControl id="orcity" isRequired>
                      <FormLabel>Enter Origin City</FormLabel>
                      <Input type="text" />
                    </FormControl>
                    <FormControl id="decity" isRequired>
                      <FormLabel>Enter Destination City</FormLabel>
                      <Input type="text" />
                    </FormControl>

                    <FormControl id="decity" isRequired>
                      <FormLabel>Departure date</FormLabel>
                      <Input type="date" />
                    </FormControl>
                    <FormControl id="decity" isRequired>
                      <FormLabel>Return date</FormLabel>
                      <Input type="date" />
                    </FormControl>
                    <FormControl id="decity" isRequired>
                      <FormLabel>Passengers</FormLabel>
                      <Input type="text" />
                    </FormControl>

                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Search
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
