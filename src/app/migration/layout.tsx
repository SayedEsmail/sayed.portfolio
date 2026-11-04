import { Cairo } from "next/font/google";

const cairo = Cairo({
    variable: "--font-cairo",
    subsets: ["arabic", "latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export default function MigrationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={cairo.variable} style={{ fontFamily: "var(--font-cairo), system-ui, sans-serif" }}>
            {children}
        </div>
    );
}
