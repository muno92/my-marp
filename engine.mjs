import mark from 'markdown-it-mark'
import prism from 'markdown-it-prism'

export default ({marp}) => marp
  .use(mark)
  .use(prism)
