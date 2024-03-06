import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import categories from "../categories";

const schema = z.object({
  description: z.string().nonempty({ message: "Please enter a description" }),
  amount: z.number().min(0.01),
  category: z.enum(categories),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [items, setItems] = useState<FormData[]>([]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <p>Description</p>
      <input
        {...register("description")}
        id="description"
        type="text"
        className="form-control"
      />
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}

      <p>Amount</p>
      <input
        {...register("amount", { valueAsNumber: true })}
        id="amount"
        type="number"
        className="form-control"
      />
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}

      <p>Category</p>
      <select {...register("category")} id="category" className="form-control">
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {errors.category && (
        <p className="text-danger">{errors.category.message}</p>
      )}

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default Form;
