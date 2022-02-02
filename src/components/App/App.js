import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, WEIGHTS } from '../../constants';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <AppWrapper>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  --color-white: ${COLORS.white};
  --color-gray-100: ${COLORS.gray[100]};
  --color-gray-300: ${COLORS.gray[300]};
  --color-gray-500: ${COLORS.gray[500]};
  --color-gray-700: ${COLORS.gray[700]};
  --color-gray-900: ${COLORS.gray[900]};
  --color-primary: ${COLORS.primary};
  --color-secondary: ${COLORS.secondary};

  --font-weight-normal: ${WEIGHTS.normal};
  --font-weight-medium: ${WEIGHTS.medium};
  --font-weight-bold: ${WEIGHTS.bold};
`;

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
