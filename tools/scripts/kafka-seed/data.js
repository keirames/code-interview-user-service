const { Kafka } = require('kafkajs');

const createSeed = async () => {
  try {
    const kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['localhost:9092'],
    });

    const admin = kafka.admin();
    console.log('Connecting...');
    await admin.connect();
    console.log('Connected');

    const numPartitions = 3;

    await admin.createTopics({
      topics: [
        {
          topic: 'javascript',
          numPartitions,
        },
        {
          topic: 'java',
          numPartitions,
        },
        {
          topic: 'golang',
          numPartitions,
        },
        {
          topic: 'python',
          numPartitions,
        },
      ],
    });
    console.log(`Create topics successfully!`);

    await admin.disconnect();
  } catch (error) {
    console.log(error);
  }
};

createSeed();
