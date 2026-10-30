import type { Route } from "./+types/home";
import { styled } from '@mui/material/styles';
import { useQuery } from "@tanstack/react-query";
import Poster from "~/components/poster";


useQuery({
  queryKey: ['posters'],
  queryFn: async () => {
    await fetch('http://localhost:8000/')
  }
})

const CustomMain = styled('main')({
  width: '60%',
  margin: '0px auto',
})

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <CustomMain>
      <Poster />
  </CustomMain>
}
