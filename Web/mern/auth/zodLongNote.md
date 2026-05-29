## `useState` vs `react-hook-form` vs `zod`

---

# Introduction

In React, forms are one of the most common things we build.

Examples:

* Login Form
* Signup Form
* Contact Form
* Payment Form
* Profile Form

A form usually needs:

* Input handling
* Validation
* Error messages
* Submission handling

There are 3 common approaches:

1. Using only `useState`
2. Using `react-hook-form`
3. Using `react-hook-form + zod`

---

# 1. Form Handling Using `useState`

This is the beginner and traditional React method.

We manually:

* Store input values
* Update state
* Validate fields
* Handle errors

---

# Example Using `useState`

```jsx id="kw5zdp"
import { useState } from "react";

export function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    // Email Validation
    if (!email.includes("@")) {
      newErrors.email = "Enter valid email";
    }

    // Password Validation
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    // Check if no errors
    if (Object.keys(newErrors).length === 0) {
      console.log({
        email,
        password
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {errors.email && <p>{errors.email}</p>}

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errors.password && <p>{errors.password}</p>}

      <button type="submit">
        Login
      </button>

    </form>
  );
}
```

---

# Problems With `useState`

As form becomes bigger:

* Code becomes repetitive
* Too many states
* Validation becomes messy
* Hard to manage large forms
* More re-renders
* Difficult to scale

Imagine:

* 20 fields
* Confirm password
* Phone validation
* OTP validation
* Dynamic fields

Then `useState` becomes painful.

---

# Why Developers Moved to `react-hook-form`

To solve:

* Boilerplate code
* Performance issues
* Complex validation
* Form scalability

`react-hook-form` was created.

---

# 2. Using `react-hook-form`

`react-hook-form` handles:

* Input tracking
* Form state
* Submission
* Errors
* Validation support

Without manually creating many states.

---

# Installation

```bash id="9s8m0d"
npm install react-hook-form
```

---

# Basic Example

```jsx id="8dk7s2"
import { useForm } from "react-hook-form";

export function Login() {

  const {
    register,
    handleSubmit
  } = useForm();

  function submitForm(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>

      <input
        type="email"
        placeholder="Enter Email"
        {...register("email")}
      />

      <input
        type="password"
        placeholder="Enter Password"
        {...register("password")}
      />

      <button type="submit">
        Login
      </button>

    </form>
  );
}
```

---

# What `register()` Does

```jsx id="tnjlwm"
{...register("email")}
```

This connects input field to `react-hook-form`.

It automatically:

* Tracks value
* Handles change
* Stores data
* Manages form state

Without writing:

* `useState`
* `onChange`
* manual tracking

---

# What `handleSubmit()` Does

```jsx id="by5b2v"
onSubmit={handleSubmit(submitForm)}
```

It:

1. Prevents default form reload
2. Collects form data
3. Runs validation
4. Sends clean data to function

---

# Form Data Example

```js id="u6j6um"
{
  email: "test@gmail.com",
  password: "Password123"
}
```

---

# Validation Without Zod

We can also validate directly inside `register()`.

---

# Example

```jsx id="u0m0k6"
<input
  type="email"
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email"
    }
  })}
/>
```

---

# Password Validation Example

```jsx id="xw7p7k"
<input
  type="password"
  {...register("password", {
    required: "Password required",
    minLength: {
      value: 8,
      message: "Minimum 8 characters"
    }
  })}
/>
```

---

# Accessing Errors

```jsx id="rq4wqv"
const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm();
```

---

# Showing Error Message

```jsx id="j5l8xt"
{
  errors.email && (
    <p>{errors.email.message}</p>
  )
}
```

---

# Problems Without Zod

Validation inside `register()` works well for small forms.

But in large applications:

* Validation becomes repetitive
* Hard to reuse
* Hard to organize
* Difficult for team projects
* Complex logic becomes messy

Example:

* Signup validation
* Password rules
* Confirm password
* Nested objects
* Arrays
* Dynamic forms

This is why developers use schema validation libraries like:

* `zod`
* `yup`
* `joi`

---

# 3. Using `react-hook-form + zod`

This is modern industry approach.

`react-hook-form`
→ handles form state

`zod`
→ handles validation

---

# Installation

```bash id="cg6u7g"
npm install zod
npm install @hookform/resolvers
```

---

# Why Zod Is Powerful

Zod provides:

* Centralized validation
* Reusable schemas
* Better readability
* Type safety
* Cleaner code
* Scalable structure

---

# Zod Schema Example

```jsx id="9l4ewf"
const formSchema = z.object({

  email: z
    .string()
    .email("Enter valid email"),

  password: z
    .string()
    .min(8, "Minimum length should be 8")
    .max(20, "Maximum length should be 20")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
      "Password must contain uppercase, lowercase, and number"
    )

});
```

---

# Regex Meaning

```regex id="6ecg7n"
(?=.*[A-Z]) → At least 1 uppercase
(?=.*[a-z]) → At least 1 lowercase
(?=.*\d)    → At least 1 number
```

---

# Connecting Zod With React Hook Form

```jsx id="3k2ofv"
useForm({
  resolver: zodResolver(formSchema)
})
```

---

# Full Modern Example

```jsx id="jk7e90"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({

  email: z
    .string()
    .email("Enter valid email"),

  password: z
    .string()
    .min(8, "Minimum length should be 8")

});

export function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema)
  });

  function submitForm(data) {
    console.log(data);
  }

  return (

    <form onSubmit={handleSubmit(submitForm)}>

      <input
        type="email"
        {...register("email")}
      />

      {errors.email && (
        <p>{errors.email.message}</p>
      )}

      <input
        type="password"
        {...register("password")}
      />

      {errors.password && (
        <p>{errors.password.message}</p>
      )}

      <button type="submit">
        Login
      </button>

    </form>
  );
}
```

---

# Comparison Table

| Feature            | useState    | react-hook-form | react-hook-form + zod |
| ------------------ | ----------- | --------------- | --------------------- |
| Easy for beginners | ✅           | ✅               | Medium                |
| Boilerplate        | High        | Low             | Low                   |
| Performance        | Lower       | Better          | Better                |
| Validation         | Manual      | Built-in        | Advanced              |
| Scalability        | Poor        | Good            | Excellent             |
| Clean Code         | Medium      | Good            | Excellent             |
| Reusability        | Low         | Medium          | High                  |
| Industry Usage     | Small forms | Medium apps     | Modern apps           |

---

# Best Practice

Modern frontend developers usually use:

* `react-hook-form`
* `zod`
* Tailwind CSS
* Axios / Fetch
* Backend validation too

Because frontend validation alone is never enough.

Always validate again on backend.

---
