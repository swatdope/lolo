import React, { useState, useEffect }from 'react'
import useStyles from './styles'
import { Paper, Typography, TextField, Button } from "@material-ui/core"
import FileBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import {createPost, updatePost} from '../../actions/posts'


const Form = ({ currentId, setCurrentId}) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [postData, setPostData] = useState({ creator: '',title: '', tags: '', message: '', selectedFile: ''})

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId ) : null)

    useEffect(() => {
      if(post) setPostData(post)
    }, [post]) 


    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId) {

          dispatch(updatePost(currentId, postData))
        } else {
          dispatch(createPost(postData))
        }
        clear()

    }
    const clear = () => {
      setCurrentId(null)
      setPostData({ creator: '',title: '', tags: '', message: '', selectedFile: '' })


    }

    return (
        <Paper className={classes.paper} >
       <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}  >
       <Typography variant="h6" >{currentId ? 'Editing' : 'Creating'} a memory</Typography>
       <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}  />
       <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}  />
       <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}  />
       <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}  />
       <div>
       <FileBase type="file" multiply="none" className={classes.fileInput} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64  }) } />
        <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth >
          SUBMIT
        </Button>
        <Button color="secondary" variant="contained" size="small" onClick={clear} fullWidth >
          CLEAR
        </Button>
       </div>
       </form>
       </Paper>
    )
}

export default Form
