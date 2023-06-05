# # build environment
# FROM node:12.13.0-alpine as react-build
# RUN echo -e "http://nl.alpinelinux.org/alpine/v3.5/main\nhttp://nl.alpinelinux.org/alpine/v3.5/community" > /etc/apk/repositories
# RUN apk add python2
# WORKDIR /app
# COPY . ./
# RUN yarn install
# RUN yarn build


# # server environment
# FROM nginx:1.23.4-alpine
# # RUN echo -e "http://nl.alpinelinux.org/alpine/v3.5/main\nhttp://nl.alpinelinux.org/alpine/v3.5/community" > /etc/apk/repositories
# # RUN apk add python2 make g++

# COPY frontend.conf /etc/nginx/conf.d/configfile.template

# COPY --from=react-build /app/build /usr/share/nginx/html

# ENV PORT 8080
# ENV HOST 0.0.0.0
# EXPOSE 8080
# CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

# Run locally
FROM node:12.13.0-alpine as react-build
RUN echo -e "http://nl.alpinelinux.org/alpine/v3.5/main\nhttp://nl.alpinelinux.org/alpine/v3.5/community" > /etc/apk/repositories
RUN apk add python2
WORKDIR /app
COPY . /app/
RUN yarn install
EXPOSE 3000
CMD [ "yarn", "start" ]