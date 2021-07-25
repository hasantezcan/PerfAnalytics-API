# PerfAnalytics API

PerfAnalytics API is part of PerfAnalytics ecosystem which collects and criticizes web performance data.

**PerfAnalytics API,** record metric comes from [**PerfAnalytics JS**](https://github.com/hasantezcan/PerfAnalytics-js). And serves to [PerfAnalytics Dashboard](https://github.com/hasantezcan/PerfAnalytics-Dashboard) for display them.

## Tech Stack

- Developed with [ExpressJs](http://expressjs.com/)
- Used [Typescript](https://www.typescriptlang.org/).
- Used [MongoDB](https://www.mongodb.com) to record metrics.
- Deployed with [Heroku](https://www.heroku.com/).

> **Dockerfile** is ready if you want to use the dockerized version you can use it!
---
# REST API

## `POST` Create metric

### Request

`POST /api/metrics`

```bash
 curl -X POST -H "Content-Type: text/plain" \
    -d '{
    "URL": "https://hasantezcan.dev",
    "UserAgent": "Iphone 12",
    "FCP": 1.11,
    "TTFB": 1.12,
    "DomLoad": 0.0510,
    "WindowLoad": 0.512,
    "Entries": []
}' \
    https://perfanalytics-api-ht.herokuapp.com/api/metrics
```
### Response

```bash
{
  "_id": "60fac5c7941cbc0015ae1715",
  "URL": "https://hasantezcan.dev",
  "UserAgent": "Iphone 12",
  "FCP": 1.11,
  "TTFB": 1.12,
  "DomLoad": 0.051,
  "WindowLoad": 0.512,
  "Entries": [],
  "createdAt": "2021-07-23T13:36:07.602Z",
  "updatedAt": "2021-07-23T13:36:07.602Z",
  "__v": 0
}

```

## `GET` Get all metrics

### Request

`GET /api/metrics`

```bash
curl -i -H 'Accept: application/json' https://perfanalytics-api-ht.herokuapp.com/api/metrics
```

- **`start:`** **ISO 8601 Date** 
- **`end:`** **ISO 8601 Date** 

```bash
curl -G --data-urlencode "start=2021-07-23T13:26:26.166Z" --data-urlencode "end=2021-07-23T14:26:26.166Z" https://perfanalytics-api-ht.herokuapp.com/api/metrics
```

### Response

```bash
HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
X-Powered-By: Express
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 13011
Etag: W/"32d3-WY5+bz9yxUPt+/f8gpTAF62L5Og"
Date: Fri, 23 Jul 2021 13:17:56 GMT
Via: 1.1 vegur


[
    {
        "_id": "60fabed8941cbc0015ae1705",
        "UserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
        "URL": "https://react-metrics.netlify.app/",
        "TTFB": 0.056530000001657754,
        "DomLoad": 0.5764300000009825,
        "WindowLoad": 0.5764699999999721,
        "FCP": 0.4420200000022305,
        "Entries": [
            {
                "name": "https://react-metrics.netlify.app/static/css/main.8c8b27cf.chunk.css",
                "initiatorType": "link",
                "responseEnd": 0.2477900000012596,
                "transferSize": 910
            },
            {
                "name": "https://hasantezcan.github.io/PerfAnalytics-Js/src/index.js",
                "initiatorType": "script",
                "responseEnd": 0.24904000000242377,
                "transferSize": 0
            },
            {
                "name": "https://react-metrics.netlify.app/static/js/2.0f1148b1.chunk.js",
                "initiatorType": "script",
                "responseEnd": 0.24632500000006985,
                "transferSize": 40789
            },
            {
                "name": "https://react-metrics.netlify.app/static/js/main.5113f01c.chunk.js",
                "initiatorType": "script",
                "responseEnd": 0.29684500000439584,
                "transferSize": 714
            },
            {
                "name": "https://react-metrics.netlify.app/static/media/logo.6ce24c58.svg",
                "initiatorType": "img",
                "responseEnd": 0.49205000000074506,
                "transferSize": 1331
            },
            {
                "name": "https://react-metrics.netlify.app/favicon.ico",
                "initiatorType": "img",
                "responseEnd": 0.5317900000009104,
                "transferSize": 3979
            }
        ],
        "createdAt": "2021-07-23T13:06:32.288Z",
        "updatedAt": "2021-07-23T13:06:32.288Z",
        "__v": 0
    }
]
```

## `GET` Geta all URL metrics

> Get all metrics record sorted by URL

### Request

`GET /api/metrics-by-url`

```bash
curl -i -H 'Accept: application/json' https://perfanalytics-api-ht.herokuapp.com/api/metrics-by-url
```

- **`start:`** **ISO 8601 Date** 
- **`end:`** **ISO 8601 Date** 

```bash
curl -G --data-urlencode "start=2021-07-23T13:26:26.166Z" --data-urlencode "end=2021-07-23T14:26:26.166Z" https://perfanalytics-api-ht.herokuapp.com/api/metrics-by-url
```
### Response

```bash
HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
X-Powered-By: Express
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 2625
Etag: W/"a41-naajhMnCdRUUgBtb6dnWLmnE9a8"
Date: Fri, 23 Jul 2021 13:17:30 GMT
Via: 1.1 vegur


[
    {
        "URL": "https://react-metrics.netlify.app/",
        "TTFB": [
            {
                "time": "2021-07-23T13:06:20.621Z",
                "value": 0.11462000000028638
            }
        ],
        "FCP": [
            {
                "time": "2021-07-23T13:06:32.288Z",
                "value": 0.4420200000022305
            }
        ],
        "DomLoad": [
            {
                "time": "2021-07-23T13:06:20.621Z",
                "value": 1.187725000003411
            }
        ],
        "WindowLoad": [
            {
                "time": "2021-07-23T13:06:20.621Z",
                "value": 1.1877750000057858
            }
        ]
    }
]
```


## `GET` Health check

### Request

`GET /api/healthcheck`

```bash
curl -i -H 'Accept: application/json' https://perfanalytics-api-ht.herokuapp.com/api/healthcheck
```
### Response

```bash
HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
X-Powered-By: Express
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 13011
Etag: W/"32d3-WY5+bz9yxUPt+/f8gpTAF62L5Og"
Date: Fri, 23 Jul 2021 13:17:56 GMT
Via: 1.1 vegur


OK
```

---

## Dev Logs

You can reach my [**`dev logs`**](DEVLOGS.md) about this project! 

## Commit message convention

I use [this](https://www.conventionalcommits.org) commit message conventions standard in this project.
> https://www.conventionalcommits.org
 
## License

[MIT](/LICENSE)