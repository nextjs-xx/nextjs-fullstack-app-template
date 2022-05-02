import ButtonTemplate from '../components/button/ButtonTemplate';
import { mockButtonTemplateProps } from '../components/button/ButtonTemplate.mocks';
import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>{mockCatCardProps.base.title}</h1>
      <CatCard {...mockCatCardProps.base} />
      <ButtonTemplate {...mockButtonTemplateProps.base} />
    </section>
  );
};

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};

export default Home;
