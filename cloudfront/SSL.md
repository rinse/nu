# How to enable SSL on your server

1. Run `sls -v deploy` here.
1. Issue your certificate on ACM.
    1. Go to https://console.aws.amazon.com/acm/
    2. Request a public certificate with a domain name which you own.
    3. If you select DNS to verify, you add a CNAME which is given by ACM.
1. Wait for your certificate issued.
1. Go to CloudFront and edit your distribution.
    1. Add an alternate domain name which matches your certificate.
    2. Add a SSL certificate which has been issued.
