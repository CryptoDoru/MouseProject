import { Container, Typography, Grid } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const Cheesiness = () => {
  return (
    <Container>
      <div className="cheesiness_wrapper">
        <Typography variant="h6" color="primary" className="cheesiness_title">
          THE CREW BEHIND THE CHEESINESS
        </Typography>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          className="crew"
        >
          {/* 1st row */}
          <Grid container spacing={3} item md={10} lg={10} sm={12} xs={12} >
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Image
                src="/assets/Jerri-Transparent2.png"
                alt="mouse"
                width={400}
                height={400}
              />
              <Typography variant="body1" className="description">
                Jerri
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} sm={12} xs={12} className="hidden-mobile">
              <Image
                src="/assets/img4.svg"
                alt="divider"
                width={400}
                height={400}
              />
            </Grid>
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Image
                src="/assets/transparent2.png"
                alt="mouse"
                width={400}
                height={400}
              />
              <Typography variant="body1" className="description">
                Lex
              </Typography>
            </Grid>
          </Grid>
          {/* 2nd row */}
          <Grid container spacing={3} item md={10} lg={10} sm={12} xs={12}>
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Image
                src="/assets/pfp-05.png"
                alt="mouse"
                width={400}
                height={400}
              />
              <Typography variant="body1" className="description">
                Tuna
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} sm={12} xs={12} className="hidden-mobile">
              <Image
                src="/assets/img4.svg"
                alt="divider"
                width={400}
                height={400}
              />
            </Grid>
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Image
                src="/assets/pfp-transparent.png"
                alt="mouse"
                width={400}
                height={400}
              />
              <Typography variant="body1" className="description">

              </Typography>
            </Grid>
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Image
                src="/assets/pfp-02.png"
                alt="mouse"
                width={400}
                height={400}
              />
              <Typography variant="body1" className="description">
                Mouse Artack
              </Typography>
            </Grid>
          </Grid>
          {/* 3rd row */}


          {/* 3rd row */}

        </Grid>
      </div>
    </Container>
  );
};

export default Cheesiness;
