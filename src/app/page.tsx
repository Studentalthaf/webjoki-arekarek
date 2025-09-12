"use client";

import { useState, useEffect } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

function ServiceCard({ icon, title, description, features, gradient }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-indigo-200 hover:-translate-y-2">
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Icon with Animation */}
      <div className="relative mb-6">
        <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <div className={`w-16 h-1 bg-gradient-to-r ${gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      {/* Feature List with Enhanced Styling */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-green-600 text-xs font-bold">✓</span>
            </div>
            {feature}
          </li>
        ))}
      </ul>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200 transition-all duration-500"></div>
    </div>
  );
}

// Enhanced Testimonial Component with Animation
function TestimonialCard({ name, role, content, rating, isActive }: { 
  name: string; 
  role: string; 
  content: string; 
  rating: number;
  isActive: boolean;
}) {
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-700 transform ${
      isActive 
        ? 'scale-100 opacity-100 translate-y-0 shadow-2xl border-indigo-200' 
        : 'scale-95 opacity-60 translate-y-4'
    }`}>
      {/* Quote Icon */}
      <div className="text-6xl text-indigo-200 mb-4 leading-none">&ldquo;</div>
      
      {/* Stars with Animation */}
      <div className="flex items-center mb-6">
        {[...Array(rating)].map((_, i) => (
          <span 
            key={i} 
            className={`text-2xl transition-all duration-300 ${
              isActive ? 'text-yellow-400 animate-pulse' : 'text-yellow-300'
            }`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            ⭐
          </span>
        ))}
      </div>
      
      {/* Content */}
      <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">&ldquo;{content}&rdquo;</p>
      
      {/* Profile */}
      <div className="flex items-center">
        <div className={`w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 transition-all duration-300 ${
          isActive ? 'scale-110 shadow-lg' : 'scale-100'
        }`}>
          {name[0]}
        </div>
        <div>
          <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
          <p className="text-indigo-600 font-medium">{role}</p>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
    </div>
  );
}

// Animated Testimonial Section Component
function AnimatedTestimonials() {
  const testimonials = [
    {
      name: "Sarah Putri",
      role: "Mahasiswa Universitas Indonesia",
      content: "Presentasi PowerPoint yang dibuat sangat profesional dan membantu saya mendapat nilai A+ di mata kuliah Business Strategy! Tim sangat responsif dan hasil melampaui ekspektasi.",
      rating: 5
    },
    {
      name: "Ahmad Rahman", 
      role: "Mahasiswa Teknik Informatika",
      content: "Tim web development sangat responsif dan hasil websitenya sesuai ekspektasi. Koding rapi, design modern, dan dokumentasi lengkap. Highly recommended untuk semua!",
      rating: 5
    },
    {
      name: "Dina Marlina",
      role: "Mahasiswa Psikologi", 
      content: "Bantuan joki skripsi sangat membantu, metodologi penelitian yang digunakan sesuai standar akademik. Bimbingan intensif sampai lulus dengan hasil memuaskan!",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Ekonomi",
      content: "Pelayanan cepat dan berkualitas! Tugas harian yang dikerjakan selalu dapat nilai bagus. Tim sangat profesional dan harga terjangkau untuk mahasiswa.",
      rating: 5
    },
    {
      name: "Lisa Permata",
      role: "Mahasiswa Desain Komunikasi Visual",
      content: "Design presentasi yang dibuat sangat kreatif dan eye-catching. Berhasil mempresentasikan project dengan confidence tinggi. Terima kasih tim JOKI TUGAS!",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Main Testimonial Display */}
      <div className="relative h-[400px] mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length;
            const isNext = index === (currentIndex + 1) % testimonials.length;
            
            let translateX = '100%';
            let opacity = 0;
            let scale = 0.8;
            
            if (isActive) {
              translateX = '0%';
              opacity = 1;
              scale = 1;
            } else if (isPrev) {
              translateX = '-100%';
              opacity = 0.3;
              scale = 0.8;
            } else if (isNext) {
              translateX = '100%';
              opacity = 0.3;
              scale = 0.8;
            }

            return (
              <div
                key={index}
                className="absolute inset-0 transition-all duration-700 ease-in-out max-w-4xl mx-auto px-4"
                style={{
                  transform: `translateX(${translateX}) scale(${scale})`,
                  opacity
                }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  isActive={isActive}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center space-x-6">
        {/* Previous Button */}
        <button
          onClick={prevTestimonial}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-50 transition-all duration-300 hover:scale-110 border border-gray-200"
        >
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-indigo-600 scale-125'
                  : 'bg-gray-300 hover:bg-indigo-300'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextTestimonial}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-50 transition-all duration-300 hover:scale-110 border border-gray-200"
        >
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Play/Pause Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            isPlaying
              ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
              : 'bg-green-100 text-green-600 hover:bg-green-200'
          }`}
        >
          {isPlaying ? '⏸️ Pause' : '▶️ Play'} Auto Slide
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-100"
          style={{
            width: isPlaying ? '100%' : '0%',
            animation: isPlaying ? 'progress 4s linear infinite' : 'none'
          }}
        />
      </div>
    </div>
  );
}

// Pricing Card Component
function PricingCard({ title, price, features, isPopular }: { title: string; price: string; features: string[]; isPopular?: boolean }) {
  return (
    <div className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
      isPopular ? 'border-indigo-500 scale-105' : 'border-gray-200 hover:border-indigo-300'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-indigo-600">{price}</span>
          <span className="text-gray-500">/project</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
          isPopular 
            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700' 
            : 'border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white'
        }`}>
          Pilih Paket
        </button>
      </div>
    </div>
  );
}

