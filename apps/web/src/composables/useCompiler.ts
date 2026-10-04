import { ref, onBeforeUnmount } from 'vue';

export type ConsoleLine = {
  type?: "log" | "error" | "info";
  text: string;
};

const RUNNER_HTML = `
<script>
  const send = (type, text) => parent.postMessage({ type, text }, "*");
  const fmt = (v) => {
    if (typeof v === "string") return v;
    if (v instanceof Error) return v.name + ": " + v.message;
    try { return JSON.stringify(v, null, 2) ?? String(v); } catch { return String(v); }
  };
  console.log = (...a) => send("log", a.map(fmt).join(" "));
  console.info = (...a) => send("info", a.map(fmt).join(" "));
  console.error = (...a) => send("error", a.map(fmt).join(" "));

  window.addEventListener("message", async (e) => {
    try {
      const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      const result = await new AsyncFunction(e.data)();
      if (result !== undefined) send("log", "→ " + fmt(result));
    } catch (err) {
      send("error", fmt(err));
    }
  });
<\/script>`;

export const useCodeRunner = () => {
  const lines = ref<ConsoleLine[]>([]);
  let frame: HTMLIFrameElement | null = null;

  const onMessage = (e: MessageEvent) => {
    // only trust messages coming from OUR iframe
    if (!frame || e.source !== frame.contentWindow) return;
    const { type, text } = e.data ?? {};
    if (type && typeof text === "string") {
      lines.value.push({ type, text });
    }
  };

  const destroyFrame = () => {
    frame?.remove();
    frame = null;
  };

  const run = (code: string) => {
    destroyFrame(); // fresh sandbox every run
    lines.value = [];

    frame = document.createElement("iframe");
    frame.setAttribute("sandbox", "allow-scripts"); // NO allow-same-origin
    frame.style.display = "none";
    frame.srcdoc = RUNNER_HTML;
    frame.onload = () => {
      // "*" is required: a sandboxed iframe has an opaque origin
      frame?.contentWindow?.postMessage(code, "*");
    };
    document.body.appendChild(frame);
  };

  window.addEventListener("message", onMessage);
  onBeforeUnmount(() => {
    window.removeEventListener("message", onMessage);
    destroyFrame();
  });

  return { lines, run };
}
