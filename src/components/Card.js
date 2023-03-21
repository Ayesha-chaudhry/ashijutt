import React from "react";
import {
  Flex,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from "../components/data";

const Cards = () => {
  const [startDate, setStartDate] = useState(new Date());

  function businessDaysFromDate(date, businessDays) {
    var counter = 0,
      tmp = new Date(date);
    while (businessDays >= 0) {
      tmp.setTime(date.getTime() + counter * 86400000);
      if (tmp.getDay() == 0 || tmp.getDay() == 6) {
        --businessDays;
      }
      ++counter;
    }
    alert(tmp);
    return tmp;
  }
  return (
    <>
      <Box px={10}>
        <Heading mt={20} mb={5}>
          E-Commerce
        </Heading>
        <DatePicker
          placeholderText="Select Date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          // popperClassName="some-custom-class"
          // popperPlacement="top-end"
          // popperModifiers={[
          //   {
          //     name: "offset",
          //     options: {
          //       offset: [5, 10],
          //     },
          //   },
          //   {
          //     name: "preventOverflow",
          //     options: {
          //       rootBoundary: "viewport",
          //       tether: false,
          //       altAxis: true,
          //     },
          //   },
          // ]}
        />
      </Box>
      <SimpleGrid gap={5} columns={4} mt={10}>
        {data.map((item) => (
          <Box key={item.productId}>
            <Card maxW="md">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.productName}</Heading>
                  <Box></Box>
                </Stack>

                <Flex gap={8} mt={10}>
                  <Text color="blue.600" fontWeight={"medium"} fontSize="xl">
                    {item.title}
                  </Text>
                  <Button variant="outline" colorScheme="blue">
                    {item.inventoryQuantity}
                  </Button>
                </Flex>
                <HStack mt={2}>
                  <Text color="blue.600" fontWeight={"medium"} fontSize="xl">
                    {item.desc}
                  </Text>
                  <Button variant="outline" colorScheme="blue">
                    {item.maxBusinessDaysToShip}
                  </Button>
                </HStack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button
                  onClick={() => {
                    businessDaysFromDate(startDate, item.maxBusinessDaysToShip);
                  }}
                  mx={12}
                  variant="solid"
                  colorScheme="blue"
                >
                  {item.date}
                </Button>
              </CardFooter>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Cards;
