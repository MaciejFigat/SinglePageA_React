import React from "react";
import { Layout } from "../layout";

const Contact = () => {
  return (
    <Layout>
      {" "}
      <h1 className="text-2xl">Contact Hell</h1>
      <form className="flex flex-col space-y-5 w-1/2 m-auto">
        <div className="flex flex-col text-left">
          <label> Name:</label>
          <input className="p-2 rounded bg-blue-200 " type="text" />
        </div>
        <div className="flex flex-col text-left">
          <label> Email:</label>
          <input className="p-2 rounded bg-blue-200 " type="email" />
        </div>
        <div className="flex flex-col text-left">
          <label> Message</label>
          <textarea className="p-2 rounded bg-blue-200 "></textarea>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
