import React, { useEffect, useState } from "react";
import {
 
  Image,
  Text,
  Container,
  CardBody,
  Card,
  Button,
  Center,
} from "@chakra-ui/react";

const Flight = () => {
  const [planeData, setplaneData] = useState([]);
  const getData = () => {
    fetch("assignment-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);

        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setplaneData(myJson.results);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {planeData.map((el) => {
        return (
          <Container maxW={"7xl"} p="12">
            <Card>
              <CardBody>
                <Center>
                  <Image
                    borderRadius="sm"
                    width="80px"
                    src={"https://m.media-amazon.com/images/I/61drTedWzgL.png"}
                    alt="flight"
                    objectFit="contain"
                  />
                </Center>
                <Text>Name: {el.name}</Text>
                <Text>Price: {parseInt(el.price)}</Text>
                <Text>originCity:{el.originCity}</Text>
                <Text>destinationCity:{el.destinationCity}</Text>
                <Text>departureDate: {el.departureDate}</Text>
                <Text>departureTime: {el.departureTime}</Text>
                <Button mt={"2"} colorScheme="blue">
                  Book This flight
                </Button>
              </CardBody>
            </Card>
          </Container>
        );
      })}
    </>
  );
};

export default Flight;
