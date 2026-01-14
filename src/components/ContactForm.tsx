import { useState } from "react";
import { FieldInput } from "./FieldInput";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Partial<FormState> = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    try {
      setLoading(true);

      // 🔗 Replace with real API
      await new Promise((res) => setTimeout(res, 1500));

      setSuccess("Message sent successfully!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="">
      <div className="divider-x"></div>
      <div className="my-28 flex items-center justify-center px-4">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl">
          <h2 className="h4 text-center mb-16">
            Drop Me a Line, Let Me Know What You Think
          </h2>
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <FieldInput
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <FieldInput
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>

          {/* Email */}
          <div className="mb-10">
            <FieldInput
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>

          {/* Message */}
          <div className="mb-14">
            <FieldInput
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              textarea
            />
          </div>

          <button
            disabled={loading}
            className="bg-violet-700 text-white px-12 py-3 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {success && <p className="text-green-600 mt-6 text-sm">{success}</p>}
        </form>
      </div>
    </section>
  );
}
