import { Pagination } from "@mui/material";
import type { Route } from "./+types/home";
import { styled } from '@mui/material/styles';
import { useQuery } from "@tanstack/react-query";
import { postersApi } from "~/api/client";
import Poster from "~/components/poster";


const CustomMain = styled('main')({
  width: '60%',
  margin: '0px auto',
})

const PaginationParentDiv = styled('nav')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 50
})

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  


  const posters = useQuery({
    queryKey: ['posters'],
    queryFn: () => postersApi.getPosters(),
  })

  return <CustomMain>
      {posters.data?.map((poster, index) => (
        <Poster
          key={poster.id}
          title={poster.title}
          description={poster.description}
        />
      ))}

      <PaginationParentDiv>
        <Pagination count={10} variant="outlined" size="large"  />
      </PaginationParentDiv>
  </CustomMain>
}
