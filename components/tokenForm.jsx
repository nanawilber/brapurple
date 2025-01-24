"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const TokenForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form p-6 m-6 max-w-[550px] bg-white dark:bg-black/50 rounded-lg shadow">
      <form className="form grid w-full gap-6">
        <Label htmlFor="firstName">First Name:</Label>
        <Input id="firstName" type="text" placeholder="First Name" />

        <Label htmlFor="lastName">Last Name:</Label>
        <Input id="lastName" type="text" placeholder="Last Name" />

        <Label htmlFor="email">Email:</Label>
        <Input id="email" type="email" placeholder="Email" />

        <Label htmlFor="password">Phone Number (with country code):</Label>
        <Input id="password" type="tel" placeholder="+233 12 345 6789" />

        <div class="code-section" id="codeDisplay">
          {`TH-THKSGV-*^-85`}
        </div>

        <Button type="submit" onClick={handleSubmit}>
          Generate Token
        </Button>
        <Button type="submit" onClick={handleSubmit}>
          Generate Token
        </Button>
      </form>
    </div>
  );
};

export default TokenForm;
