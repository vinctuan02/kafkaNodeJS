import { Kafka } from 'kafkajs';

// Khởi tạo Kafka
const kafka = new Kafka({
  brokers: ['10.10.12.93:9092']
});

// Tạo producer
const producer = kafka.producer();

// Hàm gửi tin nhắn tới topic
export async function sendMessage(message) {
  try {
    // Kết nối producer
    await producer.connect();

    // Gửi tin nhắn tới topic 'van_tuan'
    await producer.send({
      topic: 'trung',
      messages: [
        { value: message }
      ]
    });

    console.log('Message sent successfully:', message);
  } catch (error) {
    console.error('Error sending message:', error);
  } finally {
    // Đóng kết nối producer
    await producer.disconnect();
  }
}
