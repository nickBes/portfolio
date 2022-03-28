import React from "react"
import Heading from "@/components/heading"
import Intro from "@/components/intro"
import {
    Group,
    Container,
    Center,
    Title,
    Grid,
} from "@mantine/core"

const App : React.FC = () => {
    return (
        <Container size="xl">
            <Group direction="column" position="center" grow spacing="xl">
                <Heading/>
                <Intro/>
                <Center>
                    <Title>Skills & Services</Title>
                </Center>
                <Grid>
                    <Grid.Col span={6}></Grid.Col>
                    <Grid.Col span={6}></Grid.Col>
                </Grid>
            </Group>
        </Container>
    )
}

export default App