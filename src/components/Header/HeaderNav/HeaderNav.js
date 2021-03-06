import React from 'react';
import styled from 'styled-components';
import HeaderNavItem from '../HeaderNavItem';
import withNavItems from '../../../StaticData/withNavItems';

const Container = styled.div`
  display: flex;
  font-size: 1.5rem;
  border-right: 1px #505050 solid;
  line-height: 1.2;
`;

const HeaderNav = ({sortedNavItems}) => (
  <Container>
    {sortedNavItems &&
      sortedNavItems.map(({name, subNav}) => (
        <HeaderNavItem key={name} title={name} subNav={subNav} />
      ))}
  </Container>
);
export default withNavItems(HeaderNav);
