import React, { useEffect, useState } from "react"
import {
    Header,
    Title,
    Transition
} from "@mantine/core"

const Heading : React.FC = () => {
    const  [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <Header height="5vmin" sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Transition transition="slide-right" duration={1000} mounted={mounted}>
                {(styles) => <Title style={styles}>nickbes</Title>}
            </Transition>
        </Header>
    )
}

export default Heading