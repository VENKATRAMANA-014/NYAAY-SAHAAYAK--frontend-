import React from 'react';

const ChatWindow = () => {
    const chatWindowStyle = {
        backgroundColor: 'lightblue', 
        padding: '10px', 
        border: '1px solid #ccc',
        borderRadius: '8px',
        height: '100px', 
        overflowY: 'auto', 
        
    };

    return (
        <div style={chatWindowStyle}>
        {/* Other chat components go here */}
        </div>
    );
};

export default ChatWindow;