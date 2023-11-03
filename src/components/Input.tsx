import { forwardRef } from "react";
import { cn } from "../utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          id={props.id}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-gray-800 px-3 py-2 text-sm ring-offset-background text-white placeholder:text-gray-400 focus-visible:outline-none focus:border-blue-500 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <label
            className="ml-3 mt-1 block text-red-500 text-sm"
            htmlFor={props.id}
          >
            {error}
          </label>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
