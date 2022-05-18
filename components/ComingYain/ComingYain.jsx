import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CustomButton from '../Shares/Button';

const ComingYain = () => {

  return (
    <div className="ComingYain_wrapper">
      <Container>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          className="conmingYain_content"
        >
          <Grid container item xs={12} sm={8} md={7} lg={7} xl={7}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography
                variant="h5"
                color="primary"
                className="conmingYain_title"
              >
                WELCOME TO THE TRAP HOUSE
              </Typography>
            </Grid>
            {/* <Grid
              container
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="conmingYain_time_wrapper"
            >

              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                className="conmingYain_time_box"
              >
                <Typography
                  variant="h6"
                  color="primary"
                  className="conmingYain_title"
                >
                  20
                </Typography>
                <Image
                  src="/assets/box1.svg"
                  alt="Picture of the author"
                  className="conmingYain_time_image"
                  width={180}
                  height={80}
                />
                <Typography
                  variant="h6"
                  color="primary"
                  className="conmingYain_subtitle"
                >
                  day
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                className="conmingYain_time_box"
              >
                <Typography
                  variant="h6"
                  color="primary"
                  className="conmingYain_title"
                >
                  10
                </Typography>
                <Image
                  src="/assets/box2.png"
                  alt="Picture of the author"
                  className="conmingYain_time_image"
                  width={180}
                  height={80}
                />
                <Typography
                  variant="h6"
                  color="primary"
                  className="conmingYain_subtitle"
                >
                  hours
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                className="conmingYain_time_box"
              >
                <Typography
                  variant="h6"
                  color="primary"
                  className="conmingYain_title"
                >
                  30
                </Typography>
                <Image
                  src="/assets/box3.svg"
                  alt="Picture of the author"
                  className="conmingYain_time_image"
                  width={180}
                  height={80}
                />
                <Typography
                  variant="h6"
                  color="primary"
                  className="conmingYain_subtitle"
                >
                  minutes
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                className="conmingYain_time_box"
              >
                <Typography
                  variant="h6"
                  color="primary"
                  className="conmingYain_title"
                >
                  06
                </Typography>
                <Image
                  src="/assets/box4.svg"
                  alt="Picture of the author"
                  className="conmingYain_time_image"
                  width={180}
                  height={80}
                />
                <Typography
                  variant="h6"
                  color="primary"
                  className="conmingYain_subtitle"
                >
                  seconds
                </Typography>
              </Grid>
            </Grid>*/}
          </Grid>
          <a href="https://discord.com/invite/jxrEqNQ3uc" target="_blank"  alt="discord" rel="noreferrer">
          <Grid
            container
            item
            xs={12}
            sm={8}
            md={10}
            lg={10}
            xl={10}
            className="description_part"
          >
            <Typography
              variant="subtitle1"
              color="primary"
              className="description_title"
            >
              Join early and start hyping!

            </Typography>
          </Grid>
          </a>
          {/* button here */}
          <div className="button_part">
            <a href="https://discord.com/invite/jxrEqNQ3uc" target="_blank"  alt="discord" rel="noreferrer">
              <CustomButton btntext="Join Our Discord!" />
            </a>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default ComingYain;
