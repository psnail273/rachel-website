"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, MapPin } from "lucide-react";
import { LeafMotif } from "@/components/decorative/leaf-motif";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(fields: {
  name: string;
  email: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!validateEmail(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Clear previous submission states
    setSubmitError("");
    setSubmitSuccess(false);

    // Validate
    const validationErrors = validateForm({ name, email, message });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch {
      setSubmitError(
        "Unable to send your message. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-linear-to-br from-neutral-50 via-brand-purple/5 to-brand-teal/10 px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="page-title">Contact</h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600 sm:text-xl">
            I would love to hear from you. Reach out to schedule your free
            20-minute consultation or to ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative mx-auto max-w-5xl overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Willow motif — flexibility, emotional flow */}
        <LeafMotif
          variant="willow"
          className="absolute -left-16 bottom-12 hidden lg:block"
          size={280}
          opacity={0.04}
        />
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitSuccess ? (
              <div
                role="status"
                className="rounded-xl border border-brand-teal/30 bg-brand-teal/5 p-8 text-center sm:p-10"
              >
                <CheckCircle2
                  className="mx-auto size-12 text-brand-teal"
                  aria-hidden="true"
                />
                <h2 className="mt-4 text-2xl font-semibold text-brand-teal-dark">
                  Message Sent
                </h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-600 sm:text-lg">
                  Thank you for reaching out. I will get back to you as soon as
                  possible, typically within one to two business days.
                </p>
                <Button
                  onClick={() => setSubmitSuccess(false)}
                  variant="outline"
                  size="lg"
                  className="mt-6 h-12 px-8 text-base"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold text-brand-purple">
                  Send a Message
                </h2>
                <p className="mt-2 text-base text-neutral-600">
                  Feel free to mention your interest in the free 20-minute
                  consultation in your message.
                </p>

                {submitError && (
                  <div
                    role="alert"
                    className="mt-6 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive"
                  >
                    {submitError}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-6"
                >
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      aria-invalid={!!errors.name}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        role="alert"
                        className="text-sm text-destructive"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        role="alert"
                        className="text-sm text-destructive"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell me a bit about what brings you here. Feel free to mention that you'd like to schedule a free 20-minute consultation."
                      rows={5}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) {
                          setErrors((prev) => ({
                            ...prev,
                            message: undefined,
                          }));
                        }
                      }}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "contact-message-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="text-sm text-destructive"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 w-full px-8 text-base sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          className="size-5 animate-spin"
                          aria-hidden="true"
                        />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar: Location and Info */}
          <aside className="relative lg:col-span-2">
            {/* Nature decorative element */}
            <LeafMotif
              variant="circle"
              className="absolute -right-12 -top-8 hidden lg:block"
              size={200}
              opacity={0.05}
            />

            <div className="rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-brand-purple">
                Location
              </h2>
              <div className="mt-4 flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-5 shrink-0 text-brand-teal"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-base font-medium text-neutral-800">
                    St. Louis, Missouri
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    Serving zip codes 63139, 63103, 63108 and surrounding areas
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border-2 border-brand-teal/30 bg-brand-teal/5 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-brand-teal-dark">
                Free Consultation
              </h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                Not sure where to start? I offer a free 20-minute phone
                consultation so we can discuss your needs and see if we are a
                good fit.
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                Mention your interest in the free consultation in the message
                form and I will reach out to schedule a time.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
