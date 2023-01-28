import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  userListAsync,
  userAsync,
  searchData,
  cleanUser
} from './apisearchSlice';



export function ApiSearch() {
  const dataSearch = useAppSelector(searchData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (dataSearch.data.length <= 0) {
      dispatch(userListAsync("1"))
    }
  });
  const rows = [];
  for (let user of dataSearch.data) {
    rows.push(<Grid item xs={4} sm={6} md={8} key={user.id}><BoxUser user={user} action={() => dispatch(userAsync(user.id.toString()))}></BoxUser></Grid>);
  }
  const btnPages = []
  for (let page = 1; page <= dataSearch.total_pages; page++) {
    btnPages.push(<IconButton key={page} onClick={() => dispatch(userListAsync(page.toString()))}>{page}</IconButton>)
  }
  return (
    <div>
      <Container maxWidth="sm">

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {rows}
        </Grid>
        {btnPages}

        {dataSearch.user &&
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={dataSearch.user.avatar}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {dataSearch.user.first_name + " " + dataSearch.user.last_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dataSearch.email}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => dispatch(cleanUser())}>Close</Button>
            </CardActions>
          </Card>}
      </Container>
    </div>
  );
}
export function BoxUser({ user, action }: any) {
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
        action={
          <IconButton aria-label="settings" onClick={action}>
            <InfoIcon />
          </IconButton>
        }
        title={user.first_name + " " + user.last_name}
        subheader={user.email}
      />
    </Card>
  )
}
