import { WhatsAppIcon, InstagramIcon } from "./Icons";

const round = "w-12 h-12 rounded-full flex items-center justify-center bg-[#1A1F2B] text-[#F3F4F6]";
const stroke = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": true } as const;

export default function Footer() {
    return (
        <footer dir="rtl" lang="ar" className="ar relative border-t border-[#232836] bg-[#0B0D12]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-20 py-7 flex flex-col items-center gap-4">
                <div className="flex flex-wrap gap-3 justify-center">
                    <a href="https://wa.me/201066293366" aria-label="واتساب" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center"><WhatsAppIcon size={22} /></a>
                    <a href="https://ig.me/m/sayed.5atab" aria-label="إنستغرام" target="_blank" rel="noopener noreferrer" className={round}><InstagramIcon size={22} /></a>
                    <a href="mailto:5atab.work@gmail.com" aria-label="بريد إلكتروني" className={round}>
                        <svg {...stroke}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                    </a>
                    <a href="https://github.com/SayedEsmail" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className={round}>
                        <svg {...stroke}><path d="M16 22v-3.5a3 3 0 0 0-.9-2.2c3-.3 6-1.4 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.3 12.3 0 0 0-6.4 0C7.1 2.5 6 2.8 6 2.8a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 4.5 9.8c0 5.1 3 6.2 6 6.5a3 3 0 0 0-.9 2.2V22" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/sayed-esmail-khattab" aria-label="لينكدإن" target="_blank" rel="noopener noreferrer" className={round}>
                        <svg {...stroke}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4" /></svg>
                    </a>
                </div>
                <p className="m-0 text-xs text-[#9AA3B2]">سيد إسماعيل، 2026</p>
            </div>
        </footer>
    );
}
