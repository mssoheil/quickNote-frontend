import { toast, Toaster } from "sonner";

const Toast = () => (
  <Toaster position="top-right" richColors closeButton duration={5000} />
);

const toastMessage = toast;

export { Toast, toastMessage };
