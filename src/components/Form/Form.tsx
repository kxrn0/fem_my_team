import { FormEvent, useState } from "react";
import SCForm from "./Form.styled.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [noName, setNoName] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [noCompany, setNoCompany] = useState(false);
  const [noTitle, setNoTitle] = useState(false);
  const [noMessage, setNoMessage] = useState(false);

  async function send(
    name: string,
    email: string,
    company: string,
    title: string,
    message: string
  ) {
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ name, email, company, title, message }),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
    } catch (error) {
      throw error;
    }
  }

  async function handle_submission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form["name"] as any).value.trim(); //fuck typescript
    const email = form["email"].value.trim();
    const company = form["company"].value.trim();
    const title = (form["title"] as any).value.trim(); //fuck typescript
    const message = form["message"].value.trim();

    if (!name || !email || !company || !title || !message) {
      if (!name) setNoName(true);
      if (!email) setNoEmail(true);
      if (!company) setNoCompany(true);
      if (!title) setNoTitle(true);
      if (!message) setNoMessage(true);

      return;
    }

    try {
      await send(name, email, company, title, message);

      toast.success("Message delivered! we'll get back to you shortly!");
    } catch (error) {
      toast.error("Something went wrong! check your connection and try again!");
    }
  }

  return (
    <SCForm onSubmit={handle_submission}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="fs-body-2"
          onChange={() => setNoName(false)}
        />
        <p className={`error ${noName && "active"}`}>This field is required</p>
      </label>
      <label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="fs-body-2"
          onChange={() => setNoEmail(false)}
        />
        <p className={`error ${noEmail && "active"}`}>This field is required</p>
      </label>
      <label>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="fs-body-2"
          onChange={() => setNoCompany(false)}
        />
        <p className={`error ${noCompany && "active"}`}>
          This field is required
        </p>
      </label>
      <label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="fs-body-2"
          onChange={() => setNoTitle(false)}
        />
        <p className={`error ${noTitle && "active"}`}>This field is required</p>
      </label>
      <label>
        <textarea
          name="message"
          placeholder="Message"
          className="fs-body-2"
          onChange={() => setNoMessage(false)}
        ></textarea>
        <p className={`error ${noMessage && "active"}`}>
          This field is required
        </p>
      </label>
      <button className="button-secondary fs-body-1">submit</button>
      <ToastContainer position="top-center" />
    </SCForm>
  );
}
