import * as three from "three";

const scene = new three.Scene();
scene.background = new three.Color(0x0000FF);
const camera = new three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new three.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new three.BoxGeometry( 1, 1, 1 );
const material = new three.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new three.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
  renderer.render(scene, camera);
  console.log(cube.position.x)
  cube.position.x += 0.01
  cube.position.y += 0.01
  cube.position.z += 0.01
}

renderer.setAnimationLoop( animate );
