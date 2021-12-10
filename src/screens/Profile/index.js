import React from "react";
import { Container } from "./styles";
import { Header, Spacing } from "../../components";
import { Avatar, Name, Email, Wrapper, Store } from "./styles";
import db from '../../db.json';
import { shadow } from "../../theme/shadows";

export default function Profile() {
  return (
    <Container>
      <Header title="Perfil" />
      <Spacing />
      <Avatar source={{uri: db.user.avatar }} />
      <Spacing />
      <Name>{db.user.name}</Name>
      <Spacing />
      <Email>{db.user.email}</Email>
      <Spacing />
      <Wrapper style={shadow.primary}>
        {db.user.stores.map((item, index) => (
          <Store key={index}>{item.store} {item.city}</Store>
        ))}
      </Wrapper>
    </Container>
  );
}
