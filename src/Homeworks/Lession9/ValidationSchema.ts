import * as yup from 'yup';

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]

export const registerSchema = yup.object({
    fullName: yup.string().required("Full name is required ")
        .min(3, "Fullname must be at least 3 characters"),
    email: yup.string().required("Email is required")
        .email("Email must be a valid format"),
    password: yup.string().required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
            "Password must contain both letters and numbers"),
    confirmPassword: yup.string().required("Confirm password is required")
        .oneOf([yup.ref('password')], "Passwords must match"),
    country: yup
        .string()
        .required("Please select your country"),
    phoneNumber: yup
        .string()
        .required("Phone number is required")
        .matches(/^\d{10,}$/, "Phone number must be at least 10 digits"),
    gender: yup
        .string()
        .required("Please select your gender")
        .oneOf(["Male", "Female", "Other"]),
    birthday: yup
        .date()
        .transform((value, originalValue) =>
            originalValue === "" ? null : value
        )
        .required("Birthday is required")
        .test("age", "You must be at least 18 years old", (value) => {
            if (!value) return false;
            const today = new Date();
            const birth = new Date(value);
            const age = today.getFullYear() - birth.getFullYear();
            const m = today.getMonth() - birth.getMonth();
            const d = today.getDate() - birth.getDate();
            return age > 18 || (age === 18 && (m > 0 || (m === 0 && d >= 0)));
        }),

    hobby: yup
        .array()
        .of(yup.string().oneOf(["reading", "traveling", "gaming"]))
        .min(1, "At least one hobby must be selected"),

    file: yup
        .mixed()
        .required("Profile picture is required")
        .test("fileType", "Unsupported file format", (value: any) => {
            if (!value || value.length === 0) return false;
            return SUPPORTED_FORMATS.includes(value[0]?.type);
        }),
    bio: yup
        .string()
        .max(300, "Bio must be at most 300 characters"),
})