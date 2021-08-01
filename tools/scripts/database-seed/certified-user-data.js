const userAccounts = [
  {
    id: 1,
    email: 'ame@gmail.com',
    password: '$2y$12$wEILE3pz4JxiwKLwwFRQDOb7G6eTZRtItlAl92PgrtMJGmj4CACYW',
  },
  {
    id: 2,
    email: 'athua@gmail.com',
    password: '$2y$12$wEILE3pz4JxiwKLwwFRQDOb7G6eTZRtItlAl92PgrtMJGmj4CACYW',
  },
];

const users = [
  {
    id: 1,
    firstName: 'Ame',
    lastName: 'Agent',
    isActivated: true,
    userAccountId: 1,
  },
  {
    id: 2,
    firstName: 'Athua',
    lastName: 'BabaF',
    isActivated: false,
    userAccountId: 2,
  },
];

module.exports = {
  userAccounts,
  users,
};
