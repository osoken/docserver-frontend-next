import { TextField } from "@mui/material";

export default function PasswordInput() {
  
  return <TextField
    id="outlined-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
  />

}