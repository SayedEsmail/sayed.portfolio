import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Sayed Esmail, Senior Frontend / Full-Stack Engineer in Cairo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
    const photo = await readFile(join(process.cwd(), "public", "me.jpg"));
    const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    background: "#0B0D12",
                    color: "#F3F4F6",
                    fontFamily: "sans-serif",
                    padding: "64px 72px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", width: 720 }}>
                    <div style={{ display: "flex", fontSize: 20, letterSpacing: 3, color: "#F0801A", fontWeight: 700 }}>
                        SENIOR FRONTEND / FULL-STACK ENGINEER · CAIRO
                    </div>
                    <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.05, marginTop: 24 }}>
                        Sayed Esmail
                    </div>
                    <div style={{ display: "flex", fontSize: 30, color: "#C9D0DC", lineHeight: 1.4, marginTop: 28 }}>
                        Vue, React and Next.js products: live fleet tracking, multi-tenant SaaS, and Arabic/English interfaces built right-to-left first.
                    </div>
                    <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
                        {["Vue 3", "Nuxt 3", "React", "Next.js", "TypeScript", "Node.js"].map((t) => (
                            <div
                                key={t}
                                style={{
                                    display: "flex",
                                    fontSize: 22,
                                    color: "#C9D0DC",
                                    border: "2px solid #2A3040",
                                    background: "#0F1218",
                                    borderRadius: 999,
                                    padding: "8px 18px",
                                }}
                            >
                                {t}
                            </div>
                        ))}
                    </div>
                    <div style={{ display: "flex", fontSize: 26, color: "#F0801A", marginTop: 40, fontWeight: 700 }}>
                        sayedesmail.com
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        width: 300,
                        height: 300,
                        borderRadius: 150,
                        overflow: "hidden",
                        border: "6px solid #F0801A",
                        background: "#12151C",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={photoSrc} alt="" width={300} height={300} style={{ objectFit: "cover", width: 300, height: 300 }} />
                </div>
            </div>
        ),
        { ...size },
    );
}
