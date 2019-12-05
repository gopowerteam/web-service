FROM node:12.3.1-slim


#========================================华丽的分割线========================================
FROM node:12.13.0-slim

ADD . /usr/opt/web-service/

WORKDIR /usr/opt/web-service

RUN ifconfig
RUN yarn config set registry https://registry.npm.taobao.org/ \
  && yarn \
  && npm run build \
  && rm -rf src test

ENTRYPOINT [ "node", "dist/main" ]

EXPOSE 8080




