import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:phamhoangminhphat.it@gmail.com?subject=${formData.subject}&body=Hi, my Name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center mx-auto items-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        ContactMe
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decaration-[#F7AB0A]/50 underline ml-2">
            Lets talk
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p className="text-2xl">+84 559 818 351</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <a
              className="text-2xl"
              href="mailto:phamhoangminhphat.it@gmail.com"
            >
              phamhoangminhphat.it@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p className="text-2xl">Live In Ho Chi Minh City, Viet Nam</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              className="contactInput"
              placeholder="Name"
            />
            <input
              {...register("email")}
              type="email"
              className="contactInput"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
