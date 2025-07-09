import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { registerSchema } from "./ValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
type Props = {};
type FormData = yup.InferType<typeof registerSchema>;
export default function RegisterPage({}: Props) {
  const [provinces, setProvinces] = useState([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: yupResolver(registerSchema) });
  const onSubmit = (data: FormData) => {
    console.log("Signup:", data);
    alert(`Signup successful for ${data.fullName}`);
  };
  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/")
      .then((res) => res.json())
      .then((data) => setProvinces(data))
      .catch((err) => console.error("Failed to load provinces", err));
  }, []);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <div>
        <label className="block font-medium">Full Name</label>
        <input
          {...register("fullName")}
          type="text"
          className="w-full p-2 border rounded mt-1"
          placeholder="Enter your name"
        />
        {errors.fullName && (
          <p className="text-red-400 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full p-2 border rounded mt-1"
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Password</label>
        <input
          {...register("password")}
          type="password"
          className="w-full p-2 border rounded mt-1"
          placeholder="••••••"
        />
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div>
        <label className="block font-medium">Confirm Password</label>
        <input
          {...register("confirmPassword")}
          type="password"
          className="w-full p-2 border rounded mt-1"
          placeholder="••••••"
        />
        {errors.confirmPassword && (
          <p className="text-red-400 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div>
        <label className="block font-medium">Phone Number</label>
        <input
          {...register("phoneNumber")}
          type="number"
          className="w-full p-2 border rounded mt-1"
          min="0"
        />
        {errors.phoneNumber && (
          <p className="text-red-400 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>
      {/* Radio buttons */}
      <div>
        <label className="block font-medium">Gender</label>
        <div className="flex gap-4 mt-1">
          <label>
            <input type="radio" {...register("gender")} /> Male
          </label>
          <label>
            <input type="radio" {...register("gender")} /> Female
          </label>
          <label>
            <input type="radio" {...register("gender")} /> Other
          </label>
        </div>
        {errors.gender && (
          <p className="text-red-400 text-sm">{errors.gender.message}</p>
        )}
      </div>
      {/* Date */}
      <div>
        <label className="block font-medium">Birthday</label>
        <input
          type="date"
          className="w-full p-2 border rounded mt-1"
          {...register("birthday")}
        />
        {errors.birthday && (
          <p className="text-red-400 text-sm">{errors.birthday.message}</p>
        )}
      </div>

      {/* Select */}
      <div>
        <label className="block font-medium">Province</label>
        <select
          className="w-full p-2 border rounded mt-1"
          {...register("country")}
        >
          <option value="">-- Choose a province --</option>
          {provinces.map((p: any) => (
            <option key={p.code} value={p.name}>
              {" "}
              {p.name}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className="text-red-400 text-sm">{errors.country.message}</p>
        )}
      </div>
      <div>
        <label className="block font-medium mb-1">Hobby</label>
        <Controller
          control={control}
          name="hobby"
          render={({ field }) => {
            const { value = [], onChange } = field;

            const handleCheckboxChange = (hobbyValue: string) => {
              if (value.includes(hobbyValue)) {
                onChange(value.filter((item) => item !== hobbyValue));
              } else {
                onChange([...value, hobbyValue]);
              }
            };

            return (
              <div className="space-y-2">
                {["reading", "traveling", "gaming"].map((hobby) => (
                  <label key={hobby} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={hobby}
                      checked={value.includes(hobby)}
                      onChange={() => handleCheckboxChange(hobby)}
                      className="accent-blue-500"
                    />
                    <span className="capitalize">{hobby}</span>
                  </label>
                ))}
              </div>
            );
          }}
        />
        {errors.hobby && (
          <p className="text-red-500 text-sm">{errors.hobby.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Upload File</label>

        <div className="flex items-center gap-4">
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Choose File
          </label>
          <span className="text-sm text-gray-600">No file chosen</span>
        </div>

        <input
          type="file"
          id="file-upload"
          className="hidden"
          {...register("file")}
        />
        {errors.file && (
          <p className="text-red-400 text-sm">{errors.file.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Bio</label>
        <textarea
          {...register("bio")}
          className="w-full p-2 border rounded mt-1"
          rows={3}
          placeholder="Write something..."
        />
        {errors.bio && (
          <p className="text-red-400 text-sm">{errors.bio.message}</p>
        )}
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
        <button type="reset" className="bg-gray-300 px-4 py-2 rounded">
          Reset
        </button>
      </div>
    </form>
  );
}
