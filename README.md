# Big Panda Exercise

A simple stream processing service that also exposes an HTTP interface


## Run Tests

### Unit Tests
`$ grunt test`

### Integration Tests
`$ grunt integration`

## Usage
1. Run the service with:
`$ ./generator-linux-amd64 | node ./main.js`

2. In order to get stats, perform an HTTP GET request to: http://localhost:8080/api/stats