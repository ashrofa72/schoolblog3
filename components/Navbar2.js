import * as React from 'react';
//import { Head } from 'next/document';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SchoolIcon from '@mui/icons-material/School';
import { useRouter } from 'next/router';
//import { useLogout } from '../hooks/useLogout';
import { auth } from '../config/firebase';
import { useUserAuth } from '../context/UserAuthContext';

const pages = [
  'home',
  'profileregister',
  'registerdata',
  'about',
  'contact',
  'adspage',
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();
  //const { logout } = useLogout();
  const { user, logOut } = useUserAuth();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);

    if (e.currentTarget.value == 0) {
      router.push('/profile');
    }
    if (e.currentTarget.value == 1) {
      router.push('/account');
    }
  };

  const handlePages = (e) => {
    const pageindex0 = pages.indexOf('Home');
    const pageindex1 = pages.indexOf('FirstCodes');
    const pageindex2 = pages.indexOf('SecondCodes');
    const pageindex3 = pages.indexOf('Signin');
    const pageindex = [0, 1, 2, 3, 4];
  };

  return (
    <>
      <AppBar position="static" dir="rtl">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            {/*--------------------------------------------------------------------------------------*/}
            {/* Minmized header menu right side*/}
            <Typography
              variant="h8"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Almarai',
                fontWeight: 'bold',
                fontSize: '15px',
                //letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              مدرسة فاطمةالزهراء الثانوية للبنات
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {user && (
                  <MenuItem key={0} onClick={(e) => router.push('/')}>
                    <Typography
                      textAlign="center"
                      fontWeight="bold"
                      fontFamily="Almarai"
                    >
                      الرئيسة
                    </Typography>
                  </MenuItem>
                )}

                {user && (
                  <MenuItem key={4} onClick={(e) => router.push('/about')}>
                    <Typography
                      textAlign="center"
                      fontWeight="bold"
                      fontFamily="Almarai"
                    >
                      حول
                    </Typography>
                  </MenuItem>
                )}

                {user && (
                  <MenuItem key={4} onClick={(e) => router.push('/blogform')}>
                    <Typography
                      textAlign="center"
                      fontWeight="bold"
                      fontFamily="Almarai"
                    >
                      انشاء
                    </Typography>
                  </MenuItem>
                )}
                {user && (
                  <MenuItem key={1} onClick={(e) => router.push('/blogs')}>
                    <Typography
                      textAlign="center"
                      fontWeight="bold"
                      fontFamily="Almarai"
                    >
                      الأخبار
                    </Typography>
                  </MenuItem>
                )}

                {user && (
                  <MenuItem key={4} onClick={(e) => router.push('/contact')}>
                    <Typography
                      textAlign="center"
                      fontWeight="bold"
                      fontFamily="Almarai"
                    >
                      تواصل
                    </Typography>
                  </MenuItem>
                )}
              </Menu>
            </Box>
            {/*--------------------------------------------------------------------------------------*/}
            {/* Main header full size */}
            <SchoolIcon sx={{ display: { xs: 'none', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Almarai',
                fontSize: '15px',
                fontWeight: 'bold',
                //letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              مدرسة فاطمةالزهراء الثانوية للبنات
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {user && (
                <Button
                  sx={{
                    my: 2,
                    pr: 8,
                    color: 'white',
                    display: 'block',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Almarai',
                  }}
                  onClick={(e) => router.push('/')}
                >
                  الرئيسة
                </Button>
              )}

              {user && (
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Almarai',
                  }}
                  onClick={(e) => router.push('/blogs')}
                >
                  الأخبار
                </Button>
              )}
              {user && (
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Almarai',
                  }}
                  onClick={(e) => router.push('/savedata')}
                >
                  حفظ
                </Button>
              )}
              {user && (
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Almarai',
                  }}
                  onClick={(e) => router.push('/blogform')}
                >
                  انشاء
                </Button>
              )}

              {user && (
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Almarai',
                  }}
                  onClick={(e) => router.push('/about')}
                >
                  حول
                </Button>
              )}

              {user && (
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Almarai',
                  }}
                  onClick={(e) => router.push('/contact')}
                >
                  تواصل
                </Button>
              )}
            </Box>
            {/* Left menu user Avatar 
            -----------------------------------------------------------------------------------*/}
            <Box sx={{ flexGrow: 0 }}>
              <span
                style={{
                  marginLeft: '5px',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                {/*{!user ? 'No user' : auth.currentUser.displayName} */}
              </span>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column-reverse',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {user ? (
                      <>
                        <span
                          style={{
                            direction: 'ltr',
                            marginLeft: '5px',
                            color: 'white',
                            fontWeight: 'bold',
                          }}
                        >
                          {user ? (
                            <span
                              style={{ fontSize: '13px', display: 'block' }}
                            >
                              {' '}
                              {user.email}
                            </span>
                          ) : (
                            <span>No user</span>
                          )}
                          {user ? (
                            <span
                              style={{
                                fontSize: '13px',
                                display: 'block',
                              }}
                            >
                              {' '}
                              {user.phoneNumber}
                            </span>
                          ) : (
                            <span>No user</span>
                          )}
                        </span>
                        <Avatar alt="User Logged" src="Images/Ashraf.jpg" />
                      </>
                    ) : (
                      <Avatar alt="User Signed out" src="Images/Navuser.jpg" />
                    )}
                  </div>
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {user && (
                  <MenuItem key={0}>
                    <Typography
                      textAlign="center"
                      fontWeight="bold"
                      fontFamily="Almarai"
                      onClick={(e) => router.push('/profile')}
                    >
                      الملف الشخصي
                    </Typography>
                  </MenuItem>
                )}
                {user && (
                  <MenuItem key={1}>
                    <Typography
                      textAlign="center"
                      fontWeight="bold"
                      fontFamily="Almarai"
                      onClick={(e) => router.push('/account')}
                    >
                      الحساب
                    </Typography>
                  </MenuItem>
                )}
                {user && (
                  <MenuItem key={2}>
                    <Typography
                      textAlign="center"
                      fontWeight="bold"
                      fontFamily="Almarai"
                      onClick={(e) => router.push('/dashboard')}
                    >
                      لوحة التحكم
                    </Typography>
                  </MenuItem>
                )}
                {!user && (
                  <MenuItem key={3}>
                    <Typography
                      textAlign="center"
                      fontWeight="bold"
                      fontSize="20px"
                      fontFamily="Almarai"
                      onClick={(e) => router.push('/login')}
                    >
                      دخول
                    </Typography>
                  </MenuItem>
                )}
                {!user && (
                  <MenuItem key={4}>
                    <Typography
                      textAlign="center"
                      fontSize="20px"
                      fontWeight="bold"
                      fontFamily="Almarai"
                      onClick={(e) => router.push('/signup')}
                    >
                      تسجيل
                    </Typography>
                  </MenuItem>
                )}
                {user && (
                  <MenuItem key={5}>
                    <Typography
                      textAlign="center"
                      fontWeight="bold"
                      fontFamily="Almarai"
                      onClick={logOut}
                    >
                      خروج
                    </Typography>
                  </MenuItem>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
