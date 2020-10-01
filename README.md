# Ballerina - A open source programming language and platform for developer.

This repo hosts the sources of the Ballerina website at <http://ballerinalang.org>.

## How to test?

The website is built as a PHP app but it mostly has client-side HTML content.

You can use the Dockerfile that can be found at repo root folder to test it. Follow the below instructions to build and run it.

* Clone the Ballerina Website Git repository

`$ git clone https://github.com/ballerinalang/website.git`

* Do your changes, and build a docker image out of it.

```
$ cd website
//do important stuff
$ docker build -t ballerinalang-website .
```
* Now, run the Docker image

`$ docker run -d -p 8080:80 --name my-ballerina ballerina-website:latest`

Now, open your browser, and head over to <http://localhost:8080>.

Test away, and send in your changes as pull requests.
