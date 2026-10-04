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