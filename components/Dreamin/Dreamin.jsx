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

            {/* step 1 here */}

            {/* step 2 here */}
            <div className="roadMap_step">
              <Typography variant="h5" className="roadMap_title">
                ROADMAP COMING SOON IN THE DISCORD
              </Typography>
            </div>
            <div className="roadMap_step">
              <Typography variant="h5" className="roadMap_title">
            
              </Typography>
            </div>
            <a
              href="https://discord.gg/cr97f94Ggs"
              target="_blank"
              alt="discord"
              rel="noreferrer"
            >
              <Image
                src="/assets/discode.svg"
                alt="discord"
                width={64}
                height={58}
              />
            </a>
            {/* step 3 here */}

            {/* step 4 here */}


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
