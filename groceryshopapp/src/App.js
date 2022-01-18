
import './App.css';
import { Container, Typography } from '@mui/material';
import Order from "./Component/Order/Index.js";


function App() {
  return (
   <Container maxWidth="md">
     <Typography 
     gutterBottom
     variant="h2"
     align="center">
       GroceryShop
     </Typography>
 <Order />
   </Container>
  );
}

export default App;
