

import React from 'react';
import Link from 'next/link';
import { Box, Grid, Button, Text, Heading, Paragraph, List, Image } from 'grommet';
import { User, Checkmark, FacebookOption, Twitter, Instagram, Previous } from 'grommet-icons';
import styled from 'styled-components';

import Review from '../components/Review';

const StyledList = styled(List)`
    columns: 2;
    li {
        border: none; 
        flex-direction: row;
        span {
            padding-left: 0.5rem;
        }
    }

`;

const AvatarUser = styled(User)`
    background-color: #01a982;
    padding: 10px;
    border-radius: 100px;
    fill: #00d0a0;
    stroke: #00d0a0;
    
`;

const AvatarCheckmark = styled(Checkmark)`
    background-color: #01a982;
    padding: 10px;
    border-radius: 100px;
    fill: white;
    stroke: white;
    width: 12px;
    height: 12px;
    
`;

const OAPrevious = styled(Previous)`
    padding: 5px;
    border: 1px solid #01a982;
    border-radius: 100px;
    width: 12px;
    height: 12px;
    margin-left: 1rem;
    
`;




const UnlockedPage = () => (
    <Box align="start" justify="start" fill="horizontal">
        <Box align="start" justify="start" fill="horizontal" gap="xsmall" direction="row" wrap={false}>
            <OAPrevious/>
            <Text>Back</Text>
        </Box>
    <Grid columns={["3/4", "1/4"]} fill="horizontal">
        
        <Box align="start" justify="start" elevation="none" fill="horizontal" pad="small" gap="medium" wrap={false}>
            
            <Box align="start" justify="start" elevation="small" fill="horizontal" pad="medium" wrap={false} background={{ "color": "light-1" }}>
                <Text>
                    Unlocked Page
                </Text>
                <Heading level="1" size="small" truncate={false} margin="none">
                Unlocked Page
                </Heading>
                <Paragraph style={{maxWidth: 'none'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Facilisi etiam dignissim diam quis enim lobortis. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Metus aliquam eleifend mi in. Mi sit amet mauris commodo quis imperdiet. Sodales ut etiam sit amet nisl. Quisque id diam vel quam elementum pulvinar. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Pharetra et ultrices neque ornare. Sagittis eu volutpat odio facilisis mauris sit. Velit scelerisque in dictum non consectetur a erat. Tortor condimentum lacinia quis vel eros. Dui ut ornare lectus sit amet est placerat.
                </Paragraph>
                <hr/>
                <Heading level="2" size="xsmall">
                    Lorem Ipsum
                </Heading>
                <StyledList data={[
                    { "val": "Key Point 1" }, 
                    { "val": "Key Point 2" },
                    { "val": "Key Point 3" },
                    { "val": "Key Point 4" }
                ]}
                primaryKey={item => (
                    <React.Fragment>
                    <AvatarCheckmark/>
                    <Text>
                    {item.val}
                    </Text>
                    </React.Fragment>
                )}
                />
            </Box>
            <Heading level="3" size="small">
                Lorem Title
            </Heading>
            <Review AvatarUser={<AvatarUser size="large"/>}/>
            <Review AvatarUser={<AvatarUser size="large"/>}/>
        </Box>
        <Box align="stretch" justify="start" elevation="none" width="small" fill="horizontal" gap="small" pad="small">
            <Box align="center" justify="center" gap="small" elevation="small" width="small" background={{ "color": "light-1" }} fill="horizontal" height="medium" pad="medium">
                <Text>Lorem Ipsum</Text>
                <Image src="http://fpoimg.com/175x175?text=FPO&bg_color=f0f0f0&text_color=bababa"/>
                <Text>Lorem Ipsum:</Text>
                <Text>$99</Text>
                <Button label="Buy Now" primary={true} style={{borderRadius:'6px'}} />
            </Box>
            <Box align="start" justify="start" elevation="small" fill="horizontal" pad="medium" wrap={false} background={{ "color": "light-1" }} direction="column" gap="small">
                <Box align="start" justify="start" direction="row" gap="small" alignSelf="center">
                    <Box align="start" justify="start" direction="column" alignSelf="center">
                        <AvatarUser size="large" />
                    </Box>
                    <Box align="start" justify="start" direction="column" alignSelf="center">
                        <Text weight="bold"  size="xxsmall" style={{width:"100px"}} truncate={true}>
                            Character2 Character2
                        </Text>
                        <Text truncate={true}>
                            Character2
                    </Text>
                    </Box>
                </Box>
                <Box align="center" justify="center" alignSelf="end">
                  <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Paragraph>
                  <Box align="center" justify="center" direction="row" gap="xsmall">
                    <FacebookOption/><Twitter/><Instagram/>
                  </Box>
                </Box>
            </Box>
        </Box>
    </Grid>
</Box>
)

export default UnlockedPage;
