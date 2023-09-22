---
title : MongoDB for VS Code
pubDate : 18 August 2023
---

## Prerequisite

- **Code Editor :** Visual Studio Code
- **Extension :** Install a MongoDB extension in VS Code.

## MongoDB Connect

Create a folder named *mongodb*.

1. Go to **Activity Bar**, click MongoDB icon.
2. In **Connection** panel, click **Add Connection** button.
3. In MongoDB tab, select **Advanced Connection Settings** and click **Open form**.

## Connection String

### New Connection Form

1. Under **General** tab, in *Connection Type* select **Standalone**.
2. For **Hostname** field, enter **localhost**.
3. For **Port** field, enter **27017**.
4. For **Authentication**, select **None**.
5. Finished, click a **Connect**.
6. Successfully connected.

> **Connection String** = *localhost:27017*

## Open a Playground

### Create a New Playground

1. In the **Playground** panel of MongoDB, click **Create New Playground**.
2. Save a file with the `.mongodb.js` or `.mongodb` extension.
3. Double click a file to open the playground.

### Run a Playground

1. To run a playground, click the **Play Button** in VS Code top navigation bar.
2. To active connection string, VS Code display **Currently connected to localhost:27017** or **Click here to add connection** on top of your playground.

[](#top)
