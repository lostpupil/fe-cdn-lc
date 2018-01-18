# fe-cdn-lc

## Description

This is a simple front end version release sample project based on LeanCloud storage. LeanCloud provide cloud database and cloud storage, So this is the key to use cloud to host your front end resources. 
In this example, you can host your bundled javascript file in cloud and take advantage of CDN.

## Setup

```bash
mkdir -p config
touch config.js
```

Your config file should look like this: 

```json
var config = {
    "application": {
        "name": 'YOUR APPLICATION NAME'
    },
    "leancloud": {
        "appid": "YOUR APP ID",
        "appkey": "YOUR APP KEY"
    }
}
module.exports = config;
```

## Workflow

## Behind This Whole Idea