import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const light = new THREE.AmbientLight( 0x404040, 25 ); // soft white light
scene.add( light );

const light2 = new THREE.PointLight( 0xFFC0CB, 2, 100 );
light2.position.set( -6.5, 0, 6 );
scene.add( light2 );

const light3 = new THREE.PointLight( 0xFFC0CB, 1.5, 100 );
light3.position.set( 1, 1, 3);
scene.add( light3 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );

controls.target.set(1, .5, 3.6)
controls.maxDistance = 4;
controls.enablePan = false
controls.minDistance = .5

camera.position.set(3, .5, 6)

function onWindowResize() {
  // Get the new window dimensions
  const width = window.innerWidth;
  const height = window.innerHeight;
renderer.setSize( width, height );

camera.aspect = width / height;

camera.updateProjectionMatrix();
}

window.addEventListener('resize', onWindowResize);
onWindowResize();controls.target.set(1, .5, 3.6)
controls.maxDistance = 4;
controls.enablePan = false
controls.minDistance = .5

camera.position.set(3, .5, 6)


window.addEventListener('resize', onWindowResize);
onWindowResize();


// objects

let comp ;


loader.load(
	"src/test-cube.gltf",
	function ( gltf ) {
    comp = gltf.scene
    comp.position.set(-.6, 0, 3.6)
    //comp.scale.set(2, 2, 2)
		scene.add( gltf.scene )
	},
  (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}, 
(error) => {
    console.error('An error happened', error);
}
);

function animate() {
  requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );

}
renderer.setAnimationLoop( animate );