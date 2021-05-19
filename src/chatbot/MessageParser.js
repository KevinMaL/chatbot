class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("sushi")) {
        this.actionProvider.greet();
      }
    }
  }
  
  export default MessageParser;