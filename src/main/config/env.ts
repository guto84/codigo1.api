export default {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'ba2d83a0-7f0d-4428-9d06-f51a53aab32f',
  salt: 12,
  mysqlHost : 'db',
  mysqlUser: 'root',
  mysqlPassword: '1234',
  mysqlDatabase: 'codigo1'
}
