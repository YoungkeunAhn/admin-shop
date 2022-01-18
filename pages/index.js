import { Box, Button } from "@material-ui/core";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);

  return (
    <Box>
      Hello Next!
      <Button
        variant={state ? "contained" : "outlined"}
        color="primary"
        onClick={() => setState(!state)}
      >
        안뇽
      </Button>
      {state ? "true" : "false"}
    </Box>
  );
}
