import { Button, Card, CardContent, Container, Grid, TextField } from "@mui/material";
import { connect } from 'react-redux';
import React from "react";
import { Navigate } from "react-router-dom";
import { AppDispatch } from "../../app/store";
import { setToken } from "./loginSlice";



class LoginForm extends React.Component <any, any> {
    state = { user: null, error: null };
    async handleSubmit() {
        let user = true
        this.props.setToken("token")
        this.setState({ user });
    }

    render() {
        let { user } = this.state;
        return (

            <Container maxWidth="sm">

                {user && (
                    <Navigate to="/" replace={true} />
                )}

                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={6} md={10}>
                        <Card style={{ width: "100%", margin: "100px 0px" }}>
                            <CardContent>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={{ xs: 2, md: 3 }}
                                    columns={{ xs: 4, sm: 8, md: 12 }}
                                >
                                    <Grid item >
                                        <h3>Login To Website</h3>
                                    </Grid>
                                    <Grid item >
                                        <TextField label="Usernam" variant="standard" />
                                    </Grid>
                                    <Grid item >
                                        <TextField label="Password" variant="standard" />
                                    </Grid>
                                    <Grid item >
                                        <Button variant="contained" color="secondary" size="medium" onClick={() => this.handleSubmit()}>Login</Button>
                                    </Grid>
                                    <Grid item >
                                        You forgot the password
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container >
        );
    }
}


const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setToken: (v: string) => dispatch(setToken(v))
    }
};
export default connect(null, mapDispatchToProps)(LoginForm)