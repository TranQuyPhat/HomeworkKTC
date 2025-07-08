import React, { useState } from "react";
import styled from "./Form.module.css";
import InputField from "./InputField";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Họ tên không được để trống";
    } else if (formData.name.length < 3) {
      newErrors.name = "Họ tên phải ít nhất 3 ký tự";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email không được để trống";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.password) {
      newErrors.password = "Mật khẩu không được để trống";
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải ít nhất 6 ký tự";
    }

    if (!formData.gender) {
      newErrors.gender = "Vui lòng chọn giới tính";
    }

    if (!formData.dob) {
      newErrors.dob = "Vui lòng chọn ngày sinh";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Bạn phải đồng ý với điều khoản";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Số điện thoại không được để trống";
    } else if (!/^(0|\+84)[0-9]{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Số điện thoại không hợp lệ";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Bạn đã gửi: ${JSON.stringify(formData, null, 2)}`);
      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        dob: "",
        termsAccepted: false,
      });
      setErrors({});
    }
  };

  return (
    <div>
      <form className={styled.formContainer} onSubmit={handleSubmit}>
        <h2>User Register</h2>

        <InputField
          label="Full Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Số điện thoại"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        {/* Gender */}
        <div className={styled.inputGroup}>
          <label className={styled.label}>Giới tính</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />{" "}
            Nam
          </label>
          <label style={{ marginLeft: "16px" }}>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />{" "}
            Nữ
          </label>
          {errors.gender && <p className={styled.errorText}>{errors.gender}</p>}
        </div>

        {/* Date of Birth */}
        <InputField
          label="Ngày sinh"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          error={errors.dob}
        />

        {/* Checkbox */}
        <div className={styled.inputGroup}>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />{" "}
            Tôi đồng ý với điều khoản
          </label>
          {errors.termsAccepted && (
            <p className={styled.errorText}>{errors.termsAccepted}</p>
          )}
        </div>

        <button
          type="submit"
          className={styled.submitButton}
          disabled={!formData.termsAccepted}
        >
          Register
        </button>
      </form>
    </div>
  );
}
