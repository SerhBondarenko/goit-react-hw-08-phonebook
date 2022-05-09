import React from 'react';
import mainImg from '../icons/pexels-jess-bailey-designs-788946.jpg'
import s from './HomeView.module.css'

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${mainImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};




const HomeView = () => (
  <div style={styles.container}>
  </div>
);

export default HomeView;


