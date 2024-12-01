import { FormEventHandler, useState } from "react";
import { DefaultField } from "../types/FormFields";

function useForm<Field extends DefaultField, Response>(props: {
  fields: Field[];
  apiCall: () => Promise<Response>,
  onSucces: (response: Response) => void,
  onFailure: (error: string) => void
}): {
  isSending: boolean;
  sendingError: string,
  hasFieldErrors: boolean,
  handleFormSubmit: FormEventHandler<HTMLFormElement>;
} {
  const { fields, apiCall, onSucces, onFailure } = props;
  const [isSending, setIsSending] = useState(false);
  const [sendingError, setSendingError] = useState('');

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const errors = await Promise.all(fields.map((field) => field.hasError()));
    const isFormValid = errors.every((error) => !error);

    if (isFormValid) {
      setIsSending(true);
      setSendingError('');

      try {
        const response = await apiCall();
        onSucces?.(response);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Что-то пошло не так, попробуйте ещё раз";

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