# fe-cdn-lc

## Description

This is a simple front end version release sample project based on [LeanCloud](https://leancloud.cn) storage. [LeanCloud](https://leancloud.cn) provide cloud database and cloud storage, So this is the key to use cloud to host your front end resources. 
In this example, you can host your bundled javascript file in cloud and take advantage of the CDN.

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

You will hava several gulp tasks

```bash
gulp -T
# [11:42:17] Tasks for ~/Program/fe-cdn/fe-cdn-lc/gulpfile.js
# [11:42:17] ├── default
# [11:42:17] ├── dev
# [11:42:17] ├── prod
# [11:42:17] ├── lc-dev
# [11:42:17] └── lc-prod
```

In development mode, you should run `gulp dev` to bundle the front end project, then you can run `gulp lc-dev` to upload the resource and you will create a record.

![Screenshot](images/WX20180118-114422.png?raw=true "Screenshot")

You can do the same in production mode, the differences between them are the webpack confg file. Also, you should run `gulp prod` and `gulp lc-prod`

Read the gulpfile and webpack config file if you want to make some improvements.

## Behind This Whole Idea

1. Bundle the resource with digest.

![Screenshot](images/WX20180118-115318@2x.png?raw=true "Screenshot")

2. Upload the bundled scripts to cloud.

![Screenshot](images/WX20180118-115342@2x.png?raw=true "Screenshot")

3. Get the record in cloud storage and pass it to the ejs.

![Screenshot](images/WX20180118-115411@2x.png?raw=true "Screenshot")

4. Get the asset url in front end.

![Screenshot](images/WX20180118-115426@2x.png?raw=true "Screenshot")
