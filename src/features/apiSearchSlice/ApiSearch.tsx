import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  userListAsync,
  userAsync,
  searchData,
  cleanUser,
  IUserState
} from './apisearchSlice';



export function ApiSearch() {
  const dataSearch: IUserState = useAppSelector(searchData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (dataSearch.data.length <= 0) {
      dispatch(userListAsync("1"))
    }
  });
  const rows = [];
  for (let user of dataSearch.data) {
    rows.push(<Grid item xs={4} sm={4} md={4} key={user.id}><BoxUserList user={user}></BoxUserList></Grid>);
  }
  const btnPages = []
  for (let page = 1; page <= dataSearch.total_pages; page++) {
    btnPages.push(<BtnPaginate key={page} page={page} currentPage={dataSearch.page}></BtnPaginate>)
  }
  return (
    <div>
      <Container maxWidth="lg">

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {rows}
          <Grid item
            xs={4}
            sm={6}
            md={8}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"

          >
            {btnPages}
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"

          spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {dataSearch.user &&
            <Grid item style={{ margin: "50px 0px" }}>
              <BoxUser user={dataSearch.user}></BoxUser>
            </Grid>
          }
        </Grid>

      </Container>
    </div>
  );
}
export function BoxUserList({ user }: any) {
  const dispatch = useAppDispatch();
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
          <IconButton aria-label="settings" onClick={() => dispatch(userAsync(user.id.toString()))}>
            <InfoIcon />
          </IconButton>
        }
        title={user.first_name + " " + user.last_name}
        subheader={user.email}
      />
    </Card>
  )
}
export function BoxUser({ user }: any) {
  const dispatch = useAppDispatch();

  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={user.avatar}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.first_name + " " + user.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='secondary' onClick={() => dispatch(cleanUser())}>Close</Button>
      </CardActions>
    </Card>
  )
}
export function BtnPaginate({ page, currentPage }: any) {
  const dispatch = useAppDispatch();
  return (
    <Grid>
      <Button
        variant={currentPage !== page ? 'outlined' : 'contained'}
        color="secondary"
        size="small"
        onClick={() => dispatch(userListAsync(page.toString()))}>{page}
      </Button>
    </Grid>
  )
}