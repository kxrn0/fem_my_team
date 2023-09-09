import { ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SCForm from "./Form.styled.jsx";

type FormDataType = {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
};

type ErrorType = {
  name: boolean;
  email: boolean;
  company: boolean;
  title: boolean;
  message: boolean;
};

export default function Form() {
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });
  const [errors, setErrors] = useState<ErrorType>({
    name: false,
    email: false,
    company: false,
    title: false,
    message: false,
  });

  async function send(data: Record<string, string>) {
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
    } catch (error) {
      throw error;
    }
  }

  async function handle_submission(event: FormEvent) {
    event.preventDefault();

    const data: FormDataType = {
      name: "",
      email: "",
      company: "",
      title: "",
      message: "",
    };
    for (let key in formData) {
      const trimmed = formData[key as keyof FormDataType].trim();

      data[key as keyof FormDataType] = trimmed;
    }

    if (Object.keys(data).some((key) => !data[key as keyof FormDataType])) {
      const errors: ErrorType = {
        name: false,
        email: false,
        company: false,
        title: false,
        message: false,
      };

      Object.keys(data).forEach(
        (key) =>
          (errors[key as keyof FormDataType] = !data[key as keyof FormDataType])
      );

      setErrors(errors);
      return;
    }

    setIsSending(true);

    try {
      await send(data);

      toast.success("Message delivered! we'll get back to you shortly!");
      setFormData((prev) => {
        const obj: FormDataType = {
          name: "",
          email: "",
          company: "",
          title: "",
          message: "",
        };

        for (let key in prev) obj[key as keyof FormDataType] = "";

        return obj;
      });
    } catch (error) {
      toast.error("Something went wrong! check your connection and try again!");
    } finally {
      setIsSending(false);
    }
  }

  function handle_change(event: ChangeEvent) {
    const { name, value } = event.target as HTMLInputElement;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  }

  return (
    <SCForm onSubmit={handle_submission}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={`fs-body-2 ${errors.name && "invalid"}`}
          value={formData.name}
          onChange={handle_change}
        />
        <p className={`error fs-body-5 ${errors.name && "active"}`}>
          This field is required
        </p>
      </label>
      <label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className={`fs-body-2 ${errors.email && "invalid"}`}
          value={formData.email}
          onChange={handle_change}
        />
        <p className={`error fs-body-5 ${errors.email && "active"}`}>
          This field is required
        </p>
      </label>
      <label>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className={`fs-body-2 ${errors.company && "invalid"}`}
          value={formData.company}
          onChange={handle_change}
        />
        <p className={`error fs-body-5 ${errors.company && "active"}`}>
          This field is required
        </p>
      </label>
      <label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className={`fs-body-2 ${errors.title && "invalid"}`}
          value={formData.title}
          onChange={handle_change}
        />
        <p className={`error fs-body-5 ${errors.title && "active"}`}>
          This field is required
        </p>
      </label>
      <label>
        <textarea
          name="message"
          placeholder="Message"
          className={`fs-body-2 ${errors.message && "invalid"}`}
          value={formData.message}
          onChange={handle_change}
        ></textarea>
        <p className={`error fs-body-5 ${errors.message && "active"}`}>
          This field is required
        </p>
      </label>
      <button className="button-secondary fs-body-1" disabled={isSending}>
        submit
      </button>
      <ToastContainer position="top-center" />
    </SCForm>
  );
}
