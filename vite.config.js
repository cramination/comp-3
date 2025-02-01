import { defineConfig } from 'vite';
 
 export default defineConfig({
    assetsInclude: ['src/models/test-cube.gltf'],
    base: "/comp-3/",
    server: {

        port: 5137 // Change this to your desired port

    }

}
)