import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';

const MouseCollection = () => {
  return (
    <Container>
      <div className="mouse_collection_wrapper">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item md={7} lg={7} sm={7} xs={12}>
            <Typography variant="h6" color="initial" className="mouse_title">
              MOUSE TRAP HOUSE COLLECTION
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              className="mouse_subtitle"
            >
              Mouse Trap House is the coolest collection of 5,555 uniquely
              illustrated mice with their own personality and style. These guys
              are all about stacking cheese on the Solana blockchain.
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              className="mouse_subtitle"
            >
              And they are not like any NFTs out there… They know
              exactly what they want for dinner - <strong>$CHDR</strong>. Are you ready to adopt
              your very own Mouse and start bringing the cheese home?
            </Typography>
          </Grid>
          <Grid
            item
            md={5}
            lg={5}
            sm={5}
            xs={12}
            className="mouse-image-wrapper"
          >
            <div className="mouse-image">
              <Image src="/assets/mth.gif" alt="gif" width={400} height={400} />
            </div>
          </Grid>
          <div className="bottom_image" />
        </Grid>
      </div>
    </Container>
  );
};

export default MouseCollection;
