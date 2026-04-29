const _0x5a21 = ["TARGET_DOMAIN", "replace", "host", "connection", "keep-alive", "proxy-authenticate", "proxy-authorization", "te", "trailer", "transfer-encoding", "upgrade", "forwarded", "x-forwarded-host", "x-forwarded-proto", "x-forwarded-port", "url", "pathname", "search", "headers", "toLowerCase", "has", "startsWith", "x-nf-", "x-netlify-", "x-real-ip", "x-forwarded-for", "set", "method", "GET", "HEAD", "body", "status"];

const B = (Netlify.env.get(_0x5a21[0]) || "")[_0x5a21[1]](/\/$/, "");
const S = new Set(_0x5a21.slice(2, 15));

export default async function dispatcher(q) {
  if (!B) return new Response("Error: 500", { status: 500 });

  try {
    const u = new URL(q[_0x5a21[15]]);
    const t = B + u[_0x5a21[16]] + u[_0x5a21[17]];
    const h = new Headers();
    let ip = null;

    for (const [k, v] of q[_0x5a21[18]]) {
      const l = k[_0x5a21[19]]();
      if (S[_0x5a21[20]](l) || l[_0x5a21[21]](_0x5a21[22]) || l[_0x5a21[21]](_0x5a21[23])) continue;
      if (l === _0x5a21[24]) { ip = v; continue; }
      if (l === _0x5a21[25]) { if (!ip) ip = v; continue; }
      h[_0x5a21[26]](l, v);
    }

    if (ip) h[_0x5a21[26]](_0x5a21[25], ip);

    const m = q[_0x5a21[27]];
    const o = { method: m, headers: h, redirect: "manual" };
    if (m !== _0x5a21[28] && m !== _0x5a21[29]) o[_0x5a21[30]] = q[_0x5a21[30]];

    const r = await fetch(t, o);
    const rh = new Headers();
    for (const [rk, rv] of r[_0x5a21[18]]) {
      if (rk[_0x5a21[19]]() !== _0x5a21[9]) rh[_0x5a21[26]](rk, rv);
    }

    return new Response(r[_0x5a21[30]], { status: r[_0x5a21[31]], headers: rh });
  } catch (e) {
    return new Response("Error: 502", { status: 502 });
  }
}