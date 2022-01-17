import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyled } from 'stylesheet/Button/Button.styled';
import { Divider, TextP } from 'stylesheet/Text/Text.styled';

export default function LoginContainer() {
  return (
    <>
      <div style={{ marginTop: '4.6875rem' }}>
        <ButtonStyled purple w100>Login to TIKI</ButtonStyled>
        {/* <Divider style={{ marginTop: '100px' }} /> */}
        {/* <TextP>
          Don't have an account yet? Click here to <a href="https://id.tiki.vn/register">Register</a>
        </TextP> */}
      </div>
    </>
  );
}
