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
                Mouse trap house will explode on the Solana platform in December.
              </Typography>
            </div>
            <div className="faq_content_wrapper">
              <Typography
                variant="subtitle1"
                className="faq_title"
                color="initial"
              >
                What is the price of each cheesy character?
              </Typography>
              <Typography
                variant="subtitle1"
                className="faq_description"
                color="initial"
              >
                The price to buy (or mint) one unique mouse is TBA SOL at time of
                sale.
              </Typography>
            </div>
            <div className="faq_content_wrapper">
              <Typography
                variant="subtitle1"
                className="faq_title"
                color="initial"
              >
                How did you create 5,555 mouse characters?
              </Typography>
              <Typography
                variant="subtitle1"
                className="faq_description"
                color="initial"
              >
                Each trait was handdrawn with passion by our artist.These traits
                have been randomised with an algorithm created by our dev to
                create the best 5,555 characters from milions of possible
                combinations.
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
