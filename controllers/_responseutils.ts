import {Response,Request} from 'express';
export const response_handler = (
	res: Response,
	status: number,
	content: unknown = null,
	message = '',
	errors: Array<string> = []
): Response => {
	return res.status(status).json({ content, message, errors });
};
export const response_created = (
	res: Response,
	content: unknown = null,
	message = 'Created'
): Response => {
	return response_handler(res, 201, content, message, undefined);
};

export const response_unauthorized = (
	res: Response,
	message = 'Unauthorized',
	errors: Array<string> = []
): Response => {
	return response_handler(res, 401, undefined, message, errors);
};

export const response_bad_request = (
	res: Response,
	message = 'Bad Request',
	errors: Array<string> = []
): Response => {
	return response_handler(res, 400, undefined, message, errors);
};

export const response_internal_server_error = (
	res: Response,
	message = 'Internal Server Error',
	errors: Array<string> = []
): Response => {
	return response_handler(res, 500, undefined, message, errors);
};