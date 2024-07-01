const { axiosInstance } = require("./axios");

function sendMessage(messageObj,messageText){
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText,
    });
}

function handleMessage(messageObj) {

    const messageText = messageObj.text || "";
    
    if (messageText.charAt(0) === "/") {
    
    const command = messageText.substr(1);
    
    switch (command) {
    
    case "start":
    
    // We want to send a welcome message to the user.
    
    return sendMessage(
    
    messageObj,
    
    "Hi! I'm a bot. I can help you to get started"
    );

    case "test":
        return sendMessage(messageObj,"This is test command");

    default:
        return sendMessage(messageObj,"Hey hi,i don't know the command");
}
} else {
    return sendMessage(messageObj,messageText);
}

    
} 

module.exports = { handleMessage }; 