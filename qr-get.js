// netlify/functions/qr-get.js
import { getStore } from "@netlify/blobs";

/**
 * GET /qr?id=<QRID>
 * Hiển thị A/L Data hiện tại dưới dạng HTML đơn giản (đọc strong consistency).
 */
export default async (req, context) => {
  const url = new URL(req.url);
  const id = (url.searchParams.get("id") || "").trim();

  const store = getStore({ name: "uld-store", consistency: "strong" }); // đọc mạnh
  const al = (id && (await store.get(`al:${id}`))) || "";

  const body = `<!doctype html><meta charset="utf-8">
  <title>A/L Data</title>
  <style>
    body{background:#0b1220;color:#e5e7eb;font:16px/1.5 system-ui,Segoe UI,Roboto,Helvetica,Arial}
    .wrap{max-width:720px;margin:18px auto;padding:14px;border:1px solid #263043;border-radius:12px;background:#111827}
    h1{margin:0 0 10px;font-size:20px}
    pre{white-space:pre-wrap;word-break:break-word;background:#0b1220;padding:12px;border-radius:10px;border:1px solid #263043;font-size:18px}
    small{color:#9ca3af}
  </style>
  <div class="wrap">
    <h1>🔎 A/L Data</h1>
    <pre>${escapeHtml(al)}</pre>
    <small>ID: ${escapeHtml(id)}</small>
  </div>`;

  return new Response(body, { headers: { "content-type": "text/html; charset=utf-8" } });
};

function escapeHtml(s = "") {
  return s.replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[m]));
}
