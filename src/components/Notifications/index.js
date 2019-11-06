import React, { useState } from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationsList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  function handleToggleVisible() {
    setVisible(!visible);
  }
  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationsList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>Você possui um novo item</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Você possui um novo item</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo item</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Você possui um novo item</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo item</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Você possui um novo item</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo item</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationsList>
    </Container>
  );
}
