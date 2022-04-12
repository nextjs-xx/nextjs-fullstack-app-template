import styles from './PrimaryLayout.module.css';
export interface IPrimaryLayout {
  sampleTextProp: string;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ sampleTextProp }) => {
  return <div className={styles.component}>{sampleTextProp}</div>;
};

export default PrimaryLayout;
