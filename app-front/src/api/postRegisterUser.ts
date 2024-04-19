export interface errrorResponse {
	success: boolean;
	error: {
		status: number;
		message: string;
	};
}

const handleErrors = async (error: any): Promise<errrorResponse> => {
	const causeResp = (error as { cause?: { resp?: Response } }).cause?.resp;

	if (causeResp) {
		const errorResp = await causeResp.json();

		return {
			success: false,
			error: {
				status: causeResp.status,
				message: errorResp.message || causeResp.statusText || 'Something went wrong',
			},
		};
	} else {
		return {
			success: false,
			error: {
				status: (error as Response).status,
				message: (error as Response).statusText,
			},
		};
	}
};

export interface successResponse<T> {
	success: false;
	data: T;
}

export const postRegisterUser = async (raw: any): Promise<any> => {
	try {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const resp = await fetch(`${process.env.NEXT_PUBLIC_URL_API_USERS}/register/user`, {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		});

		if (!resp.ok) {
			throw new Error('Error al crear el usuario', { cause: { resp } } satisfies {
				cause: { resp: Response };
			});
		}

		return {
			success: true,
			data: await resp.json(),
		};
	} catch (error) {
		return await handleErrors(error);
	}
};
