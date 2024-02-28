import React from 'react';
import { Card, CardContent, Typography, Avatar, CardMedia } from '@mui/material';

type ProfileCardProps = {
  firstName: string;
  profession: string;
  imageUrl: string;
  color: string;
  textColor: string;
};

const TeamMemberCard: React.FC<ProfileCardProps> = ({ firstName, profession, imageUrl, color, textColor }) => {
  return (
    <Card sx={{ maxWidth: 300, backgroundColor: color }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{marginTop: 10 , color:`${textColor}`}}>
          {firstName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color: `${textColor}`, textDecoration: "underline"}}>
          {profession}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="400"
        image={imageUrl}
        alt={`${firstName}`}
        sx={{ marginTop: 12 }}
      />
    </Card>
  );
};

export default TeamMemberCard;
