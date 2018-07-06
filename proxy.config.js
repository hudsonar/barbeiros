const proxy = [
  {
    context: '/rs',
    target: 'http://http://localhost:8080/SistemaBarbearia',
    pathRewrite: {'^/rs' : ''}
  }
];
module.exports = proxy;
