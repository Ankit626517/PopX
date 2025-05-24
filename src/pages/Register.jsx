// Register.jsx

import { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  User,
  Phone,
  Mail,
  Lock,
  Building,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isAgency, setIsAgency] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
  });

  const [focusedField, setFocusedField] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField("");

  const isFormValid =
    formData.fullName &&
    formData.phoneNumber &&
    formData.email &&
    formData.password;

  const formFields = [
    {
      key: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Marry Doe",
      icon: User,
      required: true,
    },
    {
      key: "phoneNumber",
      label: "Phone number",
      type: "tel",
      placeholder: "9876543210",
      icon: Phone,
      required: true,
    },
    {
      key: "email",
      label: "Email address",
      type: "email",
      placeholder: "marry@example.com",
      icon: Mail,
      required: true,
    },
    {
      key: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      placeholder: "Enter your password",
      icon: Lock,
      required: true,
      hasToggle: true,
    },
    {
      key: "companyName",
      label: "Company name",
      type: "text",
      placeholder: "Your Company",
      icon: Building,
      required: false,
    },
  ];

  const handleRegister = () => {
    navigate("/profile", {
      state: { ...formData, isAgency },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 transition-all duration-700 ease-in-out">
      <ThemeBtn isVisible={isVisible} />

      <div className="fixed top-6 left-6 z-50">
        <button
          className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 hover:-translate-x-1 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      <div className="flex items-start justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-lg mx-auto pt-16">
          <div
            className={`text-left mb-8 transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Create your <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                PopX account
              </span>
            </h1>
          </div>

          <div className="space-y-6">
            {formFields.map((field, index) => (
              <div
                key={field.key}
                className={`transform transition-all duration-700 ease-out ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <label className="block text-purple-600 dark:text-purple-400 text-sm font-semibold mb-2">
                  {field.label}
                  {field.required && <span className="text-purple-500">*</span>}
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <field.icon
                      className={`w-5 h-5 transition-colors duration-300 ${
                        focusedField === field.key || formData[field.key]
                          ? "text-purple-500 dark:text-purple-400"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                    />
                  </div>

                  <input
                    type={field.type}
                    value={formData[field.key]}
                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                    onFocus={() => handleFocus(field.key)}
                    onBlur={handleBlur}
                    placeholder={field.placeholder}
                    className={`w-full pl-12 pr-${
                      field.hasToggle ? "12" : "4"
                    } py-4 bg-white dark:bg-gray-800 border-2 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 focus:outline-none ${
                      focusedField === field.key || formData[field.key]
                        ? "border-purple-500 dark:border-purple-400 shadow-lg transform scale-105 bg-purple-50/50 dark:bg-purple-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  />

                  {field.hasToggle && (
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Agency Selection and Submit button can be added below */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
