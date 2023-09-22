---
title : Create Database and Collection
pubDate : 18 August 2023
---

## Prerequisite

- **Code Editor**: Visual Studio Code
- **Extension** : Install a MongoDB extension in VS Code
- **Connection String** : ***localhost:27017*** and **active** connection.

## Create Database

Declare the database with named `vscode`.

```js title="vscode.mongodb.js"
const database = 'vscode';
```

Creates a new `vscode` database.

```js title="vscode.mongodb.js"
const database = 'vscode';

use(database);
```

## Create Collection

Declares the collection with named `feed`.

```js title="vscode.mongodb.js"
const database = 'vscode';
const collection = 'feed';

use(database);
```

Create a the collection with named `feed` inside of the `vscode` database. Use `db.createCollection(collection)` method.

```js title="vscode.mongodb.js"
const database = 'vscode';
const collection = 'feed';

use(database);

db.createCollection(collection);
```

## Run Playground

Press the **Play Button**.Following result in the `Playground Result.json` panel to confirm the creation of the database and collection.

```json title="Playground Result.json"
{
    "ok": 1
}
```

The `vscode` database and `feed` collection appear under **Connection** inside *localhost:27017* folder.

[](#top)
