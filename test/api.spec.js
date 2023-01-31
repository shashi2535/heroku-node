const { expect } = require('chai')
const chai = require('chai')
const server = require('../index')
const chai_http = require('chai-http')
chai.use(chai_http)
describe('Task 1', function () {
    it('get api', function (done) {
        chai.request(server)
            .get('/')
            .end((err, response) => {
                console.log('>>>>>>>>', JSON.parse(response.text))
                expect(JSON.parse(response.text).success).to.be.equal(true)
                done()
            })
    })
})
