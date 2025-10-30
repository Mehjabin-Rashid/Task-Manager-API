# Task Manager API

A Node.js Task Manager API built with Express and MongoDB.

## Features

- User Registration and Authentication
- JWT-based Authorization
- Email Verification
- Password Reset
- Task Management (Create, Update, Delete, List)
- Task Status Tracking
- Rate Limiting
- Security Features (Helmet, HPP, CORS)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Mehjabin-Rashid/Task-Manager-API.git
cd Task-Manager-API
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables file:
```bash
cp .env.example .env
```

4. Configure your environment variables in the `.env` file (see Configuration section below)

## Configuration

### How to Create MongoDB Database Secret Key

1. **Create a MongoDB Atlas Account** (if you don't have one):
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account

2. **Create a New Cluster**:
   - Click "Build a Cluster"
   - Choose the free tier option
   - Select your preferred region
   - Click "Create Cluster"

3. **Create a Database User**:
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Set a username and password (save these for later)
   - Grant appropriate privileges (e.g., "Atlas Admin" for development)

4. **Whitelist Your IP Address**:
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Either add your current IP or allow access from anywhere (0.0.0.0/0) for development

5. **Get Your Connection String**:
   - Go to "Clusters" and click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - It will look like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database>`

6. **Update Your .env File**:
   - Replace `<username>` with your database username
   - Replace `<password>` with your database password
   - Replace `<database>` with your database name (e.g., "taskmanager")

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# MongoDB Connection
MONGODB_CONNECTION=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/your-database

# JWT Configuration
JWT_SECRET=your-random-secret-key-here-make-it-long-and-complex
JWT_EXPIRATION_TIME=2592000

# Email Configuration
EMAIL_HOST=mail.example.com
EMAIL_PORT=587
EMAIL_SECURITY=false
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
MAIL_ENCRYPTION=

# Application Configuration
MAX_JSON_SIZE=50mb
URL_ENCODED=true

# Rate Limiting
REQUEST_LIMIT_TIME=900000
REQUEST_LIMIT_NUMBER=3000

# Server Configuration
WEB_CACHE=false
PORT=5600
```

#### Generating a Secure JWT Secret

You can generate a secure JWT secret using Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Or using OpenSSL:

```bash
openssl rand -hex 32
```

## Running the Application

### Development Mode
```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 5600).

### Production Mode
```bash
node app.js
```

## API Endpoints

The API will be available at `http://localhost:5600/api`

### User Endpoints
- `POST /api/registration` - Register a new user
- `POST /api/login` - User login
- `GET /api/profileDetails` - Get user profile (requires authentication)
- `POST /api/profileUpdate` - Update user profile (requires authentication)
- `POST /api/emailVerify` - Verify email
- `POST /api/codeVerify` - Verify code
- `POST /api/resetPassword` - Reset password

### Task Endpoints
- `POST /api/createTask` - Create a new task (requires authentication)
- `POST /api/updateTaskStatus` - Update task status (requires authentication)
- `GET /api/taskListByStatus/:status` - Get tasks by status (requires authentication)
- `DELETE /api/deleteTask/:id` - Delete a task (requires authentication)
- `GET /api/countTask` - Get task count (requires authentication)

## Security Best Practices

1. **Never commit your `.env` file** - It contains sensitive information
2. **Use strong, unique passwords** for your MongoDB database
3. **Generate a random JWT secret** - Don't use the example value
4. **Rotate your secrets regularly** - Update passwords and keys periodically
5. **Use HTTPS in production** - Never send credentials over HTTP
6. **Keep dependencies updated** - Run `npm audit` regularly
7. **Limit database user permissions** - Grant only necessary privileges
8. **Use environment-specific configurations** - Different secrets for dev/staging/production

## Troubleshooting

### Connection Issues
- Verify your MongoDB connection string is correct
- Check that your IP address is whitelisted in MongoDB Atlas
- Ensure your database user credentials are correct

### Authentication Issues
- Verify your JWT_SECRET is set correctly
- Check that tokens are being passed in request headers

## License

ISC

## Author

Mehjabin Rashid
