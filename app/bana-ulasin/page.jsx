"use client";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/Button";
import { useState } from "react";
import Loading from "@/components/Loading";

export default function BanaUlasinPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (formData, event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...formData }),
    })
      .then((response) => {
        reset();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 my-10 flex-grow">
      <div
        className="absolute inset-x-0 top-[10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[5rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Bana Ulaşın
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Kitap çevirisi, edebi, akademik ve bilimsel çeviri veya çeviri kontrol
          ile ilgili destek arıyorsanız, bana ulaşın.
        </p>
      </div>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        data-netlify-recaptcha="true"
        data-netlify="true"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <input type="hidden" name="form-name" value="contact-form" />

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="ad"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Ad
            </label>
            <div className="mt-2.5">
              <input
                {...register("ad", { required: true, maxLength: 50 })}
                aria-invalid={errors.ad ? "true" : "false"}
                type="text"
                name="ad"
                id="ad"
                autoComplete="ad"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
              {errors.ad?.type === "required" && (
                <p className="text-red-600 text-xs py-1" role="alert">
                  *Bu alan gereklidir
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="soyad"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Soyad
            </label>
            <div className="mt-2.5">
              <input
                {...register("soyad", { required: true, maxLength: 50 })}
                aria-invalid={errors.soyad ? "true" : "false"}
                type="text"
                name="soyad"
                id="soyad"
                autoComplete="soyad"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
              {errors.soyad?.type === "required" && (
                <p className="text-red-600 text-xs py-1" role="alert">
                  *Bu alan gereklidir
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="eposta"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              E-posta
            </label>
            <div className="mt-2.5">
              <input
                {...register("eposta", {
                  required: "*Bu alan gereklidir",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "*Geçerli bir e-posta adresi giriniz",
                  },
                })}
                aria-invalid={errors.eposta ? "true" : "false"}
                type="email"
                name="eposta"
                id="eposta"
                autoComplete="eposta"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
              {errors.eposta?.type === "required" && (
                <p className="text-red-600 text-xs py-1" role="alert">
                  *Bu alan gereklidir
                </p>
              )}
              {errors.eposta?.type === "pattern" && (
                <p className="text-red-600 text-xs py-1" role="alert">
                  *Geçerli bir e-posta adresi giriniz
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="mesaj"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Mesaj
            </label>
            <div className="mt-2.5">
              <textarea
                {...register("mesaj", { required: true, maxLength: 500 })}
                aria-invalid={errors.mesaj ? "true" : "false"}
                name="mesaj"
                id="mesaj"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                defaultValue={""}
              />
              {errors.mesaj?.type === "required" && (
                <p className="text-red-600 text-xs py-1" role="alert">
                  *Bu alan gereklidir
                </p>
              )}
            </div>
          </div>
        </div>
        <div data-netlify-recaptcha="true"></div>
        <div className="mt-10">
          <CustomButton text={"Gönder"} type={"submit"} loading={isLoading} />
        </div>
      </form>
    </div>
  );
}
