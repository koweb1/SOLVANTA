"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type PropertyType = "Residential" | "Commercial";
type Summary = {
  firstName: string;
  rows: { label: string; value: string }[];
};

const businessTypes = [
  "Office or retail",
  "Factory or manufacturing",
  "School or university",
  "Hospital or clinic",
  "Hotel or hospitality",
  "Farm or agro-processing",
  "Other",
];

const needsOptions = [
  "Solar panels",
  "Battery storage",
  "Generator backup",
  "Not sure yet",
];

const contactOptions = ["Phone call", "WhatsApp", "Email"];

const input =
  "w-full min-h-[52px] rounded-lg border-[1.5px] border-line-light bg-white px-4 py-3.5 text-ink transition-[border-color,box-shadow] duration-200 placeholder:text-[#7b8596] hover:border-ink/35 focus:border-gold-deep focus:shadow-[0_0_0_3px_rgba(242,169,61,.3)] focus:outline-none motion-reduce:transition-none";

const optionFace =
  "block border-[1.5px] border-line-light bg-white transition-[border-color,box-shadow,background-color] duration-200 hover:border-ink/35 peer-checked:border-gold-deep! peer-checked:bg-[#fffaf1] peer-checked:shadow-[0_0_0_1px_var(--color-gold-deep)] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-[3px] peer-focus-visible:outline-gold motion-reduce:transition-none";

const legend =
  "mb-1.5 p-0 font-head text-[1.35rem] font-semibold tracking-[-.01em]";
const field = "grid min-w-0 gap-2";
const label = "text-[.95rem] font-medium";
const optional = "font-normal text-steel";

const buttonBase =
  "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-[1.5px] font-head font-semibold transition-colors duration-200 motion-reduce:transition-none";

