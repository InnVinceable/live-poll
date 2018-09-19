FROM resin/raspberrypi-node

WORKDIR /usr/src/app

COPY package.json package.json

RUN JOBS=MAX npm install --production --unsafe-perm && npm cache clean && rm -rf /tmp/*

COPY . ./

RUN npm run build

ENV INITSYSTEM on


CMD [ "npm", "start" ]