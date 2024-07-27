import React, { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  ListItem,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");
  const [activeOperation, setActiveOperation] = useState(""); 

  const handleChange = (event, field) => {
    const value = event.target.value;
    if (field === "num1") {
      setNum1(value);
    } else if (field === "num2") {
      setNum2(value);
    }
  };

  const handleOperation = (op) => {
    setOperation(op);
    setActiveOperation(op); // Update active operation
  };

  const calculateResult = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      const calculatedResult = calculate(parsedNum1, parsedNum2, operation);
      setResult(calculatedResult);
    } else {
      setResult("Invalid input");
    }
  };

  const calculate = (num1, num2, operation) => {
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      default:
        return "Error: Invalid operation";
    }
  };

  return (
    <>
      <form
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          boxShadow: "20px 20px 0 black",
          padding: "10px",
          background: "white",
          margin:"10px",
        }}
        id="form"
      >
        <Typography>Simple Calculator</Typography>
        <Box>
          <TextField
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => handleChange(e, "num1")}
            sx={{ fontSize: "10px", mt: 2 , width:"100%"}}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
        </Box>
        <Box>
          <ListItem id="wrapper">
            <Button id="operations"
              onClick={() => handleOperation("+")}
              sx={{ backgroundColor: activeOperation == "+" ? "orangered" : "orange" }} 
            >
              +
            </Button>
            <Button id="operations"
              onClick={() => handleOperation("-")}
              sx={{ backgroundColor: activeOperation == "-" ? "orangered" : "orange" }}
            >
              -
            </Button>
            <Button id="operations"
              onClick={() => handleOperation("*")}
              sx={{ backgroundColor: activeOperation == "*" ? "orangered" : "orange" }}
            >
              *
            </Button>
            <Button id="operations"
              onClick={() => handleOperation("/")}
              sx={{ backgroundColor: activeOperation == "/" ? "orangered" : "orange" }}
            >
              /
            </Button>
          </ListItem>
        </Box>
        <Box>
          <TextField
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => handleChange(e, "num2")}
            sx={{ fontSize: "10px", mt: 2 , width:"100%"}}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
        </Box>
        <Button
          sx={{
            width: "100%",
            background: "gray",
            color: "white",
            mt: 2,
            fontWeight: "bold",
          }}
          id="btn"
          onClick={calculateResult}
        >
          =
        </Button>
        <TextField
          placeholder="Result"
          value={result}
          sx={{ fontSize: "10px", mt: 2 , width:"100%"}}
          InputProps={{
            readOnly: true,
          }}
        />
      </form>
    </>
  );
}

export default App;
