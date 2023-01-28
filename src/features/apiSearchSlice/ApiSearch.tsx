import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import NightlightIcon from '@mui/icons-material/Nightlight';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  searchAsync,
  searchData

} from './apisearchSlice';



export function ApiSearch() {
  const dataSearch = useAppSelector(searchData);
  console.log(dataSearch)
  const dispatch = useAppDispatch();

  const rows = [];
  for (let user of dataSearch) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<Grid item xs={4} sm={6} md={8} key={user.id}><BoxUser user={user}></BoxUser></Grid>);
  }
  return (
    <div>
      <Container maxWidth="sm">
        <Button onClick={() => dispatch(searchAsync("test"))}>get data</Button>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {rows}
        </Grid>

      </Container>
    </div>
  );
}
// {
//   "id": 7,
//     "email": "michael.lawson@reqres.in",
//       "first_name": "Michael",
//         "last_name": "Lawson",
//           "avatar": "https://reqres.in/img/faces/7-image.jpg"
// }
export function BoxUser({ user }: any) {
  return (



    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <CardMedia
              component="img"
              image={user.avatar}
              alt="Paella dish"
            />
          </Avatar>
        }

        title={user.first_name + " " + user.last_name}
        subheader={user.email}
      />
    </Card>
  )
}
