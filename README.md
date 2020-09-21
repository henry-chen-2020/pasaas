# posaas

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker (Nginx)

### Build Image
```
docker build -t posture-ui .
docker build --no-cache -t hechen2/posture-ui -f config/docker/Dockerfile .
```
### Run Image
```
docker run -d -p 5050:80 hechen2/posture-ui
```