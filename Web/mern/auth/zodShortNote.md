# React Login Form Notes

## Libraries Used

* `react-hook-form` → Form handling
* `zod` → Validation schema
* `@hookform/resolvers/zod` → Connects Zod with React Hook Form

---

# Schema Validation

```js
const formSchema = z.object({
  email: z.string().email("Enter a valid email"),

  password: z
    .string()
    .min(8, "Minimum length should be 8")
    .max(20, "Maximum length should be 20")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
      "Password must contain uppercase, lowercase, and number"
    )
})
```

---

# Password Regex Meaning

```regex
(?=.*[A-Z]) → At least 1 uppercase
(?=.*[a-z]) → At least 1 lowercase
(?=.*\d)    → At least 1 number
```

---

# useForm()

```js
const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm({
  resolver: zodResolver(formSchema)
});
```

## Important Functions

### `register`

Connects input fields with React Hook Form.

```js
{...register("email")}
```

---

### `handleSubmit`

Runs validation before submitting form.

```js
onSubmit={handleSubmit(submitForm)}
```

---

### `errors`

Stores validation error messages.

```js
errors.email.message
```

---

# Submit Function

```js
function submitForm(data) {
  console.log(data);
}
```

`data` contains validated form values.

Example:

```js
{
  email: "test@gmail.com",
  password: "Password123"
}
```

---


# Flow

1. User enters data
2. `register()` tracks inputs
3. `handleSubmit()` validates
4. Zod checks schema rules
5. If invalid → show errors
6. If valid → `submitForm(data)` runs

---

# Best Practices

* Use frontend validation + backend validation both
* Never trust frontend only
* Keep password rules strict
* Show user-friendly error messages
* Use HTTPS when sending login data
