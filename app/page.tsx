
"use client";

import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  // Facebook,
  // Instagram,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  ToolCase,
  UserRound,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

const specialties = [
  {
    icon: "❄️",
    title: "تعمیر یخچال",
    description:
      "عیب‌یابی و تعمیر انواع یخچال، فریزر و ساید بای ساید",
  },
  {
    icon: "🧺",
    title: "تعمیر لباسشویی",
    description:
      "تعمیر موتور، پمپ، برد و سایر قطعات لباسشویی",
  },
  {
    icon: "🍽️",
    title: "تعمیر ظرفشویی",
    description:
      "رفع مشکلات شستشو، تخلیه، نشتی و خرابی قطعات",
  },
  {
    icon: "🔥",
    title: "تعمیر اجاق و فر",
    description:
      "تعمیر انواع اجاق گاز، فر و تجهیزات پخت‌وپز",
  },
];

const services = [
  "عیب‌یابی و تشخیص مشکل",
  "تعمیر و تعویض قطعات",
  "سرویس دوره‌ای لوازم خانگی",
  "تعمیر برد الکترونیکی",
  "رفع نشتی و مشکلات برقی",
  "تعمیر در محل",
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "تضمین کیفیت",
    description: "تلاش ما ارائه خدمات با کیفیت و استفاده از قطعات مناسب است.",
  },
  {
    icon: Clock3,
    title: "پاسخگویی سریع",
    description: "در کوتاه‌ترین زمان ممکن درخواست شما را بررسی می‌کنیم.",
  },
  {
    icon: UserRound,
    title: "تخصص و تجربه",
    description: "عیب‌یابی دقیق و تعمیر اصولی با تجربه عملی.",
  },
  {
    icon: Star,
    title: "رضایت مشتری",
    description: "اعتماد و رضایت مشتری مهم‌ترین هدف ماست.",
  },
];

