import { useQuery } from "@tanstack/react-query";
import { type Route } from "./+types/poster";
import { postersApi } from "~/api/client";
import { styled } from "@mui/system";
import { Button, Card, Typography } from "@mui/material";

export function loader({ params }: Route.LoaderArgs) {
  const id = Number(params.posterId);

  if (!Number.isInteger(id)) {
    throw new Response("Invalid poster ID", { status: 400 });
  }

  return postersApi.getPoster({
    id,
  });
}

const SGrid = styled("div")({
  display: "grid",
  gridTemplateAreas: '"image-card title-card"',
  gridTemplateColumns: "6fr 3fr",
  gap: 16,
  margin: "50px 6vw 0 6vw",
});

const SImageCard = styled(Card)({
  gridArea: "image-card",
  backgroundColor: "white",
  height: 500,
  boxShadow: "none",
  borderRadius: 0,
});

const STitleCard = styled(Card)({
  gridArea: "title-card",
  backgroundColor: "white",
  padding: "0 30px",
  height: 350,
  boxShadow: "none",
  borderRadius: 0,
});

const STextBox = styled("div")({
    display: 'grid',
    alignItems: 'start',
    padding: '30px 20px',
    gap: 15
});

const SButton = styled(Button)({
    borderRadius: 0
})

export default function Poster({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <SGrid>
        <SImageCard></SImageCard>

        <STitleCard>
          <STextBox>
            <Typography fontWeight="400" variant="h6" gutterBottom>
              {loaderData.title ?? ""}
            </Typography>
            <Typography
              fontWeight=""
              color="#7f7f7f"
              variant="body2"
              gutterBottom
            >
              {loaderData.description ?? ""}
            </Typography>
            <Typography variant="h5" fontWeight="500">
                {loaderData.price},00 zł
            </Typography>
            <SButton variant="contained">Buy</SButton>
            <SButton variant="outlined">Ask</SButton>
          </STextBox>
        </STitleCard>
      </SGrid>
    </>
  );
}
