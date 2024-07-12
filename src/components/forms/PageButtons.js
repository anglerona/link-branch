"use client"
import { useState } from "react";
import Add from "../icons/Add";
import Section from "../layout/Section";
import SubmitButton from "../buttons/SubmitButton";
import { savePageButtons } from "@/actions/pageActions";
import toast from "react-hot-toast";
import Delete from "../icons/Delete";
import Move from "../icons/Move";
import { ReactSortable } from "react-sortablejs";

const allButtons = [
    {
        key: 'email',
        label: 'Email'
    },
    {
        key: 'phone',
        label: 'Phone'
    },
    {
        key: 'instagram',
        label: 'Instagram'
    },
    {
        key: 'discord',
        label: 'Discord'
    },
    {
        key: 'github',
        label: 'Github'
    },
    {
        key: 'youtube',
        label: 'Youtube'
    },
]


export default function PageButtons({user, page}) {
    const savedKeys = Object.keys(page?.buttons ?? {});
    const savedInfo = savedKeys.map(k => allButtons.find(b => b.key === k));
    const [activeButtons, setActiveButtons] = useState(savedInfo);

    function addButton(button) {
        setActiveButtons(prevButtons => {
            return [...prevButtons, button];
        })
    }

    const availableButtons = allButtons.filter(b1 => !activeButtons.find(b2 => b1.key === b2.key))

    async function saveButtons(formData) {
        await savePageButtons(formData)
        toast.success('Settings saved')
    }

    function removeButton({key: keyToRemove}) {
        setActiveButtons(prevButtons => {
            return prevButtons.filter(button => button.key !== keyToRemove)
        })
    }

    return (
        <Section>

            <form action={saveButtons}>
                <h2 className="text-2xl mb-4">Buttons</h2>
                <ReactSortable handle=".handle" list={activeButtons} setList={setActiveButtons}>
                    {activeButtons.map(b => (
                        <div key={b.key} className="flex mb-4 align-middle items-center">
                            <div className="w-56 flex h-full p-2 gap-2 items-center text-gray-700">
                                <Move className="handle cursor-pointer w-5 h-5 text-gray-400" />
                                <span>{b.label}:</span>
                            </div>
                            
                            <input type="text" name={b.key} defaultValue={page?.buttons?.[b.key] ?? ''} placeholder="Enter info" style={{marginBottom: '0'}} />
                            <button type="button" onClick={() => removeButton(b)} className="py-2 px-4 cursor-pointer hover:text-purple-600">
                                <Delete />
                            </button>
                        </div>
                    ))}
                </ReactSortable>
                <div className="flex flex-wrap gap-2 mt-8 border-t py-4 border-y">
                    {availableButtons.map(b => (
                        <button key={b.key} type="button" onClick={() => addButton(b)} className="flex text-gray-700 items-center gap-1 px-4 py-2 bg-gray-200">
                            <span>
                                {b.label}
                            </span>
                            <Add className="h-5 w-5" />
                        </button>
                    ))}
                    
                </div>
                <div className="max-w-xs mx-auto mt-8">
                    <SubmitButton>
                        <span>Save</span>
                    </SubmitButton>
                </div>
            </form>
        </Section>
    )
}