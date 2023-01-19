import exp from 'constants'
import {sum} from '../src/sum'

test('sum is sum', () => {
    expect(sum(3,5)).toEqual(8);
})