import { Avatar, Grid } from '@nextui-org/react';

export interface IAvatarGroup {
  pictureUsers: any[];
}

const AvatarUIGroup: React.FC<IAvatarGroup> = ({ pictureUsers }) => {
  return (
    <Grid.Container gap={1}>
      <Grid xs={12}>
        <Avatar.Group count={12}>
          {pictureUsers.map((url, index) => (
            <Avatar
              key={index}
              size="lg"
              pointer
              src={url}
              bordered
              color="gradient"
              stacked
            />
          ))}
        </Avatar.Group>
      </Grid>
    </Grid.Container>
  );
};

export default AvatarUIGroup;
