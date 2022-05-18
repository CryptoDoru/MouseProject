import React from 'react';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import CustomButton from '../Shares/Button';

const Footer = () => {
  return (<>
    <div className="footer">
      <Container>
        <div className="footer_wrapper">
          <div className="footer_text">
            <Typography variant="h6" color="initial" className="footer_title">
              STILL HAVE NO IDEA
            </Typography>
            <Typography variant="h6" color="initial" className="footer_title"><span className="inverted-text">
              WHAT WE ARE TALKING ABOUT?</span>
            </Typography>
            <Typography
              variant="h6"
              color="initial"
              className="footer_descrition"
            >
              FEEL FREE TO CONTACT US THROUGH CHAT IN DISCORD OR TWITTER. JOIN
              US IN THE MOUSE TRAP HOUSE, WE ARE HELLA COOL AND DOWN TO EARTH
              PEOPLE EAGER TO ANSWER YOUR QUESTIONS.
            </Typography>
          </div>
          <a href="https://discord.com/invite/jxrEqNQ3uc" target="_blank"  alt="discord" rel="noreferrer">
            <div className="footer_buttom_wrapper">

              <Image
                src="/assets/discode2.svg"
                alt="Picture of the author"
                width={100}
                height={100}
                />


            </div>
          </a>
        </div>
        <div className="footer-image" >
          <div className="scroll-to-top" onClick={() => window.scrollTo(0, 0)} />

        </div>
      </Container>
    </div>
  </>
  );
};

export default Footer;
