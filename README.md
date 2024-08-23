# Real-Time Chat Application

This is a real-time chat application built with Vanilla JavaScript and Socket.IO. The application allows users to join different chat rooms and communicate in real-time.

## Features

- **Real-Time Messaging**: Instant messaging between users in the same chat room.
- **Multiple Rooms**: Users can join different chat rooms.
- **User-Friendly Interface**: Simple and intuitive UI for seamless user interaction.

## Technologies Used

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **WebSockets**: Socket.IO

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/akshayBhardwaj23/basic-chat-app-with-socketio.git
    ```

2. Navigate to the project directory:

    ```bash
    cd basic-chat-app-with-socketio
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the server:

    ```bash
    npm run dev
    ```

2. Open your web browser and navigate to:

    ```
    http://localhost:3000
    ```

3. Enter a username, select a room, and start chatting!

## How It Works

- **Socket.IO** is used for real-time, bidirectional communication between the server and clients.
- Users can join different rooms, which are managed by Socket.IO.
- Messages are broadcasted to all users within the same room.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to contact me at akshaybhardwaj96.ab@gmail.com.
