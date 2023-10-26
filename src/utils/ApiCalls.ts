import ShowToast from "../components/commons/ShowToast";
import Instance from "./AxiosConfig";

interface IAgent {
	fullName?: string;
	email: string;
	phoneNumber?: string;
	password: string;
}

export const RegisterAgent = async (data: IAgent) => {
	try {
		const response = await Instance.post("/register-agent", data);
		return response;
	} catch (err) {
		ShowToast(false, `${err.response?.data?.messeage}`);
	}
};

export const SignInAgent = async (data: IAgent) => {
	try {
		const response = await Instance.post("/login-agent", data);
		return response;
	} catch (err) {
		ShowToast(false, `${err.response?.data?.messeage}`);
	}
};
