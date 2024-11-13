import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField } from "../components/FormField";
import { preview } from "../assets";
import { Loader } from "../components/Loader";
import { getRandomPrompt } from "../utils";

export const CreatePost = () => {

    const navigate = useNavigate();
    const [ generatingImg, setGeneratingImg ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ form, setForm ] = useState({
        name: "",
        prompt: "",
        photo: ""
    }) 

    const handelSubmit = () =>{

    }

    const handelChange = (e) =>{
        setForm({...form, [e.target.name]:e.target.value});
    }

    const handelSurpriseMe = () =>{
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({...form, prompt: randomPrompt})
    }

    const generateImage = () =>{

    }

    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]">
                    The Community Showcase
                </h1>
                <p className="mt-2 text-[#666e75] text-[16px]">
                    Browse through a collection of imaginative and visually stunning images through LLM and share them with the community
                </p>
            </div>

            <form className="mt-16 max-w-3xl" onSubmit={handelSubmit}>
                <div className="flex flex-col gap-5"> 
                    <FormField 
                        labelName="Your name"
                        type="text"
                        name="name"
                        placeholder="Yash Tyagi"
                        value={form.name}
                        handelChange={handelChange}
                    />
                    <FormField 
                        labelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="A man standing in front of a stargate to another dimension"
                        value={form.prompt}
                        handelChange={handelChange}
                        isSurpriseMe
                        handelSurpriseMe={handelSurpriseMe}
                    />

                    <div className="flex justify-center items-center relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 h-64 w-64 p-3">
                        {form.photo ? (
                            <img 
                                src={form.photo}
                                alt={form.prompt}
                                className="h-full w-full object-contain"
                            />
                        ): (<img 
                            src={preview}
                            alt="prevuew"
                            className="animate-pulse h-9/12 w-9/12 object-contain opacity-80"
                        />)}

                        {generatingImg && (
                            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                                <Loader />
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-5 flex gap-5">
                    <button 
                        type="button" 
                        onClick={generateImage} 
                        className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5"
                    >
                        {generatingImg ? "Genrating..." : "Generate"}
                    </button>
                </div>

                <div className="mt-10">
                    <p className="mt-2 text-[#666e75] text-[14px]">
                        Once you have created the image you want, you can share it with others in the community
                    </p>

                    <button 
                        type="submit"
                        className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        {loading? "Sharing" : "Share with the community"}
                    </button>
                </div>

            </form>
        </section>
    )
};