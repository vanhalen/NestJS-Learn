FROM node:10.16.3

# COPY init.dev.sh /app/
COPY ./ /app/
# RUN mkdir /app/api
WORKDIR /app
# CMD docker/init.dev.sh
# CMD /app/src/docker/init.dev.sh
CMD /app/init.dev.sh