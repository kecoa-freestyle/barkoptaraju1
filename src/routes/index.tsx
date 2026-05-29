import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu, X, Star, MapPin, Clock, Wallet, Phone,
  Coffee, ShoppingBag, Bike, Trees, Leaf,
  Instagram, Facebook, Twitter, ChevronDown,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const BRAND = "BARKOP SADULUR TARAJU";

const reviews = [
  { name: "Rina S.", text: "Suasana kebun teh yg menyegarkan cocok untuk seluruh anggota keluarga." },
  { name: "Aditya P.", text: "Mantap tempat ngopi dan ngemil dengan view kebun teh nya." },
  { name: "Dewi K.", text: "Tempatnya enakeun buat nyantai sore dengan harga murah." },
  { name: "Bayu R.", text: "Pelayanan ramah dan suasana sangat nyaman untuk bersantai." },
  { name: "Sari M.", text: "View kebun teh sangat indah terutama saat sore hari." },
];

const facilities = [
  { icon: Coffee, title: "Dine in", desc: "Nikmati kopi langsung di tempat" },
  { icon: ShoppingBag, title: "Take away", desc: "Pesanan praktis dibawa pulang" },
  { icon: Bike, title: "Delivery", desc: "Antar ke lokasi sekitar Taraju" },
  { icon: Trees, title: "Outdoor seating", desc: "Tempat duduk terbuka yang sejuk" },
  { icon: Leaf, title: "Tea garden view", desc: "Pemandangan kebun teh khas Taraju" },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Tentang", "#about"],
    ["Ulasan", "#reviews"],
    ["Galeri", "#gallery"],
    ["Info", "#info"],
    ["Fasilitas", "#facilities"],
    ["Lokasi", "#location"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0d2818]/55 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-white">
          <Leaf className="h-5 w-5 text-[#c9b87a]" />
          <span className="font-display text-base tracking-wide sm:text-lg">Barkop Sadulur</span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#location"
          className="hidden rounded-full bg-[#c9b87a] px-5 py-2 text-sm font-medium text-[#0d2818] transition hover:bg-[#d8c98f] lg:inline-block"
        >
          Visit Us
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden">
          <div className="mx-5 mb-4 rounded-2xl border border-white/15 bg-[#0d2818]/85 p-5 backdrop-blur-xl">
            <ul className="flex flex-col gap-3">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={href}
                    className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  onClick={() => setOpen(false)}
                  href="#location"
                  className="mt-2 block rounded-full bg-[#c9b87a] px-4 py-2 text-center font-medium text-[#0d2818]"
                >
                  Visit Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Kebun teh Taraju saat fajar"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d2818]/70 via-[#0d2818]/40 to-[#0d2818]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,40,24,0.55)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-5 text-center text-white sm:px-8">
        <span className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] backdrop-blur">
          <Leaf className="h-3.5 w-3.5 text-[#c9b87a]" /> Taraju · Tasikmalaya
        </span>
        <h1
          className="animate-fade-up font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          {BRAND}
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-balance text-base text-white/85 sm:text-lg md:text-xl"
          style={{ animationDelay: "0.25s" }}
        >
          Ngopi santai dengan view kebun teh khas Taraju.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#about"
            className="rounded-full bg-[#c9b87a] px-7 py-3 text-sm font-medium text-[#0d2818] shadow-lg shadow-black/20 transition hover:scale-[1.03] hover:bg-[#d8c98f]"
          >
            Jelajahi
          </a>
          <a
            href="#location"
            className="rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
          >
            Lokasi
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80"
      >
        <div className="animate-float flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-[#f5f1e8] py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-[#2d5a3d]">Tentang Kami</span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-[#1a3c2a] sm:text-5xl">
            Ngopi di tengah <em className="italic text-[#2d5a3d]">kebun teh</em> Taraju.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[#3a4a3f] sm:text-base">
            BARKOP SADULUR TARAJU merupakan tempat ngopi dengan suasana sejuk dan
            pemandangan kebun teh khas Taraju. Tempat ini cocok untuk bersantai
            bersama keluarga maupun teman sambil menikmati kopi lokal, teh khas
            Taraju, dan makanan ringan dengan harga terjangkau. Suasana alam yang
            tenang membuat pengunjung nyaman untuk bersantai di sore hari.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Kopi Lokal", "Teh Khas Taraju", "Camilan", "Pet Friendly"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#2d5a3d]/20 bg-white/60 px-4 py-1.5 text-xs text-[#2d5a3d] backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal relative">
          <img
            src={g1}
            alt="Suasana cafe dengan view kebun teh"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="glass absolute -bottom-8 -left-6 hidden w-64 rounded-2xl p-5 sm:block">
            <div className="flex items-center gap-2 text-[#1a3c2a]">
              <Leaf className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.2em]">Mountain Cafe</span>
            </div>
            <p className="mt-2 font-display text-2xl leading-tight text-[#1a3c2a]">
              Sejuk, tenang, dan dekat dengan alam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-[#0d2818] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c9b87a]">Reviews</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Dicintai oleh pengunjung
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-[#c9b87a] text-[#c9b87a]" />
            ))}
          </div>
          <p className="mt-3 text-white/70">
            <span className="font-display text-2xl text-white">5.0</span> · 125 reviews
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="reveal glass-dark group rounded-3xl p-7 transition duration-500 hover:-translate-y-1 hover:border-[#c9b87a]/40"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-[#c9b87a] text-[#c9b87a]" />
                ))}
              </div>
              <p className="font-display text-lg italic leading-relaxed text-white/90">
                “{r.text}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9b87a] font-medium text-[#0d2818]">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-white/50">Verified visitor</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { src: g5, alt: "Gazebo outdoor seating saat sunset", className: "row-span-2" },
    { src: g3, alt: "Kebun teh berkabut", className: "" },
    { src: g2, alt: "Secangkir kopi", className: "" },
    { src: g6, alt: "Daun teh dengan embun", className: "row-span-2" },
    { src: g4, alt: "Camilan dan teh khas Taraju", className: "" },
    { src: g1, alt: "Tea garden view dari cafe", className: "" },
  ];
  return (
    <section id="gallery" className="bg-[#f5f1e8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#2d5a3d]">Galeri</span>
            <h2 className="mt-3 font-display text-4xl text-[#1a3c2a] sm:text-5xl">
              Momen di kebun teh
            </h2>
          </div>
          <p className="max-w-md text-[#3a4a3f]">
            Lihat suasana, hidangan, dan pemandangan yang menanti Anda di Barkop Sadulur Taraju.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-3 lg:auto-rows-[260px]">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`reveal group relative overflow-hidden rounded-2xl bg-[#1a3c2a]/10 ${it.className}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Info() {
  const cards = [
    { icon: MapPin, label: "Address", value: "Taraju, Kec. Taraju, Kab. Tasikmalaya, Jawa Barat 46474" },
    { icon: Clock, label: "Open Hour", value: "09.00 WIB — sampai sore" },
    { icon: Wallet, label: "Price Range", value: "Rp 1.000 – Rp 25.000" },
    { icon: Phone, label: "Phone", value: "0821-2658-8619" },
  ];
  return (
    <section id="info" className="relative bg-[#0d2818] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c9b87a]">Information</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Kunjungi Kami</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div
              key={i}
              className="reveal glass-dark group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[#c9b87a]/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9b87a]/15 text-[#c9b87a]">
                <c.icon className="h-5 w-5" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/50">{c.label}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-white/90">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section id="facilities" className="bg-[#f5f1e8] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mb-14 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#2d5a3d]">Fasilitas</span>
          <h2 className="mt-3 font-display text-4xl text-[#1a3c2a] sm:text-5xl">
            Semuanya untuk kenyamanan Anda
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <div
              key={f.title}
              className="reveal group rounded-3xl border border-[#1a3c2a]/10 bg-white/70 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-[#2d5a3d]/40 hover:shadow-xl hover:shadow-[#1a3c2a]/10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1a3c2a] text-[#c9b87a] transition group-hover:rotate-6">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-[#1a3c2a]">{f.title}</h3>
              <p className="mt-2 text-sm text-[#3a4a3f]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section id="location" className="relative bg-[#0d2818] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mb-12 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c9b87a]">Location</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Temukan kami di Taraju</h2>
          <p className="mt-4 text-white/70">
            Taraju, Kec. Taraju, Kabupaten Tasikmalaya, Jawa Barat 46474
          </p>
        </div>
        <div className="reveal glass-dark overflow-hidden rounded-3xl p-2 sm:p-3">
          <div className="aspect-video w-full overflow-hidden rounded-2xl">
            <iframe
              title="Lokasi Barkop Sadulur Taraju"
              src="https://www.google.com/maps?q=Taraju,Tasikmalaya,Jawa+Barat&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#081a10] py-14 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 text-center sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-white">
          <Leaf className="h-5 w-5 text-[#c9b87a]" />
          <span className="font-display text-xl">Barkop Sadulur Taraju</span>
        </a>
        <p className="max-w-md text-sm">
          Ngopi santai dengan view kebun teh khas Taraju.
        </p>
        <div className="flex gap-3">
          {[Instagram, Facebook, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="social"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#c9b87a] hover:text-[#c9b87a]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <div className="h-px w-full max-w-md bg-white/10" />
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Barkop Sadulur Taraju. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  useScrollReveal();
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1a3c2a]">
      <Nav />
      <Hero />
      <About />
      <Reviews />
      <Gallery />
      <Info />
      <Facilities />
      <MapSection />
      <Footer />
    </main>
  );
}
