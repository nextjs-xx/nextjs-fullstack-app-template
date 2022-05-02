import { Avatar } from '@nextui-org/react';
export interface IAvatar {
  nickName: string;
  avatarImg: string;
}

const AvatarUI: React.FC<IAvatar> = ({ avatarImg, nickName }) => {
  if (avatarImg == '') {
    return <Avatar squared text={nickName} />;
  } else {
    return <Avatar squared src={avatarImg} />;
  }
};

export default AvatarUI;
