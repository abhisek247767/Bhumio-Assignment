<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project is a Train Workflow Simulator built using NestJS. It allows you to create and manage trains with various components (nodes) and perform actions like starting and stopping components. Each train can have an engine, optional pantry cars with different configurations, and multiple coaches. The project is designed to simulate a train workflow based on a JSON file format.

## Project Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/abhisek247767/Bhumio-Assignment.git
    cd train-workflow-simulator
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the application:

    ```sh
    npm run start
    ```

- `app.module.ts`: The root module of the application.
- `main.ts`: The entry point of the application.
- `train/`: Contains the Train module, controller, and service.
- `roles.json`: Stores the train data and configurations.

## Endpoints

### Create a New Train

- **URL**: `/train/create`
- **Method**: `POST`
- **Body**: None
- **Response**:
    ```json
    {
      "message": "New train created with ID {trainId}",
      "trainId": "{trainId}"
    }
    ```

### Add a Node to a Train

- **URL**: `/train/add-node/:trainId`
- **Method**: `POST`
- **Body**:
    ```json
    {
      "start_role": ["{role1}", "{role2}"],
      "present_role": "{presentRole}",
      "next_role": ["{nextRole1}", "{nextRole2}"]
    }
    ```
- **Response**:
    ```json
    {
      "message": "Component added to train {trainId}"
    }
    ```

### Start a Component

- **URL**: `/train/start/:trainId/:componentIndex`
- **Method**: `POST`
- **Body**: None
- **Response**:
    ```json
    {
      "message": "{presentRole} of train {trainId} started"
    }
    ```

### Stop a Component

- **URL**: `/train/stop/:trainId/:componentIndex`
- **Method**: `POST`
- **Body**: None
- **Response**:
    ```json
    {
      "message": "Stopped of train {trainId} stopped"
    }
    ```

### Get a Train Model

- **URL**: `/train/:trainId`
- **Method**: `GET`
- **Body**: None
- **Response**:
    ```json
    {
      "id": "{trainId}",
      "components": [
        {
          "start_role": ["{role1}", "{role2}"],
          "present_role": "{presentRole}",
          "next_role": ["{nextRole1}", "{nextRole2}"]
        }
        // Other components
      ]
    }
    ```

### Get All Trains

- **URL**: `/train`
- **Method**: `GET`
- **Body**: None
- **Response**:
    ```json
    {
      "{trainId1}": {
        "id": "{trainId1}",
        "components": [
          {
            "start_role": ["{role1}", "{role2}"],
            "present_role": "{presentRole}",
            "next_role": ["{nextRole1}", "{nextRole2}"]
          }
          // Other components
        ]
      },
      "{trainId2}": {
        "id": "{trainId2}",
        "components": [
          {
            "start_role": ["{role1}", "{role2}"],
            "present_role": "{presentRole}",
            "next_role": ["{nextRole1}", "{nextRole2}"]
          }
          // Other components
        ]
      }
      // Other trains
    }
    ```

## Example JSON Structure

This project uses a JSON file (`roles.json`) to store the train data. Here is an example structure:

```json
{
  "train-1": {
    "id": "train-1",
    "components": [
      {
        "start_role": ["None"],
        "present_role": "BA",
        "next_role": ["B"]
      },
      {
        "start_role": ["BA"],
        "present_role": "B",
        "next_role": ["BA"]
      }
    ]
  }
}
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).


## License

Nest is [MIT licensed](LICENSE).
