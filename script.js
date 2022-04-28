
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 6;
camera.position.y = 1;

var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'),antialias: true, precision: 'mediump'});
renderer.setClearColor("#78a0f0");
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth/2, window.innerHeight);



var controls = new THREE.OrbitControls(camera,renderer.domElement);





const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
scene.add( ambientLight );

var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
hemiLight.position.set( 0, 300, 0 );
scene.add( hemiLight );

var dirLight = new THREE.DirectionalLight( 0xffffff );
dirLight.position.set( 75, 300, -75 );
scene.add( dirLight );





const dbzButton = document.getElementById('dbz');
dbzButton.addEventListener('click', function handleDBZ() {
    console.log('dbz clicked');

    
    var loaderDBZ = new THREE.GLTFLoader();

    var kameHouse;
    loaderDBZ.load('models/kame_house/kame.gltf', ( gltf ) =>{
        kameHouse = gltf.scene;
        scene.clear();
        renderer.setClearColor("#38f5ff");
        camera.position.z = 13;
        camera.position.y = 4;
        scene.add( ambientLight );
        scene.add( hemiLight );
        scene.add( dirLight );
        scene.add(kameHouse);

    })
});



const narutoButton = document.getElementById('naruto');
narutoButton.addEventListener('click', function handleNaruto() {
    console.log('naruto clicked');
    

    var loaderNaruto = new THREE.GLTFLoader();

    var ichiraku;
    loaderNaruto.load('models/ichiraku_ramen_-_naruto/scene.gltf', ( gltf ) =>{
        ichiraku = gltf.scene;
        
        scene.clear();
        renderer.setClearColor("#BEB7DF");
        camera.position.z = 13;
        camera.position.y = 4;
        scene.add( ambientLight );
        scene.add( dirLight );
        scene.add( hemiLight );
        scene.add(ichiraku);

    })
});

 

const aotButton = document.getElementById('aot');
aotButton.addEventListener('click', function handleAOT() {
    console.log('AOT clicked');
    

    var loaderAOT = new THREE.GLTFLoader();

    var aot;
    loaderAOT.load('models/aot_erens_home_low-poly/aot.gltf', ( gltf ) =>{
        aot = gltf.scene;
        
        scene.clear();
        renderer.setClearColor("#ffe59e");
        camera.position.z = 15;
        camera.position.y = 5;
        scene.add( ambientLight );
        scene.add( dirLight );
        scene.add( hemiLight );
        scene.add(aot);

    })
});











var loader = new THREE.GLTFLoader();
    var House1;
    loader.load( 'models/cute_kitsune_fox/scene.gltf', ( gltf ) => {
    House1 = gltf.scene;
    House1.scale.set(0.5,0.25,0.5);
	scene.add( House1 );
});



window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth/2, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});













function animate(){
    requestAnimationFrame(animate);
    render(House1);
}

function render(){
    renderer.render(scene,camera);
}

animate();