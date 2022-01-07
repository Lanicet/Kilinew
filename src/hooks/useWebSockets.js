import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';



const useWebSockets = ({ userId, enabled, onConnected }) => {
    const ref = useRef(null);
    const [messages, setMessages] = useState([]);

    const send = (msg, senderId) => {
        ref.current!.emit('message', {
            content: msg,
            senderId: senderId,
            userId,
            date: new Date(),
        });
    };

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const socket = io('http://192.168.1.85::9000');

        socket.emit('joinRoom', userId);

        socket.emit('message', (msg) => {
            setMessages((prev) => prev.concat(msg));
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });

        socket.on('connect', () => {
            if (onConnected) {
                onConnected();
            }
        });

        socket.on('reconnect', () => {
            socket.emit('joinRoom', userId);
        });

        ref.current = socket;

        return () => socket.disconnect();
    }, [enabled, userId]);

    return {
        send,
        messages,
    };
};