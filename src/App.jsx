import React, { useState } from "react";

const plans = [
  {
    name: "Basic",
    monthly: "$0",
    annual: "$0",
    description: "Ideal for small teams and test environments",
    features: ["Up to 10 devices", "Self-service setup", "Basic reporting"],
    cta: "Get Started",
  },
  {
    name: "Professional",
    monthly: "$8/device/mo",
    annual: "$80/device/yr",
    description: "For growing teams with advanced needs",
    features: [
      "Unlimited devices",
      "Advanced reporting",
      "Email support",
      "ID provider integration",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: "Custom pricing",
    annual: "Custom pricing",
    description: "Tailored solution with full support",
    features: [
      "Custom SLA",
      "Dedicated support",
      "On-prem options",
      "Advanced analytics",
    ],
    cta: "Contact Sales",
  },
];

export default function App() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        SAFEQ Cloud Pricing
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Choose the plan that fits your organization best.
      </p>
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full border p-1 bg-gray-100">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-full ${billingCycle === "monthly" ? "bg-white shadow" : "text-gray-500"
              }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-full ${billingCycle === "annual" ? "bg-white shadow" : "text-gray-500"
              }`}
            onClick={() => setBillingCycle("annual")}
          >
            Annual
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-6 shadow-lg flex flex-col justify-between ${plan.highlighted ? "border-blue-500 border-2" : ""
              }`}
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-center">
                {plan.name}
              </h2>
              <p className="text-center text-3xl font-bold text-blue-600">
                {plan[billingCycle]}
              </p>
              <p className="text-center text-gray-500">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                  {plan.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}