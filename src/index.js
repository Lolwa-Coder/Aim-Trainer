import React, { useState, useRef } from "react";
import * as THREE from 'three'
import ReactDOM from "react-dom";
import { Canvas, extend, useFrame} from "react-three-fiber";
import { Text } from '@react-three/drei'
import * as meshline from 'threejs-meshline'


import "./styles.css";

extend(meshline)

const numLines = 100
const lines = new Array(numLines).fill()
const colors = ['#000000']
function Fatline() {
  const material = useRef()
  const [color] = useState(() => colors[parseInt(colors.length * Math.random())])
  const [ratio] = useState(() => 0 + 0.5 * Math.random())
  const [width] = useState(() => Math.max(0.1, 0.2 * Math.random()))
  // Calculate wiggly curve
  const [curve] = useState(() => {
    let pos = new THREE.Vector3(45 - 90 * Math.random(), 5, 10 - 20 * Math.random())
    const points = new Array(30).fill().map(() => pos.add(new THREE.Vector3(2 - Math.random() * 4, 4 - Math.random() * 2, 5 - Math.random() * 10)).clone())
    return new THREE.CatmullRomCurve3(points).getPoints(500)
  })
  // Hook into the render loop and decrease the materials dash-offset
  useFrame(() => (material.current.uniforms.dashOffset.value -= 0.0005))
  return (
    <mesh>
      <meshLine attach="geometry" vertices={curve} />
      <meshLineMaterial attach="material" ref={material} transparent depthTest={false} lineWidth={width} color={color} dashArray={0.1} dashRatio={ratio} />
    </mesh>
  )
}
function Scene() {
  let group = useRef()
  let theta = 0
  // Hook into the render loop and rotate the scene a bit
  useFrame(() => group.current.rotation.set(0, 5 * Math.sin(THREE.Math.degToRad((theta += 0.02))), 0))
  return (
    <group ref={group}>
      {lines.map((_, index) => (
        <Fatline key={index} />
      ))}
    </group>
  )
}

function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={20}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}
function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={20}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}
function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={20}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}
function Title() {
  return <Text material-toneMapped={false}>MicroFlix</Text>
}
function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -5, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />{" "}
    </mesh>
  );
}
function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -10]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function Sphere1() {
  const [count1, setCount1] = useState(0);
  console.log(count1);
  const [white, setWhite] = useState("red");
  const changer = () => {
    return (
      "rgb( " + (250 - count1 * 5) + "," + count1 * 5 + "," + count1 * 5 + ")"
    );
  };

  return (
    <>
      <mesh
        visible
        userData={{ test: "hello" }}
        position={[
          -1.5 + 3 * Math.random(),
          -0.5 + 2 * Math.random(),
          2 - 10 * Math.random()
        ]}
        castShadow
        onClick={() => {
          setCount1(count1 + 1);
          setWhite(changer());
        }}
      >
        <sphereGeometry attach="geometry" args={[0.5, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color={white}
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    </>
  );
}

function App() {
  const [signIn, setSignIn] = useState(false);
  const [countO, setCountO] = useState(50);
  const [exit, setExit] = useState(false);
  const [bg, setBg] = useState("white");

  const changer = () => {
    return (
      "rgb( " +
      (50 + countO * 4) +
      "," +
      (50 + countO * 4) +
      "," +
      (50 + countO * 4) +
      ")"
    );
  };

  if (signIn === false)
    return (
      <><Canvas style={{ background: '#324444' }} camera={{ position: [0, 50, 10], fov: 75 }}><Scene /></Canvas>
        <h1 onClick={() => setSignIn(true)}>MicroFlix</h1>
        <h2>
          {" "}
          shoot 50 bullets and we will guess your rank. ps- it gets darker
        </h2>
      </>
    );
  else if (exit === true)
    return (
      <div>
        <h4>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Click here to see Ur rank
          </a>
        </h4>
      </div>
    );
  else
    return (
      <div
        onClick={() => {
          setCountO(countO - 1);
          setBg(changer());
          if (countO < 2) {
            setCountO(50);
            setExit(true);
          }
        }}
      >
        <h3 className="unselectable">{countO}</h3>
        <Canvas >
          
          <Title />
          <GroundPlane color={bg} />
          <BackDrop color={bg} />
          <KeyLight color={bg} />
          <RimLight color={bg} />
          <FillLight color={bg} />
          <Sphere1 />
        </Canvas>
      </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
