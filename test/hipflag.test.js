import axios from 'axios'
import Hipflag from './../index'

jest.mock('axios')
axios.create.mockImplementation(() => axios)

describe('Hipflag', () => {
  describe('getFlag', () => {
    const client = new Hipflag({ publicKey: 'public-key' })
    const data = { active: false, name: 'flag-name' }

    it("returns flag info", async () => {
      client.apiClient.get.mockImplementation(() => Promise.resolve(data))

      await client.getFlag('flag-name').then(flag => {
        expect(flag).toEqual(data)
      })
    })
  })
})
