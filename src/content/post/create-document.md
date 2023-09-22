---
title : Create Document

pubDate: 22 August 2023
---

## Prerequisite

- **Code Editor**: Visual Studio Code
- **Extension** : Install a MongoDB extension in VS Code
- **Connection String** : *localhost:27017* and active connection.
- Activate the connection to the MongoDB.
- Open a MongoDB Playground.

## MongoDB CRUD Operators

- Use the `insertOne()` method to insert one document.
- Use the `insertMany()` method to insert many document.

## Create One Document

### Syntax

```mongodb title="Syntax"
    db.collection.insertOne(
        <document>,
        {
            writeConcern : <document>
        }
    )
```

### Case

1. Start with a blank MongoDB Playground , save the file and named with `create-one-document.mongodb.js` .
2. To insert one document use `insertOne()` method.
3. Insert one document into the `vscode.feed` collection.

    ```js title="create-document.mongodb.js"
    use('vscode');

    db.feed.insertOne(
        { "_id" : 1, "date" : Date(22-8-2023) , "title" : "Visual Studio Code" }
    );
    ```

4. Press the **Play Button** 
5. Output document in the **Playground Result.json** panel.

    ```json title="Playground Result.json"
    {
        acknowleged : 1,
        insertedId : 1
    }
    ```

## Create Many Document

### Syntax

```mongodb title="Syntax"
db.collection.insertMany(
    [<document 1> , <document 2>, ...],
    {
        writeConcern: <document>,
        ordered : <boolean>
    }
)
```

### Case

1. Start with a blank MongoDB Playground , save the file and named with `create-many-document.mongodb.js` .
2. To insert one document use `insertMany()` method.
3. Insert one document into the `vscode.feed` collection.

    ```js title="create-document.mongodb.js"
    use('vscode');

    db.feed.insertMany(
        { "_id" : 2, "date" : Date(2023-8-24) , "title" : "MongoDB" },
        { "_id" : 3, "date" : Date(2023-8-25) , "title" : "CSS" },
        { "_id" : 4, "date" : Date(2023-8-26) , "title" : "HTML" }
    );
    ```

4. Press the **Play Button** 
5. Output document in the **Playground Result.json** pane.

    ```json title="Playground Result.json"
    {
        "acknowledged": true,
        "insertedIds": {
            "0": 2,
            "1": 3,
            "2": 4
        }
    }   
    ```

[](#top)