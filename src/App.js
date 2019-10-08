import React from 'react';

import { connect } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Header } from 'semantic-ui-react';

import SearchField from './components/SearchField';
import ShowcaseCard from './components/ShowcaseCard';
import ErrorMessage from './components/ErrorMessage';

const App = (props) => {
    return (
        <Container style={{margin: '150px 0px 0px 0px'}}>
            <Grid stackable textAlign='center'>
                <Header as='h1' textAlign='center'>Find Your Open Source Birthday</Header>
                <SearchField />
                {props.init ? (<ShowcaseCard />) : (<></>)}
                {props.isError ? (<ErrorMessage />) : (<></>)}
            </Grid>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        init: state.init,
        isError: state.isError
    }
}

export default connect(mapStateToProps, null)(App);