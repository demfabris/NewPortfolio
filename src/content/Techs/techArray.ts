interface ITech {
  category: string[]
  imgSrc: string
  bgColor?: string
  objectFit?: 'cover' | 'contain' | undefined
}

export const techArray: ITech[] = [
  {
    category: ['cloud', 'all'],
    imgSrc: 'assets/aws.png',
  },
  {
    category: ['languages', 'all'],
    imgSrc: 'assets/python.png',
    bgColor: '#fff',
  },
  {
    category: ['cloud', 'all'],
    imgSrc: 'assets/google.png',
    bgColor: '#fff',
  },
  {
    category: ['languages', 'all'],
    imgSrc: 'assets/javascript.png',
  },
  {
    category: ['all', 'tooling'],
    imgSrc: 'assets/git.png',
    bgColor: 'var(--dark-bg0-h)',
    objectFit: 'contain',
  },
  {
    category: ['languages', 'all'],
    imgSrc: 'assets/typescript.png',
  },
  {
    category: ['all', 'tooling'],
    imgSrc: 'assets/linux.png',
  },
  {
    category: ['all', 'tooling', 'cloud'],
    imgSrc: 'assets/travis.png',
    bgColor: 'var(--dark-bg0-h)',
  },
  {
    category: ['all', 'frontend', 'frameworks'],
    imgSrc: 'assets/react.png',
  },
  {
    category: ['all', 'tooling'],
    imgSrc: 'assets/webpack.png',
    bgColor: '#fff',
  },
  {
    category: ['backend', 'all'],
    imgSrc: 'assets/nodejs.png',
    bgColor: 'var(--dark-bg0-h)',
  },
  {
    category: ['all', 'languages'],
    imgSrc: 'assets/sql.png',
    bgColor: '#fff',
  },
  {
    category: ['all', 'backend', 'frameworks'],
    imgSrc: 'assets/flask.png',
    bgColor: '#fff',
    objectFit: 'contain',
  },
  {
    category: ['all', 'databases'],
    imgSrc: 'assets/mongodb.png',
    bgColor: '#fff',
  },
  {
    category: ['all', 'databases', 'frameworks', 'backend'],
    imgSrc: 'assets/sequelize.png',
    bgColor: '#fff',
  },
  {
    category: ['all', 'databases'],
    imgSrc: 'assets/mysql.png',
    bgColor: '#fff',
  },
  {
    category: ['all', 'frontend', 'tooling', 'frameworks'],
    imgSrc: 'assets/sass.png',
    bgColor: '#fff',
  },
  {
    category: ['all', 'databases'],
    imgSrc: 'assets/postgre.svg',
    bgColor: '#fff',
    objectFit: 'contain',
  },
  {
    category: ['all', 'tooling'],
    imgSrc: 'assets/pandas.png',
    bgColor: '#fff',
    objectFit: 'contain',
  },
  {
    category: ['all', 'backend', 'frameworks'],
    imgSrc: 'assets/express.png',
    bgColor: '#fff',
    objectFit: 'contain',
  },
  {
    category: ['all', 'tooling'],
    imgSrc: 'assets/numpy.png',
    bgColor: '#fff',
  },
  {
    category: ['all', 'databases'],
    imgSrc: 'assets/redis.png',
    bgColor: 'var(--dark-bg0-h)',
    objectFit: 'contain',
  },
  {
    category: ['all', 'backend', 'databases', 'frameworks'],
    imgSrc: 'assets/sqlalchemy.png',
    bgColor: '#fff',
    objectFit: 'contain',
  },
  {
    category: ['all', 'frontend'],
    imgSrc: 'assets/styledcomponents.png',
    bgColor: '#fff',
  },
  {
    category: ['all', 'languages'],
    imgSrc: 'assets/bash.png',
    bgColor: '#fff',
  },
]
