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
            <div className="roadMap_step">
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
                PHASE 1
              </Typography>
              <Typography variant="body1" className="roadMap_subtitle">
                - Concept<br/> - Cheesy prototype<br/> - Form team, design socials<br/> -
                Artist designs layers<br/> - Discord, twitter, Website launch (sneak
                peak ready)<br/> - Promote socials<br/> - Collabs & Partnerships with
                other projects<br/> - Community contests/giveaways<br/> - Community voting<br/>
                - Release ranking system<br/> - Special 1/1 done for contests, designed by community members
                along with artist <br/><span className="highlight">- SERIES 1 LAUNCH,</span><br/> verified and listed
                immediately<br/> on secondary markets post launch:<br/>Magiceden,
                Solanart, and Digitaleyes
              </Typography>
            </div>
            {/* step 2 here */}
            <div className="roadMap_step">
              <Typography variant="h5" className="roadMap_title">
                PHASE 2
              </Typography>
              <Typography variant="body1" className="roadMap_subtitle">
                - Tokenomics set up with $CHDR on raydium <br/>- Airdrop $CHDR for
                Mouse holders<br/>- We are discussing and exploring the
                possibilities on staking your NFTs to earn passive income <br/> - Sweep
                floor/Burn cheese
              </Typography>
            </div>
            {/* step 3 here */}
            <div className="roadMap_step">
              <Typography variant="h5" className="roadMap_title">
                PHASE 3
              </Typography>
              <Typography variant="body1" className="roadMap_subtitle">
                -DAO implementation <br/> <span className="highlight">-SPECIAL SERIES REVEAL</span>
              </Typography>
            </div>
            {/* step 4 here */}
            <div className="roadMap_step">
              <Typography variant="h5" className="roadMap_title">
                PHASE 4
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
