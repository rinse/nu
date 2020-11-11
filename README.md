# ν

An attempt to make a simple webapp with AWS.

## Build and deploy

Run `npm run deploy` on nu-lambda.
Run `./deploy.bash` on nu-front.
Run `sls -v deploy` on cloudfront.

## Resource Layout

Lambda@Edge provides the same origin to S3 and API Gateway.
Static resources such as HTML, js, etc. are in S3. It calls
APIs on API Gateway via Lambda@Edge.
API Gateway and Lambda don't know anything about front end.

```
Lambda@Edge
↓      ↓
S3      API Gateway
        ↓
        Lambda
```
