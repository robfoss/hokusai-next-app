import React from 'react';
import { getJsonData } from '../utils/tool';
import Carousel from '../components/ui/Carousel';
import Articles from '../components/home/Articles';

const Home = ({ data }) => {
  return (
    <>
      <Carousel data={data.carrousel} />
      <Articles data={data.articles} />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getJsonData();

  return {
    props: {
      data: data,
    },
  };
};

export default Home;
