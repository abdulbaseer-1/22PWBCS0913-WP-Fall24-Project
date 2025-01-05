// Session.js
import session from 'express-session';
import MongoStore from 'connect-mongo';

const sessionStore = MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/',
    collectionName: 'sessions',
    ttl: 24 * 60 * 60 // 1 day in seconds
});

sessionStore.on('connected', () => {
    console.log('MongoDB session store connected');
});

const sessionMiddleware = session({
    secret: 'your-secret-key',
    resave: true,           // Changed to true to ensure session is saved
    saveUninitialized: true, // Changed to true to allow session creation
    store: sessionStore,
    cookie: {
        httpOnly: true,     // Security best practice
        secure: true,      // Must be false for HTTP in development
        maxAge: 3000000,    // 50 minutes
        sameSite: 'None',    // Changed to Lax for development
        path: '/'           // Explicitly set cookie path
    },
    name: 'sessionId'       // Custom cookie name
});

export default sessionMiddleware;