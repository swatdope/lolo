import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, AppBar, Typography} from '@material-ui/core'
import memories from './images/memories.jpg'
import useStyles from './styles'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/posts'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts())

  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg"  >
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          MEMORIES
        </Typography>
        <img src={memories} alt="memories" height="40"  />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container  justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
