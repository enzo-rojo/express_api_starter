
# Express API Starter

An starter Node.js/Express API.

## Features

- Express
- MySQL
- Sequelize

## Get Started

```bash
docker-compose up -d
```
or 
```bash
docker-compose up -d mysqldb
npm run start
```


## API Reference

#### Get all users

```http
  GET /user/get
```

#### Create new user

```http
  POST /user/create
```

| Parameter | Type     |
| :-------- | :------- |
| `email`      | `string` |
| `username`      | `string` |
| `password`      | `string` |



