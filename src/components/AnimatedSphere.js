import React from "react"
import {Sphere, MeshDistortMaterial} from '@react-three/drei'

export default function AnimatedSphere() {
    return (
        <Sphere visible args={[1, 100, 200]} scale={3}>
            <MeshDistortMaterial color="#c60000" attach="material"
            distort={.03}
            speed={1}
            />
        </Sphere>
    )
}