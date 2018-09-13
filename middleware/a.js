export default function ({ store, route, redirect, error }) {
  console.log('a')
  if (route.query.id != 1) {
    error({
      message: '你没有访问权限！',
      statusCode: 403
    })
  }
}
