import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import AgentOverView from "../pages/Agent/AgentOverView";
import SecondLayout from "../components/layouts/SecondLayout";
import AgentSignUpLight from "../pages/Signup/AgentSignUpLight";
import AgentSignUpDark from "../pages/Signup/AgentSignUpDark";
import AgentSignInLight from "../pages/Signin/AgentSignInLight";
import AgentSignInDark from "../pages/Signin/AgentSignInDark";
import HeroDark from "../pages/Hero/HeroDark";
import HeroLight from "../pages/Hero/HeroLight";
import HomeLayoutDark from "../components/layouts/HomeLayoutDark";
import OnboardingPage from "../pages/OnboardingPage";
import AgentTransaction from "../pages/Agent/AgentTransaction";
import AgentMerchant from "../pages/Agent/AgentMerchant";
import AgentSettingsProfile from "../pages/Agent/AgentSettingsProfile";

const Index = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <HeroLight/>
			}
		],
	},
	{
		path: "/",
		element: <HomeLayoutDark />,
		children: [
			{
				index: true,
				element: <HeroDark/>
			}
		],
	},

	{
		path: "agent-dashboard",
		element: <SecondLayout />,
		children: [
			{
				index: true,
				element: <AgentOverView />,
			},

			{
				path: "transactions",
				element: <AgentTransaction />,
			},
			{
				path: "agentmerchant",
				element: <AgentMerchant />,
			},
			{
				path: "agentsettingsprofile",
				element: <AgentSettingsProfile />,
			}
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
	},
	{
		path: "onboarding",
		element: <OnboardingPage />,
	},
]);

export default Index;
