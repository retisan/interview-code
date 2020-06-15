const socket = new WebSocket("ws://192.168.150.55:20512/websocket/WS:1q2w3e3e4r2324");

socket.onopen = () => {
    console.warn("open");
};

socket.onmessage = (data) => {
    console.warn(data);
}

