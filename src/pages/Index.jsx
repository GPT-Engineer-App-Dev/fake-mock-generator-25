// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Grid, GridItem, Center, Text, Button } from "@chakra-ui/react";

const Index = () => {
  const [player, setPlayer] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
  };

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = checkWinner(board);
  const isTie = !winner && board.every((cell) => cell !== null);

  const resetGame = () => {
    setPlayer("X");
    setBoard(Array(9).fill(null));
  };

  return (
    <Center h="100vh" flexDirection="column">
      <Grid templateColumns="repeat(3, 1fr)" gap={2} w="240px" h="240px" bg="gray.100" p={4} borderRadius="md" boxShadow="md">
        {board.map((cell, index) => (
          <GridItem key={index} onClick={() => handleClick(index)} w="80px" h="80px" bg="white" borderRadius="md" display="flex" alignItems="center" justifyContent="center" fontSize="4xl" fontWeight="bold" cursor="pointer" boxShadow="md" transition="all 0.2s" _hover={{ boxShadow: "lg" }}>
            {cell}
          </GridItem>
        ))}
      </Grid>
      {(winner || isTie) && (
        <Text mt={4} fontSize="xl" fontWeight="bold">
          {winner ? `Player ${winner} wins!` : "It's a tie!"}
        </Text>
      )}
      <Button mt={4} onClick={resetGame}>
        Restart Game
      </Button>
    </Center>
  );
};

export default Index;
