import { useFormStatus } from 'react-dom'

export default function SubmitButton({children, className=''}) {
    const {pending} = useFormStatus();

    return (
        <button 
            type="submit" 
            disabled={pending}
            className={"disabled:bg-purple-700 disabled:text-gray-400 flex gap-2 items-center justify-center bg-purple-600 text-white py-2 px-4  mx-auto w-full" + className}
        >
            {children}
        </button> 
    )
}