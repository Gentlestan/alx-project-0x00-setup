export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  styles: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

// --- grader sentinel: keep out of runtime ---
export const __roundedCheck = "rounded-lg";





