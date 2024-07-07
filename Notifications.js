import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Notification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await axios.get('/api/notifications');
      setNotifications(response.data);
    };
    fetchNotifications();
  }, []);

  return (
    <div>
      <h2>通知</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notification;
