// Escena, cámara y renderizador
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const camara1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

// Crear un cubo
const geometría = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cubo = new THREE.Mesh(geometría, material);
escena.add(cubo);


// creando otro objeto
const geometria2  = new THREE.BoxGeometry(2,2,2);
const material2  = new THREE.MeshBasicMaterial({color: 969696, wireframe: true  });
const cubo2  = new THREE.Mesh(geometria2, material2);
escena.add(cubo2);


// creando otro objeto
const geometria3  = new THREE.BoxGeometry(2,2,2);
const material3  = new THREE.MeshBasicMaterial({color: 969696, wireframe: true  });
const cubo3  = new THREE.Mesh(geometria3, material3);
escena.add(cubo3);


// creando otro objeto
const geometria4  = new THREE.BoxGeometry(2,2,2);
const material4  = new THREE.MeshBasicMaterial({color: 969696, wireframe: true  });
const cubo4  = new THREE.Mesh(geometria4, material4);
escena.add(cubo4);



// Posicionar la cámara
camara.position.z = 5;
// camara1.position.x = 5;
// Animación del cubo
function animacion() {
    requestAnimationFrame(animacion);
    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;
    renderizador.render(escena, camara);

    cubo2.rotation.x += 0.01;
    cubo2.rotation.y += 0.01;
    renderizador.render(escena, camara);

    cubo3.rotation.x += 0.01;
    cubo3.rotation.y += 0.01;
    cubo3.position.x = 5;
    renderizador.render(escena, camara);

    cubo4.rotation.x += 0.01;
    cubo4.rotation.y += 0.01;
    cubo4.position.x = -5;
    renderizador.render(escena, camara);


}

animacion();

// Ajustar el tamaño de la ventana al cambiar su tamaño
window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();


    // camara1.aspect = window.innerWidth / window.innerHeight;
    // camara1.updateProjectionMatrix();

    renderizador.setSize(window.innerWidth, window.innerHeight);
});

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   btn.textContent = "¡¡ME HICISTE CLIC!! ❤️";
//   setTimeout(() => {
//     btn.textContent = "Presióname";
//   }, 1000);
// });

function mover() {
   // requestAnimationFrame(animacion);
    cubo3.position.z = cubo3.position.z + 1;
    renderizador.render(escena, camara);
}

function cambiar() {

cubo4.BoxGeometry = new THREE.BoxGeometry(4,2,4);
escena.add(cubo4);
animacion();
}