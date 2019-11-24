


import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Box, Grid, Button, Anchor, Text, Paragraph } from 'grommet';


const Review = (props) => (
    <Box align="start" justify="start" elevation="small" fill="horizontal" pad="medium" wrap={false} background={{ "color": "light-1" }} direction="row" gap="large">
        <Box align="center" justify="start" direction="column" alignSelf="center">
            {props.AvatarUser}
            <Text weight="bold" style={{width:"150px"}} truncate={true}>
                Character Character
            </Text>
            <Text truncate={true}>
                character testing
            </Text>
        </Box>
        <Box align="center" justify="center" alignSelf="end">
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. 
            </Paragraph>
        </Box>
        
    </Box>
);

export default Review