export default function QuoteForm() {
  const [propertyType, setPropertyType] = useState<PropertyType>("Residential");
  const [summary, setSummary] = useState<Summary | null>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const isCommercial = propertyType === "Commercial";

  // Move focus to the thank-you panel so screen readers announce it.
  useEffect(() => {
    if (!summary) return;
    doneRef.current?.focus();
    doneRef.current?.scrollIntoView({ block: "start" });
  }, [summary]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const needs = data.getAll("needs").map(String);
    const business = String(data.get("businessType") ?? "");
    const name = String(data.get("name") ?? "").trim();

    const property =
      isCommercial && business ? `Commercial (${business})` : propertyType;

    setSummary({
      firstName: name.split(" ")[0],
      rows: [
        { label: "Name", value: name },
        { label: "Phone", value: String(data.get("phone") ?? "") },
        { label: "Property", value: property },
        { label: "Location", value: String(data.get("location") ?? "") },
        {
          label: "Interested in",
          value: needs.length ? needs.join(", ") : "Not selected",
        },
        { label: "Contact by", value: String(data.get("contactBy") ?? "") },
      ],
    });

    // TODO (before launch): send these details to your email, WhatsApp, or
    // CRM. Right now nothing is sent or saved anywhere.
  }

  function sendAnother() {
    setSummary(null);
    setPropertyType("Residential");
    requestAnimationFrame(() =>
      formRef.current?.scrollIntoView({ block: "start" }),
    );
  }

  if (summary) {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        aria-live="polite"
        className="scroll-mt-[120px] rounded-xl border-[1.5px] border-gold-deep bg-white p-[clamp(28px,4vw,48px)]"
      >
        <h2 className="max-w-none text-[clamp(1.8rem,3vw,2.4rem)]">
          {summary.firstName ? `Thank you, ${summary.firstName}` : "Thank you"}
        </h2>
        <p className="mt-3 text-steel">
          We have your request. A member of our team will contact you shortly.
        </p>
        <dl className="mt-7 grid gap-3.5 border-t border-line-light pt-6">
          {summary.rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[150px_1fr] gap-4 max-[560px]:grid-cols-1 max-[560px]:gap-0.5"
            >
              <dt className="text-[.92rem] text-steel">{row.label}</dt>
              <dd className="font-medium break-words">{row.value}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          onClick={sendAnother}
          className={`${buttonBase} mt-8 w-auto border-ink px-[1.7em] py-[.95em] text-[.95rem] text-ink hover:bg-ink hover:text-ivory`}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit}
      className="grid scroll-mt-[120px] gap-11"
    >
      <fieldset className="grid min-w-0 gap-5 border-0">
        <legend className={legend}>Your property</legend>

        <div
          role="radiogroup"
          aria-label="Property type"
          className="grid grid-cols-2 gap-3 max-[560px]:grid-cols-1"
        >
          {(
            [
              { value: "Residential", hint: "Home or apartment" },
              {
                value: "Commercial",
                hint: "Business, school, farm, or industrial site",
              },
            ] as const
          ).map((option) => (
            <label key={option.value} className="relative block cursor-pointer">
              <input
                type="radio"
                name="propertyType"
                value={option.value}
                checked={propertyType === option.value}
                onChange={() => setPropertyType(option.value)}
                className="peer sr-only"
              />
              <span className={`${optionFace} rounded-lg px-[18px] py-4`}>
                <b className="block font-head text-[1.05rem] font-semibold">
                  {option.value}
                </b>
                <small className="mt-0.5 block text-[.88rem] text-steel">
                  {option.hint}
                </small>
              </span>
            </label>
          ))}
        </div>

        {isCommercial && (
          <div className={field}>
            <label htmlFor="businessType" className={label}>
              Type of business
            </label>
            <select
              id="businessType"
              name="businessType"
              required
              defaultValue=""
              className={input}
            >
              <option value="">Choose one</option>
              {businessTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
        )}

        <div className={field}>
          <label htmlFor="location" className={label}>
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            autoComplete="address-level2"
            placeholder="City or area"
            required
            className={input}
          />
        </div>
      </fieldset>

      <fieldset className="grid min-w-0 gap-5 border-0">
        <legend className={legend}>What you need</legend>

        <div className={field}>
          <span id="needsLbl" className={label}>
            Select everything that applies
          </span>
          <div
            role="group"
            aria-labelledby="needsLbl"
            className="flex flex-wrap gap-2.5"
          >
            {needsOptions.map((option) => (
              <label key={option} className="relative block cursor-pointer">
                <input
                  type="checkbox"
                  name="needs"
                  value={option}
                  className="peer sr-only"
                />
                <span
                  className={`${optionFace} rounded-full px-[18px] py-[11px] text-[.95rem]`}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className={field}>
          <label htmlFor="spend" className={label}>
            Monthly electricity and fuel spend{" "}
            <span className={optional}>(optional)</span>
          </label>
          <input
            id="spend"
            name="spend"
            type="text"
            inputMode="numeric"
            placeholder="For example 150,000"
            className={input}
          />
          <span className="text-[.88rem] text-steel">
            Add your grid bill and generator fuel. An estimate is fine, and it
            helps us size your system.
          </span>
        </div>
      </fieldset>

      <fieldset className="grid min-w-0 gap-5 border-0">
        <legend className={legend}>Your details</legend>

        <div className="grid grid-cols-2 gap-5 max-[560px]:grid-cols-1">
          <div className={field}>
            <label htmlFor="fullName" className={label}>
              Full name
            </label>
            <input
              id="fullName"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={input}
            />
          </div>
          <div className={field}>
            <label htmlFor="phone" className={label}>
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="Include WhatsApp if you use it"
              required
              className={input}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 max-[560px]:grid-cols-1">
          <div className={field}>
            <label htmlFor="email" className={label}>
              Email <span className={optional}>(optional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={input}
            />
          </div>
          <div className={field}>
            <label htmlFor="contactBy" className={label}>
              How should we reach you?
            </label>
            <select id="contactBy" name="contactBy" className={input}>
              {contactOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={field}>
          <label htmlFor="message" className={label}>
            Anything else we should know?{" "}
            <span className={optional}>(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="For example: your roof type, the appliances you want to run, or when you want to start."
            className={`${input} min-h-[130px] resize-y`}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        className={`${buttonBase} border-transparent bg-gold px-8 py-[1.1em] text-[1.02rem] text-[#1a1204] hover:bg-[#ffbd5c]`}
      >
        Request my quote
      </button>
      <p className="-mt-6 text-[.9rem] text-steel">
        We will use your details only to contact you about your quote.
      </p>
    </form>
  );
}
