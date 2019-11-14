import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

import Notifications from '~/components/Notifications';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  function handleSignOut(data) {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <h1>Gustavo</h1>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <span>
                <Link to="/profile">Meu perfil</Link>
                <a onClick={handleSignOut}>Sair</a>
              </span>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