interface ContactFormData {
  nama: string;
  nomorTelepon: string;
  email: string;
  permintaan: string;
}

export default function Home() {
  const [formData, setFormData] = useState<ContactFormData>({
    nama: "",
    nomorTelepon: "",
    email: "",
    permintaan: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi form
    if (!formData.nama || !formData.nomorTelepon || !formData.email || !formData.permintaan) {
      alert('Mohon lengkapi semua field yang wajib diisi!');
      return;
    }
    
    const message = `Halo! Saya tertarik dengan layanan JOKI TUGAS 🎓

📝 *Detail Informasi Saya:*
👤 Nama: ${formData.nama}
📞 No. Telepon: ${formData.nomorTelepon}
📧 Email: ${formData.email}

📋 *Detail Permintaan:*
${formData.permintaan}

Mohon informasi lebih lanjut mengenai:
• Harga dan paket yang tersedia
• Timeline pengerjaan
• Proses kerja sama

Terima kasih! 🙏`;

    const whatsappUrl = `https://wa.me/6281235000291?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  JOKI TUGAS
                </h1>
                <span className="text-xs text-gray-500">Professional Services</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Beranda</a>
              <a href="#layanan" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Layanan</a>
              <a href="#tentang" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Tentang</a>
              <a href="#kontak" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Hubungi Kami
              </a>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full text-sm font-medium text-indigo-600 mb-8 shadow-lg">
            🎉 Trusted by 1000+ Students
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
            Solusi <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Profesional</span>
            <br />untuk Semua Tugas Anda
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Kami menyediakan layanan joki tugas berkualitas tinggi dengan hasil memuaskan. 
            Dari presentasi PowerPoint hingga pengembangan website, kami siap membantu Anda mencapai kesuksesan akademik dan profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a 
              href="#kontak" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">🚀</span>
              Mulai Konsultasi Gratis
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a 
              href="#layanan" 
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 shadow-lg"
            >
              <span className="mr-2">👀</span>
              Lihat Layanan Kami
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "1000+", label: "Tugas Diselesaikan", icon: "📋" },
              { number: "98%", label: "Tingkat Kepuasan", icon: "⭐" },
              { number: "24/7", label: "Customer Support", icon: "💬" },
              { number: "< 1 Jam", label: "Response Time", icon: "⚡" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menawarkan berbagai layanan profesional untuk memenuhi kebutuhan akademik dan bisnis Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon="📊"
              title="Presentasi PowerPoint"
              description="Pembuatan presentasi profesional yang menarik dan informatif"
              gradient="from-blue-500 to-cyan-500"
              features={[
                "Desain modern & menarik",
                "Konten berkualitas tinggi",
                "Animasi dan transisi",
                "Template custom"
              ]}
            />
            
            <ServiceCard
              icon="📝"
              title="Tugas Harian"
              description="Bantuan penyelesaian tugas-tugas akademik dengan kualitas terbaik"
              gradient="from-green-500 to-emerald-500"
              features={[
                "Berbagai mata kuliah",
                "Penelitian mendalam",
                "Referensi terpercaya",
                "Plagiarisme 0%"
              ]}
            />
            
            <ServiceCard
              icon="💻"
              title="Web Development"
              description="Pembuatan website modern dan responsif sesuai kebutuhan"
              gradient="from-purple-500 to-pink-500"
              features={[
                "Design responsive",
                "UI/UX modern",
                "SEO optimized",
                "Maintenance support"
              ]}
            />
            
            <ServiceCard
              icon="🎓"
              title="Joki Skripsi"
              description="Pendampingan penulisan skripsi dari awal hingga selesai"
              gradient="from-orange-500 to-red-500"
              features={[
                "Metodologi tepat",
                "Bimbingan intensif",
                "Revisi unlimited",
                "Konsultasi berkala"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Apa Kata Mereka?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testimoni dari klien yang puas dengan layanan profesional kami
            </p>
          </div>
          
          <AnimatedTestimonials />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Paket Harga Terjangkau</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Basic"
              price="Rp 50K"
              features={[
                "Tugas harian sederhana",
                "Revisi 2x",
                "Pengerjaan 2-3 hari"
              ]}
            />
            
            <PricingCard
              title="Professional"
              price="Rp 150K-300K"
              features={[
                "Tugas kompleks",
                "PPT advanced (20+ slide)",
                "Revisi unlimited",
                "Pengerjaan 3-5 hari",
                "Konsultasi via WA"
              ]}
              isPopular={true}
            />
            
            <PricingCard
              title="Premium"
              price="Rp 500K-2Jt+"
              features={[
                "Joki skripsi/thesis",
                "Web development advanced",
                "Research mendalam",
                "Metodologi lengkap",
                "Bimbingan intensif",
                "Priority support"
              ]}
            />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              *Harga dapat disesuaikan berdasarkan kompleksitas dan deadline
            </p>
            <a 
              href="#kontak" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              💬 Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cara Kerja Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proses yang simple dan transparan untuk hasil yang memuaskan
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultasi", desc: "Diskusi kebutuhan dan requirement project", icon: "💬" },
              { step: "02", title: "Quotation", desc: "Penawaran harga dan timeline pengerjaan", icon: "💰" },
              { step: "03", title: "Pengerjaan", desc: "Tim profesional mulai mengerjakan project", icon: "⚡" },
              { step: "04", title: "Delivery", desc: "Hasil selesai dan siap untuk presentasi", icon: "🚀" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-sm font-medium text-indigo-600 mb-6">
                ⭐ Mengapa Memilih Kami?
              </div>
              
              <h2 className="text-4xl font-bold text-gray-800 mb-8 leading-tight">
                Pengalaman & Kualitas yang 
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Terpercaya</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Pengerjaan Super Cepat</h3>
                    <p className="text-gray-600 leading-relaxed">Kami memahami deadline yang ketat dan selalu menyelesaikan tugas tepat waktu dengan sistem kerja 24/7.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Kualitas Premium Terjamin</h3>
                    <p className="text-gray-600 leading-relaxed">Tim profesional dengan pengalaman bertahun-tahun dan sertifikasi di bidangnya masing-masing.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Harga Student Friendly</h3>
                    <p className="text-gray-600 leading-relaxed">Paket harga yang kompetitif dengan berbagai pilihan sesuai budget mahasiswa dan profesional.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Privasi & Keamanan Terjaga</h3>
                    <p className="text-gray-600 leading-relaxed">Privasi dan kerahasiaan data klien adalah prioritas utama dengan sistem enkripsi end-to-end.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl transform rotate-3 opacity-20"></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Statistik Kepuasan Client</h3>
                  <p className="text-gray-600">Data real-time dari 1000+ project</p>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white text-2xl font-bold">1K+</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Tugas Diselesaikan</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white text-2xl font-bold">98%</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Tingkat Kepuasan</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white text-2xl font-bold">24/7</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Customer Support</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white text-xl font-bold">&lt;1h</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Response Time</div>
                  </div>
                </div>
                
                {/* Client logos simulation */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-center text-sm text-gray-500 mb-4">Dipercaya oleh mahasiswa dari:</p>
                  <div className="flex justify-center items-center space-x-6 opacity-60">
                    <span className="text-lg font-bold text-gray-400">UNESA</span>
                    <span className="text-lg font-bold text-gray-400">UNUSA</span>
                    <span className="text-lg font-bold text-gray-400">UINSA</span>
                    <span className="text-lg font-bold text-gray-400">UNTAG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
              💬 Mari Berkolaborasi
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Siap Membantu Kesuksesan 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Anda</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Isi form di bawah ini dan kami akan langsung menghubungi Anda melalui WhatsApp dengan penawaran terbaik
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nama" className="block text-sm font-semibold text-white mb-3">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    required
                    value={formData.nama}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="nomorTelepon" className="block text-sm font-semibold text-white mb-3">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="nomorTelepon"
                    name="nomorTelepon"
                    required
                    value={formData.nomorTelepon}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300"
                    placeholder="+62 8xx-xxxx-xxxx"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300"
                  placeholder="email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="permintaan" className="block text-sm font-semibold text-white mb-3">
                  Detail Permintaan *
                </label>
                <textarea
                  id="permintaan"
                  name="permintaan"
                  required
                  rows={5}
                  value={formData.permintaan}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300 resize-none"
                  placeholder="Jelaskan detail tugas yang ingin Anda kerjakan, deadline, requirements khusus, dan informasi lainnya yang relevan..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
                >
                  <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">💬</span>
                  Buka WhatsApp & Kirim Pesan
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <div className="mt-6 flex items-center justify-center space-x-6 text-white/80">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-sm">Response &lt; 1 Jam</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-sm">Konsultasi Gratis</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-sm">No Hidden Cost</span>
                  </div>
                </div>
                
                <p className="text-sm text-white/60 mt-4 max-w-md mx-auto">
                  Klik tombol di atas untuk membuka WhatsApp dengan pesan yang sudah terisi berdasarkan informasi Anda
                </p>
              </div>
            </form>
          </div>
          
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-white font-bold mb-2">WhatsApp</h3>
              <p className="text-white/80 text-sm">+62 812-3500-0291</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⏰</span>
              </div>
              <h3 className="text-white font-bold mb-2">Available</h3>
              <p className="text-white/80 text-sm">24/7 Online</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-white font-bold mb-2">Fast Response</h3>
              <p className="text-white/80 text-sm">&lt; 1 Hour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">J</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">JOKI TUGAS</h3>
                  <p className="text-gray-400 text-sm">Professional Academic Services</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Solusi profesional untuk semua kebutuhan tugas akademik dan bisnis Anda. 
                Dengan tim berpengalaman dan komitmen pada kualitas terbaik untuk kesuksesan Anda.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/6281235000291" 
                  className="group inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">📱</span>
                  <span className="font-medium">WhatsApp</span>
                </a>
                <div className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg">
                  <span className="mr-2">💬</span>
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Layanan Kami</h4>
              <ul className="space-y-3">
                {[
                  "📊 PowerPoint Professional",
                  "📝 Tugas Harian & Project",
                  "💻 Web Development",
                  "🎓 Joki Skripsi & Thesis",
                  "📄 Research & Analysis",
                  "🎨 Design Grafis"
                ].map((service, index) => (
                  <li key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Kontak & Info</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">📱</span>
                  <span>+62 812-3500-0291</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-blue-400 mr-3">⏰</span>
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-3">🚀</span>
                  <span>Response &lt; 1 jam</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-yellow-400 mr-3">💰</span>
                  <span>Harga Student Friendly</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-red-400 mr-3">🔒</span>
                  <span>100% Confidential</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="text-center">
              <p className="text-gray-400 mb-4">Dipercaya oleh mahasiswa</p>
              <div className="flex justify-center items-center space-x-8 text-gray-500">
                <span className="text-lg font-bold hover:text-white transition-colors">UNUSA</span>
                <span className="text-lg font-bold hover:text-white transition-colors">UINSA</span>
                <span className="text-lg font-bold hover:text-white transition-colors">UNTAG</span>
                <span className="text-lg font-bold hover:text-white transition-colors">UNIGA</span>
                <span className="text-lg font-bold hover:text-white transition-colors">UNESA</span>
                <span className="text-lg font-bold hover:text-white transition-colors">UBAYA</span>
              </div>
            </div>
          </div>
          
          {/* Bottom footer */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 JOKI TUGAS. All rights reserved. Made with ❤️ for your academic success.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🔒 Privacy Policy</span>
              <span>📋 Terms of Service</span>
              <span>❓ FAQ</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
