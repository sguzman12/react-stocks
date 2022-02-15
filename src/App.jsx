import "./App.css";
import { Box } from "@mui/material";

// Components
import Table from "./components/table/Table";
import Pokemon from "./components/example/ExamplePokemon";

function App() {
  return (
    <Box sx={{ height: "auto", margin: 0, padding: 0, textAlign: "center" }}>
      <Table />
      {/* <Pokemon /> */}
    </Box>
  );
}
export default App;
