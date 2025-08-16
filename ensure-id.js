// netlify/functions/ensure-id.js
import { getStore } from "@netlify/blobs";

export default async (req) => {
  const url = new URL(req.url);
  const uld = (url.searchParams.get("uld") || "").trim();
  if (!uld) return json({ ok: false, error: "Missing uld" }, 400);

  const store = getStore("uld-store");
  let qrid = await store.get(`map:uld:${uld}`, { consistency: "strong" });
  if (!qrid) {
    qrid = crypto.randomUUID();
    // chỉ gán nếu chưa có (đảm bảo cố định)
    await store.set(`map:uld:${uld}`, qrid);
    await store.set(`map:id:${qrid}`, uld);
  }
  return json({ ok: true, qrid });
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
