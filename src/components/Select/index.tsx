import clsx from "clsx";

export type SelectProps = React.ComponentProps<"select"> & {
  labelProps?: React.ComponentProps<"label">;
  label?: string;
  children: React.ReactNode;
};

export const Select: React.FC<SelectProps> = (props) => {
  return (
    <>
      {props.label && (
        <label
          htmlFor={props.id}
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          {...props.labelProps}
        >
          {props.label}
        </label>
      )}

      <select
        className={
          clsx([
            "bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-sm block w-full p-2.5",
            "focus:ring-blue-500 focus:border-blue-500",
            "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          ])
        }
        {...props}
      >
        {props.children}
      </select>
    </>
  );
}
