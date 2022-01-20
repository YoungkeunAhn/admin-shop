import { Box, Button } from "@material-ui/core";
import MainLayout from "@layouts/main/MainLayout";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);

  return (
    <Box>
      <MainLayout />
    </Box>
  );
}
