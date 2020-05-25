import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import * as THREE from 'three';
import { Scene, Camera, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements AfterViewInit {
  @ViewChild('heroAnimation', {static: false}) heroAnimation: ElementRef;
  scene: Scene;
  renderer: any;
  camera: PerspectiveCamera;

  constructor() {
  }

  ngAfterViewInit() {
    if (this.heroAnimation) {
      this.renderAnimation(this.heroAnimation.nativeElement);
    }
  }

  renderAnimation(el: HTMLElement) {
    const height = el.offsetHeight;
    const width = el.offsetWidth;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x131211);
    this.camera = new THREE.PerspectiveCamera(60, width / height, .1, 1000);
    this.camera.position.z = 1;
    this.camera.rotation.x = Math.PI / 2;

    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(width, height);

    el.appendChild(this.renderer.domElement);

    // this.onWindowResize(height, width);
    this.renderStars(this, this.renderer);
  }

  renderStars(context, renderer) {
    const starGeo = new THREE.Geometry();
    for (let i = 0; i < 5000; i++) {
      const star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      ) as any;
      star.velocity = 0;
      star.acceleration = 0.001;

      starGeo.vertices.push(star);
    }

    const starSprite = new THREE.TextureLoader().load('assets/icons/star.svg');
    const starMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.25,
      map: starSprite
    });
    const stars = new THREE.Points(starGeo, starMaterial);
    this.scene.add(stars);
    // this.addMoon();

    function animate() {
      starGeo.vertices.forEach(starObj => {
        const star = starObj as any;
        star.velocity += star.acceleration;
        star.y -= star.velocity;
        if (star.y < -300) {
         star.y = 300;
         star.velocity = 0;
        }
      });
      starGeo.verticesNeedUpdate = true;
      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0015;

      renderer.render(context.scene, context.camera);
      requestAnimationFrame(animate);
    }

    animate();
    setTimeout(() => {
      this.heroAnimation.nativeElement.classList.add('loaded');
    });

  }

  addMoon() {
    const loader = new THREE.TextureLoader();
    loader.load('assets/icons/moon.png', (texture) => {
      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        map: texture
      });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.y = 50;
      this.scene.add(mesh);
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(e) {
    const height = this.heroAnimation.nativeElement.offsetHeight;
    const width = this.heroAnimation.nativeElement.offsetWidth;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

}
