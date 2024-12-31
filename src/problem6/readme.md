# API Service Specification: Live Scoreboard Module

## Overview

This document outlines the specifications for a backend module designed to handle live score updates for a website's scoreboard. The module will ensure real-time updates of the top 10 users’ scores, validate score updates to prevent unauthorized manipulation, and provide a secure API for score-related operations.

## Features

1. **Real-time Score Updates:** Display a live scoreboard with the top 10 users' scores.
2. **Secure Score Updates:** Validate API requests to prevent unauthorized score increments.
3. **Scalable Architecture:** Handle high-frequency API requests efficiently.

---

## API Endpoints

### 1. `POST /api/v1/scores/update`

**Description:** Updates the user’s score when they complete an action.

#### Request

- **Headers:**
  - `Authorization`: Bearer token (JWT)
- **Body:**
  ```json
  {
      "userId": "string",
      "actionId": "string",
      "scoreIncrement": "number"
  }
  ```

#### Response

- **200 OK:**
  ```json
  {
      "message": "Score updated successfully.",
      "newScore": "number"
  }
  ```
- **400 Bad Request:**
  ```json
  {
      "error": "Invalid request data."
  }
  ```
- **401 Unauthorized:**
  ```json
  {
      "error": "Authentication failed."
  }
  ```
- **500 Internal Server Error:**
  ```json
  {
      "error": "An unexpected error occurred."
  }
  ```

### 2. `GET /api/v1/scores/top`

**Description:** Retrieves the top 10 users by score.

#### Request

- **Headers:**
  - None
- **Parameters:**
  - None

#### Response

- **200 OK:**
  ```json
  [
      {
          "userId": "string",
          "username": "string",
          "score": "number"
      }
  ]
  ```
- **500 Internal Server Error:**
  ```json
  {
      "error": "An unexpected error occurred."
  }
  ```

---

## Implementation Details

### Architecture

- **Database:**
  - A relational database (e.g., PostgreSQL) with a `Users` table containing columns `userId`, `username`, and `score`.
- **Real-time Updates:**
  - Use WebSocket or Server-Sent Events (SSE) to push live updates to the scoreboard.
- **Authentication:**
  - JWT for user authentication and verification.
- **Validation:**
  - Validate `actionId` and `scoreIncrement` against a predefined set of rules to prevent fraudulent updates.
- **Rate Limiting:**
  - Apply rate limiting to the `/scores/update` endpoint to prevent abuse.

### Process Flow

1. **User Action:** User completes an action, triggering an API call to `/scores/update`.
2. **Authentication:** The backend verifies the provided JWT token.
3. **Validation:** Validate the `actionId` and ensure the `scoreIncrement` is within an acceptable range.
4. **Database Update:** Increment the user’s score in the database.
5. **Real-time Notification:** Notify all connected clients about the updated top 10 scores via WebSocket/SSE.
6. **Fetch Top Scores:** Clients fetch the updated scoreboard using `/scores/top` if needed.

---

## Diagram

### Flow of Execution

```plaintext
User Action
   |
   v
+-------------+
| Frontend App|
+-------------+
       |
       | POST /api/v1/scores/update
       v
+---------------------+
| Backend Application |
+---------------------+
       |
       | Validate JWT
       |
       | Validate Action
       v
+---------------------+
|  Database (SQL)     |
+---------------------+
       |
       | Update Score
       |
       v
+----------------------+
| Notify via WebSocket |
+----------------------+
       |
       v
+-------------+
| Frontend App|
+-------------+
```

---

## Improvements

1. **Caching Layer:** Add a caching layer (e.g., Redis) for faster retrieval of top scores.
2. **Action Validation:** Introduce a dedicated service for validating actions.
3. **Error Handling:** Implement detailed logging and monitoring to identify bottlenecks or unauthorized access attempts.
4. **Scalability:** Leverage message queues (e.g., RabbitMQ or Kafka) to handle a high volume of updates.
5. **Leaderboard Expansion:** Allow fetching scores by different categories or time periods.

---

## Conclusion

This module provides a secure and scalable solution for real-time scoreboard updates. By adhering to best practices in API design and leveraging real-time communication protocols, it ensures a seamless and secure user experience.
  