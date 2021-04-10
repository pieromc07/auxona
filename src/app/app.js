require('dotenv').config()
import express from 'express';  
import cors from 'cors'
import morgan from 'morgan'
import router from '../routes/router'


const app = express();
app.use(cors());
app.use(morgan('dev'))
app.use('/v1/', router)
app.set('port', process.env.PORT || 5000);


app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'));
})