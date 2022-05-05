import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  background: 'transparent',
  boxShadow: 'none',
}));

const HeroArea = ({
  faqSection,
  crewSection,
  roadMapSection,
  aboutSection,
}) => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (test) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(test);
  };

  const onClickMenuItem = (goTo) => {
    goTo();
    setOpen(false);
  };
  return (
    <div className="heroArea_wrapper">
      {/* header area here */}
      <div className="heroArea_header_wrapper">
        <div className="hero-header">
          <div className="menu_wrapper">
            <div className="menu_logo">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={350}
                height={105}
              />
            </div>
            <div className="mobile-menu">
              <IconButton
                aria-label="menu"
                onClick={toggleDrawer(true)}
                size="large"
                className="mobile-menu-open"
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                position="fixed"
                ModalProps={{ disableRestoreFocus: true }}
                className="menu-drawer"
              >
                <div className="menu-drawer-inside">
                  <ul className="menu_wrapper_list">
                    <li
                      className="menu_wrapper_item"
                      onClick={() => onClickMenuItem(aboutSection)}
                    >
                      ABOUT
                    </li>
                    <li
                      className="menu_wrapper_item"
                      onClick={() => onClickMenuItem(roadMapSection)}
                    >
                      ROADMAP
                    </li>
                    <li
                      className="menu_wrapper_item"
                      onClick={() => onClickMenuItem(crewSection)}
                    >
                      CREW
                    </li>
                    <li
                      className="menu_wrapper_item"
                      onClick={() => onClickMenuItem(faqSection)}
                    >
                      FAQ
                    </li>
                  </ul>
                  <div
                    className="drawer_socials"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Item
                      style={{
                        margin: '0',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <a
                        href="https://discord.com/invite/jxrEqNQ3uc"
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
                    </Item>{' '}
                    <Image
                      src="/assets/line.svg"
                      alt="separator"
                      width={65}
                      height={65}
                    />
                    <Item
                      style={{
                        margin: '0',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <a
                        href="https://twitter.com/MTHnft"
                        target="_blank"
                        alt="twitter"
                        rel="noreferrer"
                      >
                        <Image
                          src="/assets/twitter.svg"
                          alt="twitter"
                          width={64}
                          height={58}
                        />
                      </a>
                    </Item>
                  </div>
                </div>
              </Drawer>
            </div>
            <ul className="menu_wrapper_list">
              <li className="menu_wrapper_item" onClick={aboutSection}>
                ABOUT
              </li>
              <li className="menu_wrapper_item" onClick={roadMapSection}>
                ROADMAP
              </li>
              <li className="menu_wrapper_item" onClick={crewSection}>
                CREW
              </li>
              <li className="menu_wrapper_item" onClick={faqSection}>
                FAQ
              </li>
            </ul>
            <div className="menu_socials">
              <Item
                style={{ margin: '0', display: 'flex', alignItems: 'center' }}
              >
                <a
                  href="https://discord.com/invite/jxrEqNQ3uc"
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
              </Item>{' '}
              <Image
                src="/assets/line.svg"
                alt="separator"
                width={65}
                height={65}
              />
              <Item
                style={{ margin: '0', display: 'flex', alignItems: 'center' }}
              >
                <a
                  href="https://twitter.com/MTHnft"
                  target="_blank"
                  alt="twitter"
                  rel="noreferrer"
                >
                  <Image
                    src="/assets/twitter.svg"
                    alt="twitter"
                    width={64}
                    height={58}
                  />
                </a>
              </Item>
            </div>{' '}
          </div>
        </div>
      </div>
      {/* hero area here */}
      <div className="heroarea_wrapper">
        <Container>
          <Grid container spacing={1} className="heroarea_content">
            <Grid item md={7} lg={7} sm={8} xs={12} className="heroarea_item">
              <Typography variant="h6" color="secondary" className="hero_title">
                HEY THERE HOMIE!
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                className="hero_subtitle"
              >
                EXCUSE THE MESS, OUR CHEESY GUYS REALLY
                <br />
                LIKE MELTED CHEESE.
              </Typography>
              <Typography variant="body1" color="secondary">
                After years of confinement in their dope house, the mice are
                ready to bust out. We don&apos;t know how long they&apos;ve been
                imprisoned, <br />
                but they finally chewed their way out on to the streets of
                Solana.
              </Typography>
            </Grid>
            <div className="heroarea_main_image"></div>
            <div className="heroarea_single_line_image"></div>
          </Grid>
        </Container>
        <div className="heroarea_main_subimage"></div>
      </div>
    </div>
  );
};

export default HeroArea;
