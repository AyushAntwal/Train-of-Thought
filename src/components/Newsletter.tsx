import { useState } from "react";
import { FieldInput } from "./FieldInput";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    if (!email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Invalid email address";
    if (!agree) return "You must agree to subscribe";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      // 🔗 Replace with API call
      await new Promise((res) => setTimeout(res, 1200));

      setSuccess("You're subscribed!");
      setEmail("");
      setAgree(false);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <div className="mb-6">
        <FieldInput
          name="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div className="flex items-center gap-2 mb-6 caption">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="accent-white"
        />
        <span>Yes, subscribe me to your newsletter.*</span>
      </div>

      {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
      {success && <p className="text-green-500 text-xs mb-4">{success}</p>}

      <button
        disabled={loading}
        className="
            border 
            px-8 py-2
            text-sm
            transition
            disabled:opacity-50
          "
      >
        {loading ? "SUBMITTING..." : "SUBMIT"}
      </button>
    </form>
  );
}
