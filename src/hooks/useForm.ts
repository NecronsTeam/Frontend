import { FormEventHandler, useState } from "react";
import { DefaultField } from "../types/FormFields";
import { Axios, AxiosError } from "axios";

function useForm<Field extends DefaultField, Response, FormModel>(props: {
  fields: Field[];
  apiCall: (formData: FormModel) => Promise<Response>,
  onSucces: (response: Response) => void,
  onFailure?: (error: string) => void
}): {
  isSending: boolean;
  sendingError: string | null,
  hasFieldErrors: boolean,
  handleFormSubmit: FormEventHandler<HTMLFormElement>;
} {
  const { fields, apiCall, onSucces, onFailure } = props;
  const [isSending, setIsSending] = useState(false);
  const [sendingError, setSendingError] = useState<string | null>(null);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const errors = await Promise.all(fields.map((field) => field.hasError()));
    const isFormValid = errors.every((error) => !error);

    if (isFormValid) {
      setIsSending(true);
      setSendingError(null);

      try {
        const formData = Object.fromEntries(new FormData((event.target) as HTMLFormElement)) as FormModel;
        const response = await apiCall(formData);
        onSucces?.(response);
      } catch (err: any) {
        console.log(err.message)
        const message = err instanceof AxiosError ? err.response?.data
          : err instanceof Error ? err.message
          : "Что-то пошло не так, попробуйте ещё раз";

        setSendingError(message);
        onFailure?.(message)
      } finally {
        setIsSending(false)
      }
    }
  };

  const hasFieldErrors = fields.some((field) => !!field.error);

  return {
    isSending,
    sendingError,
    hasFieldErrors,
    handleFormSubmit
  }
}

export default useForm;