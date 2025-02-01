import { defineConfig } from 'vite';
import gltf from 'vite-plugin-gltf';
 
 export default defineConfig({
    plugins: [gltf()],
    assetsInclude: ['src/models/test-cube.gltf'],
    base: "/comp-3/",
    server: {

        port: 5137 // Change this to your desired port

    }

}
)