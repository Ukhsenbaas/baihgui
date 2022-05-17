import * as React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import './App.css';

export function UseFormControl({ questionType }) {

  let handleChange = (e)=>{
    console.log(e.target.value)
  }

  let questionName = (e)=>{
  console.log(e.target.value)  
  }
  if (questionType === "") return <div></div>;

  if (questionType === "single")
    return (
      <div className="ant-card-body">
        <AdjustRoundedIcon />
        Q1
        <Box className={stykes.question} component="form" noValidate autoComplete="off">
          <FormControl sx={{ width: "25ch" }}>
            <OutlinedInput placeholder="Type your question here..."  onChange={questionName}/>
          </FormControl>
        </Box>
        <Box component="form" noValidate autoComplete="off">
          <FormControl sx={{ width: "25ch" }}>
            <OutlinedInput placeholder="type an answer"  onChange={handleChange}/>
          </FormControl>
        </Box>
      </div>
    );

  if (questionType === "multi")
    return (
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: "25ch" }}>
          <OutlinedInput placeholder="Please enter text" />
        </FormControl>
      </Box>
    );
}

const stykes = {
  question:{
    margin: '10px',
  }
}