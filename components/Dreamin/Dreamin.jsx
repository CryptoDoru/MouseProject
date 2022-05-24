import { Container, Typography, Grid, Divider } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const Dreamin = () => {
  return (
    <div className="dreamin_wrapper">
      <Container>
        <Typography variant="h2" className="dreamin_main_title">
          DREAMIN BIG
        </Typography>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          style={{ margin: 'auto', width: '80%' }}
        >
          <Grid item xs={12} sm={10} md={10} lg={10} className="roadMap">
            <Image
              src="/assets/logo-square.svg"
              alt="logo"
              width={210}
              height={173}
            />
            <Divider sx={{ mb: 4 }} />
            <Image
              src="/assets/roadMap_2.svg"
              alt="roadmap"
              width={60}
              height={120}
            />
          /*  <div className="roadMap_step">
              <Typography variant="body1" className="roadMap_subtitle intro-text">
                Mouse Trap House has come a long way to be here. We have put our
                hearts and minds into this and worked hard to make this
                collection squeakin awesome. It was not an easy journey. To
                whomever is reading this and wants to succeed - dont give up, we
                support you!
              </Typography>
            </div>
            {/* step 1 here */}
            <div className="roadMap_step">
              <Typography variant="h5" className="roadMap_title">
              </Typography>
              <Typography variant="body1" className="roadMap_subtitle">
              </Typography>
            </div>
            {/* step 2 here */}
            <div className="roadMap_step">
              <Typography variant="h5" className="roadMap_title">
                ROADMAP COMING SOON IN THE DISCORD
              </Typography>
              <div className="button_part">
                <a href="https://discord.gg/cr97f94Ggs" target="_blank"  alt="discord" rel="noreferrer">
                  <CustomButton btntext="Join Our Discord" />
                </a>
              </div>
              <Typography variant="body1" className="roadMap_subtitle">
              </Typography>
            </div>
            {/* step 3 here */}
            <div className="roadMap_step">
              <Typography variant="h5" className="roadMap_title">
              </Typography>
              <Typography variant="body1" className="roadMap_subtitle">
              </Typography>
            </div>
            {/* step 4 here */}
            <div className="roadMap_step">
              <Typography variant="h5" className="roadMap_title">
              </Typography>
              <Typography variant="body1" className="roadMap_subtitle">
                - Expanding our colony to other blockchains
              </Typography>
            </div>

            {/* <div className="subtitle_roadMap">
              <Typography variant="h5" className="subtitle_content">
                WE WILL NOT TELL YOU WE WILL SHOW YOU
              </Typography>
            </div> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dreamin;
