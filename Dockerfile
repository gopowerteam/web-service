FROM node:12.3.1-slim


#========================================华丽的分割线========================================
FROM node:12.13.0-slim

ADD . /usr/opt/web-service

WORKDIR /usr/opt/web-service

ENTRYPOINT [ "npm","run",'start' ]

EXPOSE 8080




