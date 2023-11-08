import React, { useState } from "react";
import { Typography, Box, TextField, Switch } from "@mui/material";

const Description = () => {
  // Teksten nedenfor kan redigeres av kursdeltakerne for å tilpasse beskrivelsen
  const descriptionText =
    "Her på Daily får du tilgang til dine viktigste mål, dagens hit og en daglig dose med konspirasjon.";

  const [value, setValue] = useState("New York Stock Exchange");
  console.log(value);

  const[checked, setChecked] = useState(false);
  console.log(checked);

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        En ny dag, et nytt oppdrag
      </Typography>
      <Typography variant="body1">{descriptionText}</Typography>

      <Switch value={checked} onChange={(e) => setChecked(e.target.checked)} />
      <TextField 
        id="outlined-basic" 
        label="Target:" 
        variant="outlined" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        />
    
    </Box>
  );
};

export default Description;
