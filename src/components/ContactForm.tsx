"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "@/hooks/useLocale";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const t = useTranslations("ContactPage");
  const { locale } = useLocale();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t("form.validation.nameRequired");
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t("form.validation.nameMinLength");
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t("form.validation.emailRequired");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = t("form.validation.emailInvalid");
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t("form.validation.messageRequired");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("form.validation.messageMinLength");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, locale }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(data.error || t("form.error"));
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(t("form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-black/5">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {t("form.title")}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t("form.description")}
        </p>
      </div>

      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <p className="text-emerald-800 font-medium">{submitMessage}</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-800 font-medium">{submitMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("form.name")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("form.namePlaceholder")}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 outline-0 ${
                errors.name
                  ? "border-red-300 focus:ring-red-500"
                  : "border-gray-300 focus:ring-emerald-500 group-hover:border-emerald-400"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("form.email")} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("form.emailPlaceholder")}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 outline-0 ${
                errors.email
                  ? "border-red-300 focus:ring-red-500"
                  : "border-gray-300 focus:ring-emerald-500 group-hover:border-emerald-400"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("form.message")} <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("form.messagePlaceholder")}
            rows={6}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 resize-none outline-0 ${
              errors.message
                ? "border-red-300 focus:ring-red-500"
                : "border-gray-300 focus:ring-emerald-500 group-hover:border-emerald-400"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-102 hover:shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          )}
          {isSubmitting ? t("form.sending") : t("form.submit")}
        </button>
      </form>
    </div>
  );
}
