"use client"
import RadioToggles from "../formItems/RadioToggles";
import Image from "next/image";
import SubmitButton from "../buttons/SubmitButton";
import { savePageSettings } from "@/actions/pageActions";
import toast from "react-hot-toast";
import { useState } from "react";
import Upload from "../icons/Upload";
import Section from "../layout/Section";
import { upload } from "@/libs/upload";



export default function PageSettings({page, user}) {
    const [bgType, setBgType] = useState(page.bgType);
    const [bgColor, setBgColor] = useState(page.bgColor);
    const [bgImage, setBgImage] = useState(page.bgImage);
    const [avatar, setAvatar] = useState(user?.image);

    async function saveBaseSettings(formData) {
        const res = await savePageSettings(formData);
        if (res) {
            toast.success('Saved')
        }
    }

    
    
    async function handleCover(e) {
        await upload(e, link => {
            setBgImage(link);
        })
    }

    async function handleAvatar(e) {
        await upload(e, link => {
            setAvatar(link);
        })
    }

    return (
        <div>
            <Section>
                <form action={saveBaseSettings}>
                    <div 
                        className="flex justify-center items-center -m-4 min-h-64 bg-cover bg-center" 
                        style={
                            bgType === 'color' 
                            ? {backgroundColor: bgColor}
                            : {backgroundImage: `url(${bgImage})`}
                        }
                    >
                        <div className="w-56">
                            <RadioToggles 
                                defaultValue={page.bgType}
                                options={[
                                    {value:'color', label:'Color'},
                                    {value:'image', label:'Image'}
                                ]} 
                                onChange={val => setBgType(val)}
                            />
                            
                                {(bgType === 'color') && (
                                    <div className="bg-gray-200 shadow text-gray-700 p-2 mt-2 ">
                                        <div className="flex justify-center gap-2">
                                            <span>
                                                Background color:
                                            </span>
                                            <input type="color" name="bgColor" defaultValue={page.bgColor} onChange={e => setBgColor(e.target.value)} />
                                            
                                        </div>
                                    </div>
                                )}
                                {(bgType === 'image') && (
                                    <div className="flex justify-center mx-auto ">
                                        
                                        <label 
                                            className="bg-white shadow px-4 py-2 mt-2 cursor-pointer"
                                        >
                                            <input type="hidden" name="bgImage" value={bgImage} />
                                            <input type="file" onChange={handleCover} className="hidden" />
                                            Change Image
                                        </label>
                                    </div>
                                )}
                        </div>
                    </div>
                    <div className="flex justify-center -mb-8">
                        <div className="relative -top-12">
                            <Image 
                                src={avatar} 
                                alt="avatar" 
                                width={128} 
                                height={128} 
                                className="rounded-full border-4 border-white shadow-lg shadow-black/50 overflow-hidden aspect-square object-cover" 
                            />
                            <label htmlFor="avatarIn" className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow shadow-black/50 cursor-pointer">
                                <Upload  />
                            </label>
                            <input onChange={handleAvatar} type="file" id="avatarIn" className="hidden" />
                            <input type="hidden" name="avatar" value={avatar} />
                        </div>
                        
                    </div>
                    <div className="">
                        <label htmlFor="nameIn" className="input-label">Display Name</label>
                        <input 
                            id="nameIn" 
                            name="displayName"
                            type="text" 
                            placeholder="Enter a display name" 
                            defaultValue={page.displayName}
                        />

                        <label htmlFor="locationIn" className="input-label">Location</label>
                        <input 
                            id="locationIn" 
                            name="location"
                            type="text" 
                            placeholder="Enter a location" 
                            defaultValue={page.location}
                        />

                        <label htmlFor="bioIn" className="input-label">Bio</label>
                        <textarea 
                            id="bioIn" 
                            name="bio" 
                            placeholder="Your bio goes here..." 
                            defaultValue={page.bio}
                        />
                        <div className="max-w-[200px] mx-auto">
                            <SubmitButton>
                                <span>
                                    Save
                                </span>
                            </SubmitButton>
                        </div>
                        
                    </div>
                </form>
            </Section>
            
        </div>
    )
}