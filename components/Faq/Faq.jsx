import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Faq = () => {
  return (
    <Container>
      <div className="faq_wrapper">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Typography variant="subtitle1" className="faq_title" color="initial">
            WHAT THE <span className="inverted-text">FAQ?</span>
          </Typography>
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
          >
            <div className="faq_content_wrapper">
              <Typography
                variant="subtitle1"
                className="faq_title"
                color="initial"
              >
                Wen will ya drop?

              </Typography>
              <Typography
                variant="subtitle1"
                className="faq_description"
                color="initial"
              >
                Hood Rats will join our frens on the Solana Blockchain in Quarter 3 of 2022. Our mint date will be announced in discord.
              </Typography>
            </div>
            <div className="faq_content_wrapper">
              <Typography
                variant="subtitle1"
                className="faq_title"
                color="initial"
              >
                What is the price of each Hood Rat?
              </Typography>
              <Typography
                variant="subtitle1"
                className="faq_description"
                color="initial"
              >
                The price to mint one unique Hood Rat will be announced in our discord close to mint time.
              </Typography>
            </div>
            <div className="faq_content_wrapper">
              <Typography
                variant="subtitle1"
                className="faq_title"
                color="initial"
              >
                How did you create 5,555 Hood Rats?
              </Typography>
              <Typography
                variant="subtitle1"
                className="faq_description"
                color="initial"
              >
                Each trait was handdrawn with passion by our artist Artack. Our homies
                have been generated with an algorithm created by our dev to
                create the most unique 5,555 Hood Rats.
              </Typography>
            </div>

            <div className="faq_content_bottom">
              <Typography
                variant="subtitle1"
                className="faq_content_bottom_description"
              >
                Please remain vigilant of impersonators and fake accounts
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Faq;
