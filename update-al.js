// netlify/functions/update-al.js
import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  const store = getStore("uld-store");
  const body = await req.json().catch(() => ({}));
  const { qrid, aldata, row } = body;

  if (!qrid) return json({ ok: false, error: "Missing qrid" }, 400);

  // Lưu string A/L Data (dùng khi quét QR)
  await store.set(`al:${qrid}`, String(aldata || ""));

  // Tuỳ chọn: lưu toàn bộ thông tin hàng (để truy vết)
  if (row) {
    await store.setJSON(`row:${qrid}`, row);
  }

  return json({ ok: true });
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
