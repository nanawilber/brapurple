import React from "react";
import TokenForm from "../../components/tokenForm";

const ExclusivePage = () => {
  return (
    <main className="w-full h-full">
      <div className="container mx-auto mt-16">
        <h1 className="text-3xl font-bold text-center my-10 pt-6">
          Exclusive Page
        </h1>
        <p className="text-center">
          This is an exclusive page for our members only.
        </p>
        <div className="border">
          <TokenForm />
        </div>
      </div>
    </main>
  );
};

export default ExclusivePage;
