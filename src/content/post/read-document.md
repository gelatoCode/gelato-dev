---
title : Read Document
pubDate : 27 August 2023
---

## Prerequisites

- **Code Editor**: Visual Studio Code
- **Extension** : Install a MongoDB extension in VS Code
- **Connection String** : *localhost:27017* and active connection.
- Activate the connection to the MongoDB.
- Open a MongoDB Playground.
- Create Documents.

## MongoDB CRUD Operators

- Use the `findOne()` method to read one document.
- Use the `find()` method to read more than one document.

## Read One Document

### Syntax

```mongodb title="Syntax"
db.collection.findOne(
    { <query> },
    { <projection> }
)
```