const steps = [
  {
    number: "۰۱",
    title: "تماس با ما",
    description: "با تماس یا پیام، مشکل دستگاه خود را با ما در میان بگذارید.",
  },
  {
    number: "۰۲",
    title: "هماهنگی",
    description: "زمان مناسب برای مراجعه تعمیرکار با شما هماهنگ می‌شود.",
  },
  {
    number: "۰۳",
    title: "عیب‌یابی",
    description: "دستگاه بررسی شده و مشکل به صورت دقیق مشخص می‌شود.",
  },
  {
    number: "۰۴",
    title: "تعمیر",
    description: "پس از تأیید شما، تعمیر دستگاه در محل انجام می‌شود.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#faf9f7] text-zinc-900"
    >
      {/* ================= NAVBAR ================= */}

      <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200/60 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}

          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
              <Wrench size={22} />
            </div>

            <div className="text-right">
              <div className="text-lg font-black">
                تعمیرکار من
              </div>

              <div className="text-xs text-zinc-500">
                خدمات تخصصی لوازم خانگی
              </div>
            </div>
          </button>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium transition hover:text-orange-600"
            >
              خانه
            </button>

            <button
              onClick={() => scrollToSection("specialties")}
              className="text-sm font-medium transition hover:text-orange-600"
            >
              تخصص‌های ما
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium transition hover:text-orange-600"
            >
              خدمات ما
            </button>

            <button
              onClick={() => scrollToSection("why-us")}
              className="text-sm font-medium transition hover:text-orange-600"
            >
              چرا ما؟
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium transition hover:text-orange-600"
            >
              تماس با ما
            </button>
          </nav>

          {/* Call Button */}

          <a
            href="tel:09366760132"
            className="hidden items-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700 md:flex"
          >
            <Phone size={17} />
            تماس با ما
          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="border-t border-zinc-200 bg-white px-5 py-5 md:hidden">
            <div className="flex flex-col gap-2">
              {[
                ["home", "خانه"],
                ["specialties", "تخصص‌های ما"],
                ["services", "خدمات ما"],
                ["why-us", "چرا ما؟"],
                ["contact", "تماس با ما"],
              ].map(([id, title]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="rounded-xl px-4 py-3 text-right font-medium hover:bg-zinc-100"
                >
                  {title}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative overflow-hidden pt-20"
      >
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-yellow-100 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
          {/* Text */}

          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-700">
              <Zap size={16} />
              تعمیر تخصصی در محل
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.25] tracking-tight sm:text-5xl lg:text-6xl">
              لوازم خانگی خراب شده؟
              <span className="mt-2 block text-orange-600">
                ما تعمیرش می‌کنیم.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-9 text-zinc-600">
              تعمیر تخصصی انواع لوازم خانگی با عیب‌یابی دقیق،
              خدمات سریع و قیمت منصفانه. دستگاه شما را با دقت
              بررسی می‌کنیم تا بهترین راه‌حل را ارائه دهیم.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:09120000000"
                className="flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-orange-600"
              >
                <Phone size={19} />
                درخواست تعمیرکار
              </a>

              <button
                onClick={() => scrollToSection("services")}
                className="flex items-center justify-center gap-2 rounded-2xl border border-zinc-300 bg-white px-7 py-4 font-bold transition hover:-translate-y-1 hover:border-zinc-900"
              >
                مشاهده خدمات
                <ArrowLeft size={18} />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-600">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-600"
                />
                تعمیر در محل
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-600"
                />
                عیب‌یابی دقیق
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-600"
                />
                قیمت منصفانه
              </div>
            </div>
          </div>

          {/* Image */}

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-5 rounded-[3rem] bg-orange-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-200 shadow-2xl">
                <Image
                  src="/repairman-new.jpeg"
                  alt="تعمیرکار لوازم خانگی"
                  width={800}
                  height={900}
                  priority
                  className="h-[500px] w-full object-cover sm:h-[600px]"
                />

                <div className="absolute bottom-5 right-5 left-5 rounded-2xl border border-white/30 bg-white/90 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 text-white">
                      <ToolCase size={23} />
                    </div>

                    <div>
                      <div className="font-black">
                        تعمیرکار متخصص
                      </div>

                      <div className="text-sm text-zinc-500">
                        آماده خدمت‌رسانی به شما
                      </div>
                    </div>

                    <div className="mr-auto flex items-center gap-1 text-sm font-bold">
                      <Star
                        size={16}
                        fill="currentColor"
                        className="text-yellow-500"
                      />
                      ۵.۰
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPECIALTIES ================= */}

      <section
        id="specialties"
        className="scroll-mt-20 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-black text-orange-600">
              تخصص‌های ما
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              تعمیر تخصصی انواع لوازم خانگی
            </h2>

            <p className="mt-5 leading-8 text-zinc-500">
              مهم نیست دستگاه شما چه مشکلی دارد؛ ابتدا مشکل را
              دقیق بررسی می‌کنیم و سپس بهترین راهکار را ارائه
              می‌دهیم.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-zinc-200 bg-zinc-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:bg-orange-50 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm transition group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {item.description}
                </p>

                {/* <div className="mt-5 flex items-center gap-2 text-sm font-bold text-orange-600">
                  اطلاعات بیشتر
                  <ArrowLeft size={16} />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="scroll-mt-20 bg-zinc-950 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="text-sm font-black text-orange-500">
                خدمات ما
              </span>

              <h2 className="mt-4 text-3xl font-black leading-relaxed sm:text-4xl">
                هر مشکلی، یک راه‌حل تخصصی دارد
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                از تعمیرات ساده تا مشکلات تخصصی برد و قطعات
                الکترونیکی، تلاش می‌کنیم مشکل دستگاه شما را
                اصولی برطرف کنیم.
              </p>

              <a
                href="tel:09366760132"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-7 py-4 font-bold transition hover:bg-orange-500"
              >
                <Phone size={18} />
                درخواست سرویس
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-orange-500"
                  />

                  <span className="font-medium">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}

      <section
        id="why-us"
        className="scroll-mt-20 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-black text-orange-600">
              چرا ما؟
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              چرا مشتری‌ها ما را انتخاب می‌کنند؟
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-zinc-200"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= STEPS ================= */}

      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-black text-orange-600">
              روند دریافت خدمات
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              تعمیر دستگاه شما در ۴ مرحله
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="text-5xl font-black text-orange-100">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-black">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="scroll-mt-20 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-zinc-950 text-white">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <span className="text-sm font-black text-orange-500">
                  تماس با ما
                </span>

                <h2 className="mt-4 text-3xl font-black leading-relaxed sm:text-4xl">
                  دستگاهت مشکل پیدا کرده؟
                  <br />
                  با ما تماس بگیر.
                </h2>

                <p className="mt-5 leading-8 text-zinc-400">
                  برای مشاوره، استعلام هزینه یا درخواست تعمیرکار
                  با ما در تماس باشید.
                </p>

                <div className="mt-10 space-y-5">
                  <a
                    href="tel:09120000000"
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600">
                      <Phone size={20} />
                    </div>

                    <div>
                      <div className="text-sm text-zinc-500">
                        شماره تماس
                      </div>

                      <div
                        dir="rtl"
                        className="mt-1 font-bold"
                      >
                        132 60 67 0936
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <div className="text-sm text-zinc-500">
                        آدرس
                      </div>

                      <div className="mt-1 font-bold">
                        تهران، کرج
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
                      <Clock3 size={20} />
                    </div>

                    <div>
                      <div className="text-sm text-zinc-500">
                        ساعات کاری
                      </div>

                      <div className="mt-1 font-bold">
                        هر روز ۹ صبح تا ۹ شب
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex min-h-[350px] items-center justify-center bg-orange-600 p-8">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15">
                    <Wrench size={42} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black">
                    نیاز به تعمیرکار دارید؟
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm leading-7 text-orange-100">
                    همین حالا تماس بگیرید تا برای اعزام تعمیرکار
                    هماهنگ کنیم.
                  </p>

                  <a
                    href="tel:09120000000"
                    className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-black text-orange-600 transition hover:scale-105"
                  >
                    <Phone size={18} />
                     132 60 67 0936
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-zinc-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white">
                <Wrench size={19} />
              </div>

              <div className="font-black">
                تعمیرکار من
              </div>
            </div>

            <p className="mt-3 text-sm text-zinc-500">
              خدمات تخصصی تعمیر لوازم خانگی
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 transition hover:bg-orange-100"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 transition hover:bg-orange-100"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="tel:09366760132"
              className="flex h-10 items-center gap-2 rounded-xl bg-zinc-900 px-4 text-sm font-bold text-white"
            >
              <Phone size={16} />
              تماس
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-zinc-100 px-5 pt-6 text-center text-xs text-zinc-400 lg:px-8">
          © {new Date().getFullYear()} تمامی حقوق برای تعمیرکار من محفوظ است.
        </div>
      </footer>

      {/* ================= FLOATING CALL ================= */}

      <a
        href="tel:09366760132"
        className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white shadow-xl shadow-orange-600/30 transition hover:scale-110"
        aria-label="تماس با تعمیرکار"
      >
        <Phone size={23} />
      </a>
    </main>
  );
}
