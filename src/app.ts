import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

const app = express();

import guidesRoutes from './routes/guides';

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', guidesRoutes);

// This folder for this application will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;