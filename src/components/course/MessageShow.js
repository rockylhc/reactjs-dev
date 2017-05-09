import React from 'react';
import {Message} from 'semantic-ui-react';
const MessageShow = ({message}) => {
  return (
    <Message>
      {message}
    </Message>
  );
}

export default MessageShow;
