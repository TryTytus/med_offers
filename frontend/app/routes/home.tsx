import { CircularProgress, Pagination } from "@mui/material";
import type { Route } from "./+types/home";
import { styled } from '@mui/material/styles';
import { useQuery } from "@tanstack/react-query";
import { postersApi } from "~/api/client";
import Poster from "~/components/poster";
import { useState } from "react";
import { Link } from "react-router";



const CustomMain = styled('main')({
  width: '70%',
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

  let [page, setPage] = useState(0);

  const {data: posters, refetch, isLoading} = useQuery({
    queryKey: ['posters', page],
    queryFn: () => postersApi.getPosters({ page }),
  })

  if (isLoading) {
    return <CustomMain style={{display: 'grid', justifyContent: 'center'}}>
      <CircularProgress size="3rem" aria-label="Loading…" />
    </CustomMain>
  }

  return <CustomMain>
      {posters?.map((poster, index) => (
        <Link key={poster.id} to={`/poster/${poster.id}`} style={{ textDecoration: 'none' }}>
        <Poster
          title={poster.title}
          short_description={poster.short_description}
        />
        </Link>
      ))}

      <PaginationParentDiv>
        <Pagination onChange={(_, newPage) => setPage(newPage)} page={page}  count={10} variant="outlined" size="large"  />
      </PaginationParentDiv>
  </CustomMain>
}
