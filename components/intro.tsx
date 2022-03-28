import React from "react"
import Image from "next/image"
import MainText from "@/components/intro/main_text"
import LaptopImage from "@/public/laptop.jpg"
import {
    Grid
} from "@mantine/core"

const Intro : React.FC = () => {
    return (
        <Grid align="center" justify="space-evenly" grow gutter="xl">
            <Grid.Col md={12} lg={6}>
                <MainText/>
            </Grid.Col>
            <Grid.Col md={12} lg={6}>
                <Image priority src={LaptopImage}/>
            </Grid.Col>
        </Grid>
    )
}

export default Intro