import { useQuery } from "@tanstack/react-query";
import { type Route } from "./+types/poster";
import { postersApi } from "~/api/client";
import { styled } from "@mui/system";
import { Card } from "@mui/material";

export function loader({ params }: Route.LoaderArgs) {
    const id = Number(params.posterId);

    if (!Number.isInteger(id)) {
        throw new Response("Invalid poster ID", { status: 400 });
    }

    return postersApi.getPoster({
        id
    })
}

const SGrid = styled('div')({
    display: 'grid',
    gridTemplateAreas: '"image-card title-card"',
    gridTemplateColumns: '6fr 3fr',
    gap: 16,
    margin: '50px 6vw 0 6vw'
});

const SImageCard = styled(Card)({
    gridArea: 'image-card',
    backgroundColor: 'white',
    height: 500,
    boxShadow: 'none',
    borderRadius: 0,
})

const STitleCard = styled(Card)({
    gridArea: 'title-card',
    backgroundColor: 'white',
    height: 500,
    boxShadow: 'none',
    borderRadius: 0,
})

export default function Poster({loaderData}: Route.ComponentProps) {
    return <>
        <SGrid>
  
            <SImageCard>

            {loaderData.id}
            {loaderData.description}
            {loaderData.price}
            {loaderData.title}
            </SImageCard>

            <STitleCard/>
        </SGrid>
    </>
}
