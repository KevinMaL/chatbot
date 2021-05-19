import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "RestaurantBot",
  initialMessages: [createChatBotMessage(`“Hello, it is lunch time, what do you want to eat 
  today?`)],
};

export default config;