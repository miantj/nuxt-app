#!/usr/bin/env bash

# 删除旧的镜像
docker rmi minglyle/nuxt-docker:v1.0

# 编译
docker build -f ./Dockerfile.nuxt -t minglyle/nuxt-docker:v1.0 .

# 推送
docker push minglyle/nuxt-docker:v1.0