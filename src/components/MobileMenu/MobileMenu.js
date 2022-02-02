/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <StyledContent>
        <UnstyledButton onClick={onDismiss}>
          <VisuallyHidden>Close</VisuallyHidden>
          <Icon id="close" strokeWidth={1} />
        </UnstyledButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </StyledContent>
    </StyledOverlay>
  );
};

const StyledOverlay = styled(DialogOverlay)`
  position: absolute;
  background-color: hsla(220, 5%, 40%, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 0;
  left: 0;
`;

const StyledContent = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  background: var(--color-white);
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 22px 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-900);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: var(--color-gray-700);
`;

export default MobileMenu;
