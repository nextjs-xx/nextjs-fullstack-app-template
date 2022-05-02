import { Avatar } from '@nextui-org/react';
export interface IAvatar {
  avatarImg: string;
}

const AvatarUI: React.FC<IAvatar> = ({ avatarImg }) => {
  return <Avatar squared src={avatarImg} />;
};

export default AvatarUI;
