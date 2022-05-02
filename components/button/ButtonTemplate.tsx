import { Button } from '@nextui-org/react';
export interface IButtonTemplate {
  sampleTextProp: string;
}

const ButtonTemplate: React.FC<IButtonTemplate> = ({ sampleTextProp }) => {
  return <Button>{sampleTextProp}</Button>;
};

export default ButtonTemplate;
