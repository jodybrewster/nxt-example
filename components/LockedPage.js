

import React from 'react';
import Link from 'next/link';
import { Box, Grid, Button, Text, Heading, Paragraph, List } from 'grommet';
import { User } from 'grommet-icons';


const LockedPage = () => (
    <Box align="start" justify="start" fill="horizontal">
    <Grid columns={["3/4", "1/4"]} fill="horizontal">
        <Box align="start" justify="start" elevation="none" fill="horizontal" pad="small" wrap={false}>
            <Box align="start" justify="start" elevation="none" fill="horizontal" pad="small" wrap={false} background={{ "color": "light-1" }}>
                <Text>
                    Locked Page
                </Text>
                <Heading size="small" truncate={false} margin="none">
                Locked Page
                </Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Facilisi etiam dignissim diam quis enim lobortis. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Metus aliquam eleifend mi in. Mi sit amet mauris commodo quis imperdiet. Sodales ut etiam sit amet nisl. Quisque id diam vel quam elementum pulvinar. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Pharetra et ultrices neque ornare. Sagittis eu volutpat odio facilisis mauris sit. Velit scelerisque in dictum non consectetur a erat. Tortor condimentum lacinia quis vel eros. Dui ut ornare lectus sit amet est placerat.
                </Paragraph>
                <Heading size="xsmall">
                    Lorem Ipsum
                </Heading>
                <List data={[{ "name": "Key Point 1", "count": 5 }, { "name": "Key Point 2", "count": 7 }]} />
            </Box>
            <Heading size="xsmall">
                Lorem Title
              </Heading>
            <Box align="start" justify="start" elevation="none" fill="horizontal" pad="small" wrap={false} background={{ "color": "light-1" }} direction="row" gap="small">
                <Box align="center" justify="start" direction="column" alignSelf="center">
                    <User size="large" />
                    <Text>
                        character
                  </Text>
                    <Text>
                        character
                  </Text>
                </Box>
                <Box align="center" justify="center" alignSelf="end">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Facilisi etiam dignissim diam quis enim lobortis. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Metus aliquam eleifend mi in. Mi sit amet mauris commodo quis imperdiet. Sodales ut etiam sit amet nisl. Quisque id diam vel quam elementum pulvinar. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Pharetra et ultrices neque ornare. Sagittis eu volutpat odio facilisis mauris sit. Velit scelerisque in dictum non consectetur a erat. Tortor condimentum lacinia quis vel eros. Dui ut ornare lectus sit amet est placerat.
                  </Paragraph>
                </Box>
            </Box>
        </Box>
        <Box align="stretch" justify="start" elevation="none" width="small" fill="horizontal" gap="small" pad="small">
            <Box align="center" justify="center" elevation="none" width="small" background={{ "color": "light-1" }} fill="horizontal" height="medium">
                <Box align="center" justify="end" />
                <Button label="Buy Now" />
            </Box>
            <Box align="start" justify="start" elevation="none" fill="horizontal" pad="small" wrap={false} background={{ "color": "light-1" }} direction="column" gap="small">
                <Box align="center" justify="start" direction="column" alignSelf="center">
                    <User size="large" />
                    <Text>
                        character
                  </Text>
                    <Text>
                        character
                  </Text>
                </Box>
                <Box align="center" justify="center" alignSelf="end">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Paragraph>
                </Box>
            </Box>
        </Box>
    </Grid>
</Box>
)

export default LockedPage;
