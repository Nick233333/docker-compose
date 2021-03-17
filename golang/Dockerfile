FROM golang:1.16-alpine3.13

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

LABEL maintainer="Nick"

WORKDIR /app

COPY . .

RUN go build -o main ./code/main.go
EXPOSE 8080
CMD ["./main"]
