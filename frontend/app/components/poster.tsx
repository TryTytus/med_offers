import { Button, CardActions, CardContent, Typography, Card } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import type { Poster as PosterModel } from "~/api/generated";

const CustomCard = styled(Card)({
  borderRadius: 0,
})

type PosterProps = Pick<PosterModel, "title" | "description">;

function Poster({ title, description }: PosterProps) {
    return <CustomCard variant="outlined">
        <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Katowice
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Kategoria</Typography>
        <Typography variant="body2">
          {description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>

    </CustomCard>
}

export default Poster;
