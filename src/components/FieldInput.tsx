type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
};

export function FieldInput({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
  placeholder,
}: Readonly<Props>) {
  const baseClasses =
    "w-full bg-transparent border-b focus:outline-none focus:border-violet-600 py-2";

  return (
    <div className="w-full">
      <label className="block text-sm mb-2">
        {label} <span className="text-red-500">*</span>
      </label>

      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className={baseClasses}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
