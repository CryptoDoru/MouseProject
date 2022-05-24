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
                Jerri - Project Manager and Developer
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
                src="/assets/pfp-05.png"
                alt="mouse"
                width={400}
                height={400}
              />
              <Typography variant="body1" className="description">
                CJ - Marketing mouse
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
                TECHIES - Marketing mouse
              </Typography>
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
                src="/assets/pfp-03.png"
                alt="mouse"
                width={400}
                height={400}
              />
              <Typography variant="body1" className="description">
                PHILIPPO - Frontend mouse
              </Typography>
            </Grid>
          </Grid>
          {/* 3rd row */}
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            spacing={3}
            item
            md={10}
            lg={10}
            sm={12}
            xs={12}
          >
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Image
                src="/assets/pfp-02.png"
                alt="mouse"
                width={400}
                height={400}
              />
            </Grid>
          </Grid>

          {/* 3rd row */}
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            item
            md={10}
            lg={10}
            sm={12}
            xs={12}
            style={{padding: 0}}
            className="description_wrapper"
          >
            <Typography
              variant="h6"
              className="description_title"
            >
              MOUSE ARTACK
            </Typography>
            <Typography variant="body1" className="description">
              With a background in Fine arts and Design, our artist is mainly a
              passionette girl with restless creative mind & passion for great
              art. She has worked on numerous cool things like Branding/Visual
              Identity, Digital art, Editorial/Publishing, Advertising &
              Marketing Design and many more. In her free time she paints,
              driven by the urge to reflect her emotions. Her artistic
              inspiration is her everyday life, music, nature, animals and
              people. Art is her greatest enjoyment and through her creations
              she frees herself and lives in her own reality.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Cheesiness;
