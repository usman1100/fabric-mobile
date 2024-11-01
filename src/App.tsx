import { Container, Typography } from "@mui/material";
import { useState } from "react";

export default function App() {
  const [src, setSrc] = useState<string | undefined>(undefined);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];

    if (!file) return;

    // Create a FileReader to read the file's content
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e?.target?.result) return;

      const imageData = e.target.result;
      setSrc(imageData.toString());
    };
    reader.readAsDataURL(file);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h1">Fabric Mobile</Typography>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
      />
      {src && <img src={src} width={"100%"} />}
    </Container>
  );
}
