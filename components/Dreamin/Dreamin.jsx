import { Container, Typography, Grid, Divider } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import CustomButton from '../Shares/Button';

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
              <div className="button_part">
                <a href="https://discord.gg/cr97f94Ggs" target="_blank"  alt="discord" rel="noreferrer">
                  <CustomButton btntext="Join Our Discord" />
                </a>
              </div>
            <div className="roadMap_step">
              <Typography variant="body1" className="roadMap_subtitle intro-text">
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
