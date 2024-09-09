import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { grayColor } from "../constants/color";

const Home = () => {
  return (
    <Box bgcolor={grayColor} height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select a friend to chat
      </Typography>
    <Box 
    justifyContent="center"
    alignItems="center" >
      <img
        src="https://www.geeky-gadgets.com/wp-content/uploads/2023/10/Building-an-AI-chat-app-using-large-language-models.webp" // Add your image source here
        alt="Not Found"
        style={{
         minWidth: '100%',  // Ensures the image scales well on different screen sizes
          maxHeight: '60vh', // Prevents the image from getting too large
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow for depth
          marginTop: '-25px'
        }}
      />
      <img src="https://media.licdn.com/dms/image/D5612AQEXBTkWKlWMjw/article-cover_image-shrink_600_2000/0/1709717640233?e=2147483647&v=beta&t=cF0rwJGBdG1165zR_vHkmwufGq69H--BKe-6zk20by0"         style={{
          maxWidth: '100%', 
          minWidth:'100%', // Ensures the image scales well on different screen sizes
          maxHeight: '20vh', // Prevents the image from getting too large
         
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow for depth
          objectFit: 'cover',
            marginTop: '-8px',
        }}/>
    </Box>
    </Box>
  );
};

export default AppLayout()(Home);
