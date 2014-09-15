##Requirements:

* Node 0.10.x

##Example usage:

```shell
$ npm install
$ PORT=12345 npm start
$ curl "http://localhost:12345?successCallback=mySuccess&errorCallback=myError&url=https://www.dropbox.com/sh/zyolrocnz9pmih3/AAAfhtkH5kkqmHvPm_Bi-kvSa/hello_world.jse?dl=1";
mySuccess("require(\"CanvasHTML5\");\r\npicture is [Text(\"Hello world from my dropbox :)\", 0, 50, \"black\", 36)];");
```
