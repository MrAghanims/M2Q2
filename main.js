import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );


//Cube
const cubeGeo = new THREE.BoxGeometry(1,1,1);
const cubeMat = new THREE.MeshMatcapMaterial({color: 0x00FFFF});
const cube = new THREE.Mesh( cubeGeo, cubeMat );
scene.add(cube);
cube.position.y = 1;
cube.position.x = 1.2;

//Cone
const coneGeo = new THREE.ConeGeometry(2, 5, 5); 
const coneMat = new THREE.MeshMatcapMaterial({color: 0x7B3F00, transparent : true, opacity : 1});
const cone = new THREE.Mesh(coneGeo, coneMat);
scene.add(cone);
cone.position.y = -2.1;
cone.rotation.x = 9.5;

//Circle
const circGeo = new THREE.CircleGeometry(4, 15, 20); 
const circMat = new THREE.MeshBasicMaterial({color: 0xEADDCA}); 
const circle = new THREE.Mesh(circGeo, circMat); 
scene.add(circle);
circle.position.y = -0.5;

//Sphere
const sphGeo = new THREE.SphereGeometry(1.6, 32, 16);
const sphMat = new THREE.MeshMatcapMaterial({color: 0xFFFDD0});
const sphere = new THREE.Mesh(sphGeo, sphMat);
scene.add(sphere);
sphere.position.y = 0.5;

//Torus
const torGeo = new THREE.TorusGeometry(0.5, 0.2, 15, 20); 
const torMat = new THREE.MeshMatcapMaterial({color: 0xFFB6C1}); 
const torus = new THREE.Mesh(torGeo, torMat); 
scene.add(torus);
torus.position.y = 2.3;

camera.position.z = 10;

function animate() {

    cube.rotation.x -= 0.01;
    cube.rotation.y = 4;
    cube.rotation.z += 0.01;

    cone.rotation.y -= 0.01;

    circle.rotation.x = -1.6;
    circle.rotation.z -= 0.01;

    sphere.rotation.z += 0.5;
    sphere.rotation.y += 0.5;

    torus.rotation.y += 0.01;
    torus.rotation.x -= 0.01;
    torus.rotation.z -= 0.01;

	renderer.render( scene, camera );
}