import React from 'react';

import { connect } from 'react-redux';

import { Card, Placeholder } from 'semantic-ui-react';

const ShowcaseCard = (props) => {
    let createdDate;
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if(props.response.created_at) {
        createdDate = new Date(props.response.created_at);
        createdDate = `${createdDate.getDate()} 
                       ${months[createdDate.getMonth()]} 
                       ${createdDate.getFullYear()}`
    }
    return (
        <>
            {props.isLoading ? (
                <Card>
                    <Card.Content>
                        <Placeholder>
                            <Placeholder.Header>
                                <Placeholder.Line length='long' />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line length='medium' />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Card.Content>
                </Card>
            ) : (
                <Card>
                    <Card.Content>
                            <Card.Header>{props.response.name}</Card.Header>
                            <Card.Meta>
                                <span>{props.response.city}</span>
                            </Card.Meta>
                            <Card.Description>Joined On {createdDate}</Card.Description>
                    </Card.Content>
                </Card>
            )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        response: state.response
    }
}

export default connect(mapStateToProps, null)(ShowcaseCard);