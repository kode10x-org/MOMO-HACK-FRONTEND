import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import AgentOverView from "../pages/Agent/AgentOverView";
import SecondLayout from "../components/layouts/SecondLayout";
import AgentSignUpLight from "../pages/Signup/AgentSignUpLight";
import AgentSignUpDark from "../pages/Signup/AgentSignUpDark";
import AgentSignInLight from "../pages/Signin/AgentSignInLight";
import AgentSignInDark from "../pages/Signin/AgentSignInDark";

const Index = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [],
	},

	{
		path: "agent-dashboard",
		element: <SecondLayout />,
		children: [
			{
				index: true,
				element: <AgentOverView />,
			},
		],
	},
	{
		path: "/agentsignuplight",
		element: <AgentSignUpLight />
	},
	{
		path: "/agentsignupdark",
		element: <AgentSignUpDark />
	},
	{
		path: "/agentsigninlight",
		element: <AgentSignInLight />
	},
	{
		path: "/agentsignindark",
		element: <AgentSignInDark />
	}
]);

export default Index;
