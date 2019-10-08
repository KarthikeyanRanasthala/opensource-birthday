import React from 'react';

import { Message } from 'semantic-ui-react';

const ErrorMessage = () => {
    return (
        <Message error>
            <Message.Header>Error: 404 Not Found</Message.Header>
            <p>Check your username and try again.</p>
        </Message>
    )
}

export default ErrorMessage;