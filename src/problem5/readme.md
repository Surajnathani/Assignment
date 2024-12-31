# Resource Management API

A RESTful API built with Express.js and TypeScript for managing resources. This API provides CRUD operations for managing resources with MongoDB as the database.

## Features

- Create, Read, Update, and Delete resources
- TypeScript implementation
- MongoDB integration
- Error handling
- Environment variable configuration
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## Project Structure

```
problem5/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── interfaces/      # TypeScript interfaces
│   ├── middleware/      # Express middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   ├── app.ts          # Express app setup
│   └── server.ts       # Server entry point
├── .env                # Environment variables
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd problem5
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with:
```env
PORT=5001
MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/
NODE_ENV=development
CORS_ORIGIN=*
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

## API Endpoints

### Create Resource
```http
POST /api/resources
Content-Type: application/json

{
    "name": "Example Resource",
    "description": "This is an example resource"
}
```

### Get All Resources
```http
GET /api/resources
```

### Get Single Resource
```http
GET /api/resources/:id
```

### Update Resource
```http
PUT /api/resources/:id
Content-Type: application/json

{
    "name": "Updated Resource",
    "description": "This is an updated resource"
}
```

### Delete Resource
```http
DELETE /api/resources/:id
```

## Error Handling

The API uses standard HTTP response codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

## Development

### Available Scripts

- `npm run dev`: Start development server with hot-reload
- `npm run build`: Build the TypeScript code
- `npm start`: Run the built code in production
- `npm run lint`: Run ESLint

## Testing

To run tests:
```bash
npm test
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5001 |
| MONGO_URI | MongoDB connection string | - |
| NODE_ENV | Environment mode | development |
| CORS_ORIGIN | CORS allowed origins | * |

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check if MongoDB is running
   - Verify MONGO_URI in .env file
   - Ensure network connectivity
   - Check if IP address is whitelisted in MongoDB Atlas

2. **Port Already in Use**
   - Change the PORT in .env file
   - Kill the process using the current port
   - Check for other running instances of the application

3. **TypeScript Compilation Errors**
   - Run `npm run build` to check for compilation errors
   - Ensure all dependencies are installed
   - Check tsconfig.json configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## API Response Format

### Success Response
```json
{
    "status": "success",
    "data": {
        "name": "Example Resource",
        "description": "This is an example resource",
        "_id": "...",
        "createdAt": "2024-03-15T12:00:00.000Z",
        "updatedAt": "2024-03-15T12:00:00.000Z"
    }
}
```

### Error Response
```json
{
    "status": "error",
    "message": "Resource not found"
}
```

## License

This project is licensed under the MIT License.

## Support

For support, please create an issue in the repository.