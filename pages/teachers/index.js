import React from 'react';
import styles from '../../styles/students.module.css';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { red } from '@mui/material/colors';

const Teachers = () => {
  return (
    <div className={styles.container}>
      <h1>صفحة خدمات المعلمين</h1>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          direction: 'rtl',
        }}
      >
        <Link href="/teachers/teacherform">
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary=" إدخال بيانات المعلم"
              primaryTypographyProps={{
                sx: {
                  fontFamily: 'Almarai',
                  fontWeight: 'bold',
                  color: 'black',
                },
              }}
              secondaryTypographyProps={{
                sx: {
                  color: 'blue',
                  fontWeight: 'bold',
                  fontFamily: 'Almarai',
                },
              }}
              secondary="بيانات المعلمين "
            />
          </ListItem>
        </Link>
        <Link href="/teachers/teachersdata">
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary="الحصول على بيانات المعلم "
              primaryTypographyProps={{
                sx: {
                  fontFamily: 'Almarai',
                  fontWeight: 'bold',
                  color: 'black',
                },
              }}
              secondaryTypographyProps={{
                sx: {
                  color: 'blue',
                  fontWeight: 'bold',
                  fontFamily: 'Almarai',
                },
              }}
              secondary=" بيانات المعلمين"
            />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Teachers;
