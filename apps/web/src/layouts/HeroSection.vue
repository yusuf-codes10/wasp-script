<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const canvasRef = ref<HTMLCanvasElement>();
const heroRef = ref<HTMLDivElement>();
const cursorRef = ref<HTMLDivElement>();
const dotRef = ref<HTMLDivElement>();

let animId: number;
let mx = 0, my = 0;
let W = 0, H = 0;

class Particle {
  x = 0; y = 0; vx = 0; vy = 0; size = 0; alpha = 0; color = '';
  constructor() { this.reset() }
  reset() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - .5) * .4;
    this.vy = (Math.random() - .5) * .4;
    this.size = Math.random() * 1.5 + .5;
    this.alpha = Math.random() * .4 + .1;
    this.color = Math.random() > .7 ? '#E6A800' : '#2a2a2a';
  }
  update() {
    const dx = mx - this.x, dy = my - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 120) {
      const force = (120 - dist) / 120 * .6;
      this.vx -= (dx / dist) * force;
      this.vy -= (dy / dist) * force;
    }
    this.vx *= .97; this.vy *= .97;
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

onMounted(() => {
  const canvas = canvasRef.value!;
  const hero = heroRef.value!;
  const ctx = canvas.getContext('2d')!;
  const particles: Particle[] = [];

  const resize = () => {
    W = canvas.width = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  };
  resize();
  for (let i = 0; i < 120; i++) particles.push(new Particle());

  const drawGrid = () => {
    ctx.globalAlpha = .04;
    ctx.strokeStyle = '#E6A800';
    ctx.lineWidth = .5;
    const spacing = 60;
    const ox = (mx * .015) % spacing;
    const oy = (my * .015) % spacing;
    for (let x = ox; x < W; x += spacing) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke() }
    for (let y = oy; y < H; y += spacing) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke() }
  };

  const drawMouseGlow = () => {
    ctx.globalAlpha = .06;
    ctx.fillStyle = '#E6A800';
    ctx.beginPath();
    ctx.arc(mx, my, 100, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawConnections = () => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p = particles[i], q = particles[j];
        const dx = p!.x - q!.x, dy = p!.y - q!.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 80) {
          ctx.globalAlpha = (1 - d / 80) * .08;
          ctx.strokeStyle = '#E6A800';
          ctx.lineWidth = .5;
          ctx.beginPath();
          ctx.moveTo(p!.x, p!.y);
          ctx.lineTo(q!.x, q!.y);
          ctx.stroke();
        }
      }
    }
  };

  const loop = () => {
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    drawMouseGlow();
    particles.forEach(p => { p.update(); p.draw(ctx) });
    drawConnections();
    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(loop);
  };
  loop();

  const onMouseMove = (e: MouseEvent) => {
    const r = hero.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
    cursorRef.value!.style.left = (mx - 10) + 'px';
    cursorRef.value!.style.top = (my - 10) + 'px';
    dotRef.value!.style.left = (mx - 2) + 'px';
    dotRef.value!.style.top = (my - 2) + 'px';
  };

  const onEnter = () => { cursorRef.value!.style.opacity = '1'; dotRef.value!.style.opacity = '1' };
  const onLeave = () => { cursorRef.value!.style.opacity = '0'; dotRef.value!.style.opacity = '0' };

  hero.addEventListener('mousemove', onMouseMove);
  hero.addEventListener('mouseenter', onEnter);
  hero.addEventListener('mouseleave', onLeave);
  window.addEventListener('resize', resize);

  onUnmounted(() => {
    cancelAnimationFrame(animId);
    hero.removeEventListener('mousemove', onMouseMove);
    hero.removeEventListener('mouseenter', onEnter);
    hero.removeEventListener('mouseleave', onLeave);
    window.removeEventListener('resize', resize);
  });
});
</script>

<template>
  <div ref="heroRef" class="relative min-h bg-background flex items-center justify-center overflow-hidden cursor-none">

    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full" />

    <div ref="cursorRef" class="absolute w-5 h-5 border border-primary rounded-full pointer-events-none z-10 opacity-0 transition-transform duration-100" style="mix-blend-mode: screen" />
    <div ref="dotRef" class="absolute w-1 h-1 bg-primary rounded-full pointer-events-none z-10 opacity-0" />

    <div class="relative z-10 text-center px-6">
      <div class="inline-flex items-center gap-1.5 bg-[#1e1a00] border border-[#3a3000] rounded-full px-3 py-1 text-[11px] text-primary font-mono mb-7">
        <span class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        50+ challenges live
      </div>

      <h1 class="text-5xl font-bold text-foreground leading-tight tracking-tighter font-mono mb-4">
        the right place<br>to drill <span class="text-primary">JavaScript</span>
      </h1>

      <p class="text-[15px] text-muted-foreground max-w-sm mx-auto mb-9 leading-relaxed font-mono">
        WaspScript — bite-sized challenges that make you actually
        <code class="text-primary bg-[#1e1a00] px-1.5 py-0.5 rounded border border-[#3a3000] text-[13px]">think()</code>.
        No fluff, just code.
      </p>

      <button
        @click="router.push('/challenges')"
        class="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-[13px] px-6 py-3 rounded-lg font-mono hover:opacity-90 transition-opacity duration-150"
      >
        start drilling <span>→</span>
      </button>
    </div>

  </div>
</template>