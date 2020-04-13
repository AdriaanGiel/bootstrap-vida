<template>
    <div ref="prototype" class="rounded-xl" id="prototype-robot">

    </div>
</template>

<script>
    export default {
        name: "prototype",
        data(){
            return {
                scene: null,
                camera:null,
                renderer:null,
                light:null,
                height:null,
                width:null,
                robot:null
            }
        },
        mounted() {
            this.scene = new THREE.Scene();

            this.light = new THREE.DirectionalLight('#ffffff',0.9);
            this.light.position.set(-20,0,100);
            this.scene.add(this.light);

            this.height = this.$refs.prototype.clientHeight;
            this.width = this.$refs.prototype.clientWidth;

            this.camera = new THREE.PerspectiveCamera(75, this.width/this.height,0.1,1000);
            this.camera.position.z = 4;
            this.camera.position.y = 2;

            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(this.width,this.height);
            this.renderer.setClearColor('#f0f8fa');
            const obj = document.getElementById("prototype-robot");

            console.log(obj);

            obj.appendChild(this.renderer.domElement);



            const objLoader = new THREE.OBJLoader();
            objLoader.setPath('./blender-files/');

            const mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('./blender-files/');

            new Promise((resolve) => {
                mtlLoader.load('full.mtl', (mat) => {
                    resolve(mat);
                })
            }).then((mat) => {
                mat.preload();
                objLoader.setMaterials(mat);

                objLoader.load('full.obj', (object) => {
                    this.robot = object;
                    this.scene.add(this.robot);
                })
            });

            this.render();

        },
        methods:{
            render(){
                if(this.robot){
                    this.robot.rotation.y += 0.01;
                }

                requestAnimationFrame(this.render);

                this.renderer.render(this.scene,this.camera);
            }
        }

    }
</script>

<style scoped lang="stylus">
#prototype-robot
    min-height 20em
    min-width 20em
</style>