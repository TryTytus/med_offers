import { Button, CardActions, CardContent, Typography, Card, Box } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import type { Poster as PosterModel } from "~/api/generated";

const SCard = styled(Card)({
  borderRadius: 0,
  marginBottom: 5,
  display: 'flex',
})

const SBox = styled(Box)({
  width: 200,
  backgroundColor: '#F0F0F0',
  flexShrink: 0,
})

const SCardContent = styled(CardContent)({
  flex: 1,
})


type PosterProps = Pick<PosterModel, "title" | "short_description">;

function Poster({ title, short_description}: PosterProps) {
    return <SCard variant="outlined">
        <SBox />
        <React.Fragment>
      <SCardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Katowice
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Kategoria</Typography>
        <Typography variant="body2">
          {short_description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </SCardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>

    </SCard>
}

export default Poster;
