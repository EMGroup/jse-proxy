This service can be used to include JSE files using a script tag (assuming you have a function to interpret!).

E.g. if you have this service running at `my-jse-proxy.com` you can do:

```html
<script src="http://my-jse-proxy.com?successCallback=mySuccess&errorCallback=myError&url=https://www.dropbox.com/sh/zyolrocnz9pmih3/AAAfhtkH5kkqmHvPm_Bi-kvSa/hello_world.jse?dl=1"></script>
```

The query params for the service are

* `url` URL to request JSE file from.
* `successCallback` This should be a string which results in a function to
                    handle the content of the file requested. E.g. `'executeEden'` as a global
                    function. The function should expect a string.
* `errorCallback` This should be a string which results in a function to
                  report any errors occured in the proxy. The function should expect a string.

##Requirements:

* Node 0.10.x

##Setup and testing:

```shell
$ npm install
$ PORT=12345 npm start
$ curl "http://localhost:12345?successCallback=mySuccess&errorCallback=myError&url=https://www.dropbox.com/sh/zyolrocnz9pmih3/AAAfhtkH5kkqmHvPm_Bi-kvSa/hello_world.jse?dl=1";
mySuccess("require(\"CanvasHTML5\");\r\npicture is [Text(\"Hello world from my dropbox :)\", 0, 50, \"black\", 36)];");
```
