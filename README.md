# E-Commerce Microservices Application

Welcome to the E-Commerce Microservices Application! This document serves as a guide to understanding the structure, components, and setup of our e-commerce application, which is built using a microservices architecture, follows the layered architecture pattern, and utilizes Apollo GraphQL Federation for seamless integration.

## Table of Contents

1. [Introduction](#1-introduction)
2. [Technologies](#2-technologies)
3. [Architecture](#3-architecture)
4. [Services](#4-services)
5. [Getting Started](#5-getting-started)
6. [Configuration](#6-configuration)
7. [Running the Application](#7-running-the-application)
8. [GraphQL Federation](#8-graphql-federation)
9. [License](#9-license)

## 1. Introduction

Our e-commerce application is designed to provide a scalable and modular solution for online retail. It employs microservices to break down complex functionalities into smaller, manageable services. Each service is responsible for a specific domain, such as User Management, Product Catalog, Order Processing, and Mail Notifications.

## 2. Technologies

- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Amazon S3**: Object storage service offered by Amazon Web Services.
- **Apollo GraphQL**: A comprehensive toolset for building GraphQL applications.
- **Mailgun**: Email automation and delivery platform.
- **dotenv**: Zero-dependency module for loading environment variables.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database program.
- **Git**: Distributed version control system.
- **GitHub**: Web-based platform for version control and collaboration.
- **GraphQL**: A query language for APIs.
- **RabbitMQ**: Open-source message broker software.

<img height="32" width="32" src="https://cdn.simpleicons.org/typescript/3178C6" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/amazons3/569A31" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/apollographql/311C87" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/mailgun/F06B66" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/dotenv/ECD53F" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/express" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/mongodb/47A248" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/git/F05032" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/github" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/graphql/E10098" />&nbsp;
<img height="32" width="32" src="https://cdn.simpleicons.org/rabbitmq/FF6600" />&nbsp;


## 3. Architecture

The application follows a microservices architecture, promoting loose coupling and independent deployment of services. It is structured around the layered architecture pattern, ensuring a clear separation of concerns. The front-end communicates with the back-end services through GraphQL APIs provided by Apollo Federation.
<p align="center"><img width="764" alt="Screenshot 2023-08-26 at 13 36 30" src="https://github.com/capstone-bazaar/e-commerce-api/assets/20026295/5c413937-6e5e-4490-8317-70456ced12c7"></p>


## 4. Services

Our application consists of the following microservices:

- **User Service**: Manages user profiles, authentication, and authorization.
- **Product Service**: Handles the product catalog, inventory, category and details.
- **Order Service**: Facilitates order placement, processing, and tracking.
- **Mail Service**: Responsible for sending notifications and order-related emails.

Each service is self-contained and communicates with other services as needed.

## 5. Getting Started

To set up the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/capstone-bazaar/e-commerce-api`
2. Navigate to the project directory: `cd e-commerce-api`
3. Install dependencies for each service: `cd <service-folder> && npm install`
4. Repeat step 3 for all services and `Gateway`.
5. Configure environment variables (see [Configuration](#5-configuration)).
6. Install [RabbitMQ](https://www.rabbitmq.com/).
7. Start each service (see [Running the Application](#6-running-the-application)).

## 6. Configuration

Each service has its own configuration requirements. Create `.env.development` file for each service. Refer to the respective service's `.env.example` file for configuration details. Common configurations include database connections, API keys, and service ports.

## 7. Running the Application

To run the application locally:

1. Start services using `npm run start-services:dev` in the root directory.
2. Start the gateway in a separate terminal using `npm run start-gateway:dev`.

## 8. GraphQL Federation

We utilize Apollo GraphQL Federation to unify the GraphQL schema across services. This enables us to compose a holistic API while maintaining the autonomy of individual services. The federated schema is available at the designated gateway service.

## 9. License

Our application is licensed under the [MIT License](https://github.com/capstone-bazaar/e-commerce-api/blob/master/LICENSE). Make sure to review the terms before using or contributing to the project.

---

Thank you for your interest in our E-Commerce Microservices Application! If you have any questions or need further assistance, feel free to contact us or open an issue in the repository. Happy coding!
