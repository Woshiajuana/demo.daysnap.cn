import './index.scss'
import 'src/components/header'
import './components/footer'
import { omit, pick } from '@daysnap/utils'

const data = { a: 1, b: 2, c: 3 }

const res = pick(data, ['a'])
const res2 = omit(data, ['a'])
console.log('res => ', res, res2)
