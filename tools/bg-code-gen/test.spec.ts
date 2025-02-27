import { expect } from 'chai'
import codeGen from '../../index.js'
import config from './config.js'

describe('bg-node-client', () => {
  it('runs the code generator for bg-node-client', async () => {
    const result = await codeGen(config)
    expect(result).to.equal(0)
  })
})
