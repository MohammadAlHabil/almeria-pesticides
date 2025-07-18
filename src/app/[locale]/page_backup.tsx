import { ParamsProps } from "@/utils/types";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import {
  ArrowRight,
  CheckCircle,
  Sprout,
  Truck,
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function Home({ params }: ParamsProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("HomePage");
  const isArabic = locale === "ar";

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sprout className="w-4 h-4" />
              <span>{t("about.title")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
              <span className="block">{t("hero.title")}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                {t("hero.cta")}
                <ArrowRight
                  className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                    isArabic
                      ? "rotate-180 group-hover:translate-x-[-0.25rem]"
                      : ""
                  }`}
                />
              </Link>

              <div className="flex items-center gap-2 text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-emerald-100 rounded-full border-2 border-white flex items-center justify-center"
                    >
                      <Star className="w-4 h-4 text-emerald-600 fill-current" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium">
                  1000+ {locale === "ar" ? "مزارع راضٍ" : "Happy Farmers"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("about.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t("products.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                key: "pesticides",
                icon: "🧪",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                key: "health",
                icon: "🏥",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                key: "fertilizers",
                icon: "🌱",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                key: "seeds",
                icon: "🌾",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                key: "irrigation",
                icon: "💧",
                gradient: "from-blue-500 to-indigo-500",
              },
            ].map(({ key, icon, gradient }) => (
              <div
                key={key}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(`products.${key}.title`)}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {t(`products.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t("whyUs.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("whyUs.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                key: "quality",
                icon: CheckCircle,
                color: "text-emerald-600",
              },
              {
                key: "team",
                icon: Users,
                color: "text-blue-600",
              },
              {
                key: "delivery",
                icon: Truck,
                color: "text-purple-600",
              },
            ].map(({ key, icon: IconComponent, color }) => (
              <div
                key={key}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6 ${color}`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>

                <p className="text-lg font-semibold text-gray-800">
                  {t(`whyUs.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>

          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
            {t("cta.subtitle")}
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {t("cta.button")}
            <ArrowRight
              className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                isArabic ? "rotate-180 group-hover:translate-x-[-0.25rem]" : ""
              }`}
            />
          </Link>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">
                {locale === "ar" ? "العنوان" : "Address"}
              </h3>
              <p className="text-gray-300">{t("footer.address")}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">
                {locale === "ar" ? "الهاتف" : "Phone"}
              </h3>
              <a
                href={`tel:${t("footer.phone")}`}
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                {t("footer.phone")}
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">
                {locale === "ar" ? "البريد الإلكتروني" : "Email"}
              </h3>
              <a
                href={`mailto:${t("footer.email")}`}
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                {t("footer.email")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
