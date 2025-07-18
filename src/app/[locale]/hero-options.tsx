{
  /* Hero Section - Design Option 1: Animated Gradient with Floating Elements */
}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900">
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-emerald-900/30"></div>
  </div>

  {/* Floating Agricultural Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating Circles */}
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-400/5 rounded-full blur-3xl animate-spin"
      style={{ animationDuration: "20s" }}
    ></div>

    {/* Geometric Patterns */}
    <div
      className="absolute top-10 right-10 w-32 h-32 border border-emerald-400/20 rotate-45 animate-spin"
      style={{ animationDuration: "15s" }}
    ></div>
    <div
      className="absolute bottom-20 left-10 w-24 h-24 border-2 border-teal-400/30 rounded-full animate-ping"
      style={{ animationDuration: "3s" }}
    ></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
    {/* Premium Badge */}
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-xl border border-emerald-400/30 text-emerald-100 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      <Sprout className="w-4 h-4" />
      <span>{t("about.title")}</span>
    </div>

    {/* Main Title with Gradient Text */}
    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight">
      <span className="block bg-gradient-to-r from-emerald-300 via-teal-200 to-green-300 bg-clip-text text-transparent drop-shadow-2xl">
        {t("hero.title")}
      </span>
    </h1>

    {/* Subtitle with Animation */}
    <p className="text-xl sm:text-2xl lg:text-3xl text-emerald-100/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
      {t("hero.subtitle")}
    </p>

    {/* CTA Section */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
      <Link
        href="/contact"
        className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="relative z-10">{t("hero.cta")}</span>
        <ArrowRight
          className={`w-6 h-6 transition-transform group-hover:translate-x-1 relative z-10 ${
            isArabic ? "rotate-180 group-hover:translate-x-[-0.25rem]" : ""
          }`}
        />
      </Link>

      {/* Stats Display */}
      <div className="flex items-center gap-4 text-emerald-100/80">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4, 5].map(i => (
            <div
              key={i}
              className="w-12 h-12 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 backdrop-blur-sm rounded-full border-2 border-emerald-300/40 flex items-center justify-center transform hover:scale-110 transition-transform"
            >
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
          ))}
        </div>
        <div className="text-left">
          <div className="text-2xl font-bold text-white">1000+</div>
          <div className="text-sm font-medium">
            {locale === "ar" ? "مزارع راضٍ" : "Happy Farmers"}
          </div>
        </div>
      </div>
    </div>

    {/* Feature Highlights */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {[
        {
          icon: "🌱",
          text: locale === "ar" ? "منتجات عضوية" : "Organic Products",
        },
        {
          icon: "🚚",
          text: locale === "ar" ? "توصيل سريع" : "Fast Delivery",
        },
        {
          icon: "🏆",
          text: locale === "ar" ? "جودة عالية" : "Premium Quality",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-white font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Enhanced Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
    <div className="text-emerald-300 text-sm font-medium animate-pulse">
      {locale === "ar" ? "اكتشف المزيد" : "Discover More"}
    </div>
    <div className="w-8 h-12 border-2 border-emerald-300/60 rounded-full flex justify-center animate-bounce">
      <div className="w-1.5 h-4 bg-emerald-300/60 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>;

{
  /* Hero Section - Design Option 2: Split Screen with Video Background */
}
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/videos/agriculture-hero.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
  </div>

  {/* Particle Animation Overlay */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-ping"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`,
        }}
      ></div>
    ))}
  </div>

  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 text-emerald-100 px-6 py-3 rounded-full text-sm font-medium shadow-lg">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="font-semibold">
            {locale === "ar"
              ? "رائدون في الزراعة الحديثة"
              : "Leading Modern Agriculture"}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
          <span className="block mb-2">{t("hero.title").split(" ")[0]}</span>
          <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
            {t("hero.title").split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-lg">
          {t("hero.subtitle")}
        </p>

        {/* Features List */}
        <div className="space-y-4">
          {[
            {
              icon: "✓",
              text:
                locale === "ar"
                  ? "منتجات مضمونة الجودة"
                  : "Quality Guaranteed Products",
            },
            {
              icon: "✓",
              text:
                locale === "ar" ? "خدمة عملاء 24/7" : "24/7 Customer Service",
            },
            {
              icon: "✓",
              text:
                locale === "ar"
                  ? "توصيل مجاني للطلبات الكبيرة"
                  : "Free Delivery on Large Orders",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-200">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {item.icon}
              </div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
          >
            {t("hero.cta")}
            <ArrowRight
              className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                isArabic ? "rotate-180 group-hover:translate-x-[-0.25rem]" : ""
              }`}
            />
          </Link>

          <button className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
            {locale === "ar" ? "شاهد المنتجات" : "View Products"}
          </button>
        </div>
      </div>

      {/* Right Content - Stats Cards */}
      <div className="space-y-6">
        {[
          {
            number: "1000+",
            label: locale === "ar" ? "مزارع راضٍ" : "Happy Farmers",
            icon: "👨‍🌾",
            color: "from-emerald-500 to-teal-500",
          },
          {
            number: "50+",
            label: locale === "ar" ? "منتج عالي الجودة" : "Premium Products",
            icon: "🌱",
            color: "from-green-500 to-emerald-500",
          },
          {
            number: "15+",
            label: locale === "ar" ? "سنة خبرة" : "Years Experience",
            icon: "⭐",
            color: "from-blue-500 to-cyan-500",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-2xl`}
              >
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Floating Action Button */}
  <div className="absolute bottom-8 right-8">
    <button className="w-16 h-16 bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white transform hover:scale-110">
      <ArrowRight className={`w-6 h-6 ${isArabic ? "rotate-180" : ""}`} />
    </button>
  </div>
</section>;

{
  /* Hero Section - Design Option 4: Glassmorphism with Parallax */
}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Multi-layer Parallax Background */}
  <div className="absolute inset-0">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950"></div>

    {/* Animated mesh gradient */}
    <div className="absolute inset-0 opacity-40">
      <div
        className="w-full h-full bg-gradient-to-br from-emerald-400/20 via-transparent to-teal-400/20"
        style={{
          background: `
                  radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(45, 212, 191, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)
                `,
          animation: "mesh 8s ease-in-out infinite alternate",
        }}
      ></div>
    </div>

    {/* Floating orbs */}
    <div className="absolute inset-0">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-emerald-400/10 to-teal-400/10 blur-xl"
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 3 + 4}s ease-in-out infinite ${
              Math.random() * 2
            }s`,
          }}
        ></div>
      ))}
    </div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <div className="text-center">
      {/* Glassmorphism Badge */}
      <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-3xl border border-white/10 text-white px-8 py-4 rounded-full text-sm font-medium mb-12 shadow-2xl hover:bg-white/10 transition-all duration-300">
        <div className="relative flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-300"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-600"></div>
        </div>
        <Sprout className="w-5 h-5 text-emerald-400" />
        <span className="font-semibold">{t("about.title")}</span>
      </div>

      {/* Massive 3D Title */}
      <div className="mb-12">
        <h1 className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] font-black leading-none tracking-tight">
          <span
            className="block bg-gradient-to-b from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent"
            style={{
              textShadow: `
                      0 1px 0 rgba(255,255,255,0.1),
                      0 2px 0 rgba(255,255,255,0.1),
                      0 3px 0 rgba(255,255,255,0.1),
                      0 4px 0 rgba(255,255,255,0.1),
                      0 5px 0 rgba(255,255,255,0.1),
                      0 6px 1px rgba(0,0,0,0.1),
                      0 0 5px rgba(0,0,0,0.1),
                      0 1px 3px rgba(0,0,0,0.3),
                      0 3px 5px rgba(0,0,0,0.2),
                      0 5px 10px rgba(0,0,0,0.25)
                    `,
              transform: "perspective(500px) rotateX(15deg)",
            }}
          >
            {t("hero.title")}
          </span>
        </h1>
      </div>

      {/* Glassmorphism Content Card */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 leading-relaxed font-light mb-8">
            {t("hero.subtitle")}
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              {
                text: locale === "ar" ? "منتجات طبيعية" : "Natural Products",
                icon: "🌿",
              },
              {
                text: locale === "ar" ? "جودة عالية" : "Premium Quality",
                icon: "⭐",
              },
              {
                text: locale === "ar" ? "خدمة سريعة" : "Fast Service",
                icon: "⚡",
              },
              {
                text: locale === "ar" ? "دعم متواصل" : "24/7 Support",
                icon: "🔧",
              },
            ].map((pill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg">{pill.icon}</span>
                <span>{pill.text}</span>
              </div>
            ))}
          </div>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <span className="relative z-10">{t("hero.cta")}</span>
              <ArrowRight
                className={`w-6 h-6 transition-all duration-300 group-hover:translate-x-1 relative z-10 ${
                  isArabic
                    ? "rotate-180 group-hover:translate-x-[-0.25rem]"
                    : ""
                }`}
              />
            </Link>

            <Link
              href="#products"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>
                {locale === "ar" ? "تصفح المنتجات" : "Browse Products"}
              </span>
              <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          {
            number: "1000+",
            label: locale === "ar" ? "عميل راضٍ" : "Happy Clients",
            sublabel: locale === "ar" ? "منذ 2009" : "Since 2009",
          },
          {
            number: "50+",
            label: locale === "ar" ? "منتج متنوع" : "Diverse Products",
            sublabel: locale === "ar" ? "جودة مضمونة" : "Quality Assured",
          },
          {
            number: "24/7",
            label: locale === "ar" ? "دعم فني" : "Technical Support",
            sublabel: locale === "ar" ? "متاح دائماً" : "Always Available",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-4xl font-black text-emerald-400 mb-2">
              {stat.number}
            </div>
            <div className="text-lg font-semibold text-white mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-white/60">{stat.sublabel}</div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Advanced Scroll Indicator */}
  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
    <div className="text-white/80 text-sm font-medium tracking-wider uppercase">
      {locale === "ar" ? "اكتشف المزيد" : "Discover More"}
    </div>
    <div className="relative">
      <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center overflow-hidden">
        <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-bounce"></div>
      </div>
      <div className="absolute inset-0 border-2 border-emerald-400/20 rounded-full animate-ping"></div>
    </div>
  </div>
</section>;

{
  /* Hero Section - Design Option base */
}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
      alt="Agricultural field with crops"
      fill
      className="object-cover object-center"
      priority
    />
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  {/* Pattern Overlay */}
  <div className="absolute inset-0 opacity-10">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    ></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
      <Sprout className="w-4 h-4" />
      <span>{t("about.title")}</span>
    </div>

    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 drop-shadow-lg">
      <span className="block">{t("hero.title")}</span>
    </h1>

    <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
      {t("hero.subtitle")}
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        href="/contact"
        className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
      >
        {t("hero.cta")}
        <ArrowRight
          className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
            isArabic ? "rotate-180 group-hover:translate-x-[-0.25rem]" : ""
          }`}
        />
      </Link>

      <div className="flex items-center gap-2 text-white/80">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 flex items-center justify-center"
            >
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
          ))}
        </div>
        <span className="text-sm font-medium">
          1000+ {locale === "ar" ? "مزارع راضٍ" : "Happy Farmers"}
        </span>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>;

<style jsx>{`
  @keyframes mesh {
    0%,
    100% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.1) rotate(2deg);
    }
  }
`}</style>;
