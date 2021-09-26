import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'

const app = express()

app.use(cors())
app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))

app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://tenzinngodupjs:tenzinngodupjs95@cluster0.euh61.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, console.log(`server running at port:${PORT}`)))
.catch((error)=> console.log(`${error} did not connect`))

import React from 'react'
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

    hocComponent.propTypes = {
    }

    return hocComponent
}
// change made