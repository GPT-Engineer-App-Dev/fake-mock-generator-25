// Complete the Index page component here
// Use chakra-ui
import { Grid, GridItem, Center } from "@chakra-ui/react";

const Index = () => {
  // TODO: Create the website here!
  return (
    <Center h="100vh">
      <Grid templateColumns="repeat(3, 1fr)" gap={2} w="300px" h="300px" bg="gray.100" p={4} borderRadius="md" boxShadow="md">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <GridItem key={index} w="100%" h="100%" bg="white" borderRadius="md" display="flex" alignItems="center" justifyContent="center" fontSize="4xl" fontWeight="bold" cursor="pointer" boxShadow="md" transition="all 0.2s" _hover={{ boxShadow: "lg" }} />
          ))}
      </Grid>
    </Center>
  ); // example
};

export default Index;
