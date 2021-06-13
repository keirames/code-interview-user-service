const { Client } = require('pg');
const { userAccounts, users } = require('./certified-user-data');
const {
  authProviders,
  contests,
  plans,
  challenges,
  testCases,
  subscriptions,
} = require('./mix-data');

const startSeeding = async () => {
  const client = new Client({
    database: 'user_service',
    host: '127.0.0.1',
    port: 1234,
    user: 'postgres',
    password: 1234,
  });

  try {
    await client.connect();

    await Promise.all(
      authProviders.map((ap) =>
        client.query(
          'INSERT INTO external_authentication_providers(name) VALUES($1)',
          Object.values(ap),
        ),
      ),
    );

    await Promise.all(
      contests.map((c) =>
        client.query(
          'INSERT INTO contests(id, title, slug, create_at, update_at, delete_at) VALUES($1, $2, $3, $4, $5, $6)',
          Object.values(c),
        ),
      ),
    );

    await Promise.all(
      plans.map((p) =>
        client.query(
          'INSERT INTO plans(id, name, credits_per_month, price_per_month) VALUES($1, $2, $3, $4)',
          Object.values(p),
        ),
      ),
    );

    await Promise.all(
      userAccounts.map((ua) =>
        client.query(
          'INSERT INTO user_accounts(id, email, password) VALUES($1, $2, $3)',
          Object.values(ua),
        ),
      ),
    );

    await Promise.all(
      users.map((u) =>
        client.query(
          'INSERT INTO users(id, first_name, last_name, is_activated, user_account_id) VALUES($1, $2, $3, $4, $5)',
          Object.values(u),
        ),
      ),
    );

    await Promise.all(
      challenges.map((c) => {
        return client.query(
          'INSERT INTO challenges(id, title, slug, problem, input_format, output_format, challenge_seed, level, points, is_premium, create_at, update_at, delete_at, contest_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',
          Object.values(c),
        );
      }),
    );

    await Promise.all(
      testCases.map((tc) =>
        client.query(
          'INSERT INTO test_cases(text, test_string, challenge_id) VALUES($1, $2, $3)',
          Object.values(tc),
        ),
      ),
    );

    await Promise.all(
      subscriptions.map((s) =>
        client.query(
          'INSERT INTO subscriptions(start_time, end_time, plan_id, user_id) VALUES($1, $2, $3, $4)',
          Object.values(s),
        ),
      ),
    );

    await client.end();
  } catch (error) {
    console.log('Cannot seeding');
    console.log(error);
  }
};

startSeeding();
