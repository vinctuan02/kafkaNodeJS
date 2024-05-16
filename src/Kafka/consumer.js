const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-consumer',
    brokers: ['10.10.12.93:9092']
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const consumeMessages = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'van_tuan', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            });
        },
    });
};

consumeMessages().catch(console.error);
