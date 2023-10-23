import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import AgentOverView from "../pages/Agent/AgentOverView";
import SecondLayout from "../components/layouts/SecondLayout";
import OnboardingPage from "../pages/OnboardingPage";

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
		path: "onboarding",
		element: <OnboardingPage />,
	},
]);

export default Index;
