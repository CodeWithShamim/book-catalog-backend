import httpStatus from 'http-status';
import { ZodError, ZodIssue } from 'zod';
import {
  IGenericErrorMessage,
  IGenericErrorResponse,
} from '../interfaces/error';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path.length - 1],
      message: issue.message,
    };
  });

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Zod Error',
    errorMessages: errors,
  };
};

export default handleZodError;