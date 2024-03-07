export class DatabaseService {
  save(email: string, price: number, timestamp: Date) {
    console.log(
      `Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`
    );
  }
}
