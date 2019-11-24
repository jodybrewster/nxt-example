import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Box, Grid, Button, Anchor, Text } from 'grommet';

const OAAnchor = styled(Anchor)`

font-weight: 400;
text-decoration: none;
&:hover {
  text-decoration: none;

}
`;
const OAAnchorLine = styled(OAAnchor)`

`;

const Nav = () => (
  <Box align="center" justify="start" alignSelf="start" direction="row" fill="horizontal" elevation="xsmall" background={{ "color": "white" }}>

    <Grid rows="xxsmall" columns={["3/4", "1/4"]} fill="horizontal">
      <Box align="center" justify="start" gap="small" alignSelf="center" direction="row" fill="horizontal">
        <Box align="center" justify="center" elevation="none" pad="medium" wrap={false}>
          <Text pad="small">Logo</Text>
        </Box>
        <OAAnchorLine label="Menu 1" href="/" color="dark-2" />
        <OAAnchorLine label="Menu 2" href="/" color="dark-2" />
        <OAAnchorLine label="Menu 3" href="/" color="dark-2" />
      </Box>
      <Box align="center" justify="end" gap="small" alignSelf="center" direction="row" fill="horizontal" pad="small">
        <OAAnchor label="Login" href="/login" color="dark-2" />
        <Button label="Sign Up" primary={true} style={{ whiteSpace: 'nowrap', borderRadius:'6px', padding: '2px 11px', fontWeight: '500'}} />
      </Box>
    </Grid>
  </Box>
)

export default Nav
