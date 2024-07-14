import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  const messages = [
    'Achieve Your Fitness Goals with Us!',
    'Join the Golds Gym Community Today',
    'Stay Strong, Stay Healthy',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <Box mt="80px" bgcolor="#FFF3F4" px="40px" pt="24px" pb="40px">
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap">
        <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
      </Stack>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' }, fontWeight: 'bold' }} mt="20px" textAlign="center">
        Empowering Fitness, One Workout at a Time.
      </Typography>
      <Typography variant="h6" sx={{ fontSize: { lg: '20px', xs: '16px' }, fontWeight: 'bold' }} mt="10px" textAlign="center">
        Made with ❤️ by Golds Gym
      </Typography>
      <Stack direction="row" justifyContent="space-between" mt="20px" sx={{ width: '100%' }}>
        <Typography variant="body1" sx={{ fontSize: { lg: '18px', xs: '14px' }, fontWeight: 'bold', color: '#333' }} textAlign="left">
          {messages[(currentIndex + 0) % messages.length]}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { lg: '18px', xs: '14px' }, fontWeight: 'bold', color: '#333' }} textAlign="center">
          {messages[(currentIndex + 1) % messages.length]}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { lg: '18px', xs: '14px' }, fontWeight: 'bold', color: '#333' }} textAlign="right">
          {messages[(currentIndex + 2) % messages.length]}
        </Typography>
      </Stack>
      <Typography variant="body2" sx={{ fontSize: { lg: '16px', xs: '12px' }, color: '#333' }} mt="20px" textAlign="center">
        &copy; {new Date().getFullYear()} Golds Gym. All rights reserved.
      </Typography>
    </Box>
  );
};



export default Footer;
