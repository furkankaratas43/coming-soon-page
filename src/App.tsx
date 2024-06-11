import {useEffect} from "react";
import setting from "./assets/setting.json";
function App() {
    useEffect(() => {
        document.title = setting.pageTitle + " | " + setting.website;
    }, []);
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center relative bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">

                <div className="hidden md:block text-4xl z-10">
                    <span className="font-bold">{setting.pageTitle}</span> | <span className="font-thin">{setting.website}</span>
                </div>
                <div className="md:hidden text-4xl grid grid-cols-1 text-center z-10">
                    <div className="font-bold">{setting.pageTitle}</div>
                    <div className="font-thin">{setting.website}</div>
                </div>
                <img src="./assets/dark.svg" className="hidden dark:block absolute object-center object-cover w-full h-full"/>
                <img src="./assets/light.svg" className="dark:hidden block absolute object-center object-cover w-full h-full"/>
            </div>

        </>
    )
}
export default App