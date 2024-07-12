"use client"
import { useState } from "react";
import SubmitButton from "../buttons/SubmitButton";
import Add from "../icons/Add";
import Section from "../layout/Section";
import Link from "../icons/Link";
import Move from "../icons/Move";
import { ReactSortable } from "react-sortablejs";
import { upload } from "@/libs/upload";
import Image from "next/image";
import { saveLinks } from "@/actions/pageActions";
import toast from "react-hot-toast";
import Delete from "../icons/Delete";

export default function PageLinks({page, user}) {
    const [links, setLinks] = useState(page.links || []);

    async function save() {
        await saveLinks(links);

        toast.success('Saved')
    }

    function addLink() {
        setLinks(prev => {
            return [...prev, {key: Date.now().toString(), title:'', subtitle:'', icon:'', url:''}]
        })
    }

    function handleUpload(e, linkKey) {
        upload(e, url => {
            setLinks(prev => {
                const newLinks = [...prev]
                newLinks.forEach((link, index) => {
                    if (link.key === linkKey) {
                        link.icon = url
                    }
                })
                return newLinks;
            })
        })
    }

    function handleChange(key, prop, e) {
        setLinks(prev => {
            const newLinks = [...prev]
            newLinks.forEach((link) => {
                if (link.key === key) {
                    link[prop] = e.target.value
                }
            })
            return [...prev]
        })
    }

    function removeLink(linkKey) {
        setLinks(prev => 
            [...prev].filter(l => l.key !== linkKey)
        );
        toast.success('Removed link')
    }

    return (
        <Section>
            <form action={save}>
                <h2 className="text-2xl mb-4">
                    Links
                </h2>
                <button onClick={addLink} type="button" className="flex items-center text-purple-600 text-md gap-2 cursor-pointer">
                    <Add />
                    <span>
                        Add New
                    </span>
                </button>
                <div>
                    <ReactSortable handle={'.handle'} list={links} setList={setLinks}>
                        {links.map(l => (
                            <div key={l.key} className="mt-8 flex gap-6 items-center">
                                <div className="handle">
                                    <Move className="w-5 h-5 text-gray-700 mr-2 cursor-pointer" />
                                </div>
                                <div className="text-center">
                                    <div className="bg-gray-300 relative overflow-hidden aspect-square inline-flex w-16 h-16 rounded-full justify-center items-center">
                                        {!l.icon && <Link />}
                                        {l.icon && (
                                            <Image src={l.icon} alt="icon" width={64} height={64} className="rounded-full w-full h-full object-cover" />
                                        )}
                                    </div>
                                    <div >
                                        <input id={"icon"+l.key} type="file" onChange={(e) => handleUpload(e, l.key)} className="hidden" />
                                        <label htmlFor={"icon"+l.key} className="border text-gray-600 my-2 p-2 flex items-center cursor-pointer justify-center">
                                            <span className="text-sm">Change Icon</span>
                                        </label>
                                        <button type="button" onClick={() => removeLink(l.key)} className="flex border text-gray-600 w-full gap-1 items-center py-2 px-3 mb-2 h-full hover:text-purple-600">
                                            <Delete className="w-5 h-5" />
                                            <span className="text-sm">Remove</span>
                                        </button>
                                    </div>
                                    
                                </div>
                                
                                <div className="grow">
                                    <label className="input-label">Title:</label>
                                    <input value={l.title} onChange={e => handleChange(l.key, 'title', e)} name="title[2]" placeholder="Title" type="text" />

                                    <label className="input-label">Subtitle:</label>
                                    <input value={l.subtitle} onChange={e => handleChange(l.key, 'subtitle', e)} placeholder="Subtitle (Optional)" type="text" />

                                    <label className="input-label">Url:</label>
                                    <input value={l.url} onChange={e => handleChange(l.key, 'url', e)} placeholder="Url" type="text" />
                                </div>
                                
                            </div>
                        ))}
                    </ReactSortable>
                </div>
                <div className="border-t p-4 mt-4">
                    <div className="max-w-xs mx-auto">
                        <SubmitButton>
                            <span>Save</span>
                        </SubmitButton>
                    </div>
                    
                </div>
            </form>
        </Section>
    )
}