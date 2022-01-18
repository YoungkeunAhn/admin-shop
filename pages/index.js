import { Box, Button } from "@material-ui/core";
import MainLayout from "@layouts/main-layout/MainLayout";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);

  return (
    <Box>
      <MainLayout />
    </Box>
  );
}
