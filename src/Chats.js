import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Margot Robbie"
        message="I think we can!"
        profilePic="https://www.biography.com/.image/t_share/MTUxNTgzODk3Mjk2MDUzNTE2/gettyimages-870916736.jpg"
        timestamp="2 sec ago"
      />
      <Chat
        name="Scarlett Johansson"
        message="I was interested in React!🤓"
        profilePic="https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg"
        timestamp="1 day ago"
      />
      <Chat
        name="Natalie Portman"
        message="Hello 💙" 
        profilePic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/natalie-portman-1558430184.jpg"
        timestamp="1 day ago"
      />
    </div>
  );
}

export default Chats;
