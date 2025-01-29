"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useState } from "react";
import { Copy } from "lucide-react";

const TokenForm = () => {
  const [token, setToken] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    token,
  });
  const generateToken = () => {
    const code = Math.random().toString(36).substr(2, 6).toUpperCase();
    setToken(code);
  };

  const copyToken = () => {
    const codeSection = document.getElementById("codeDisplay");
    const code = codeSection.innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert("Copied to clipboard");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="form p-6 m-6 max-w-[550px] bg-white dark:bg-black/50 rounded-lg shadow">
      <form className="form grid w-full gap-6">
        <Label htmlFor="name">Name:</Label>
        <Input
          id="name"
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />

        <Label htmlFor="password">Phone Number (with country code):</Label>
        <Input
          id="password"
          type="tel"
          placeholder="+233 12 345 6789"
          value={values.email}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />

        {token && (
          <div className="code-section flex gap-2" id="codeDisplay">
            {token}
            <Copy onClick={copyToken} />
          </div>
        )}

        <Button variant="secondary" type="button" onClick={generateToken}>
          Generate Token
        </Button>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TokenForm;
