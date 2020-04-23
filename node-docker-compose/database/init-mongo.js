db.createUser(
  {
    user: 'dbuser',
    pwd: 'password',
    roles: [ { role: 'root', db: 'admin' } ]
  }
);