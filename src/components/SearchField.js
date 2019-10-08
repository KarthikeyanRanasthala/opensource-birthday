import React from 'react';

import { connect } from 'react-redux';

import { getUser } from '../redux/actions'

import { Grid, Input, Button, Icon } from 'semantic-ui-react';

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (event) => {
        console.log(this.state.inputValue)
        this.setState({ inputValue: event.target.value })
    }

    render() {
        console.log(this.props)
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='Github Username' 
                            value={this.state.inputValue} 
                            onChange={(e) => this.handleChange(e)} 
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Button 
                        animated 
                        onClick={() => this.props.handleSubmit(this.state.inputValue)}
                    >
                        <Button.Content visible>
                            Search
                        </Button.Content>
                        <Button.Content hidden>
                            <Icon name='search'/>
                        </Button.Content>
                    </Button>
                </Grid.Row>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (query) => {
            dispatch(getUser(query))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchField);