export default function RadioToggles({options, defaultValue, onChange}) {
    return (
        <div className="radio-toggles shadow w-full">
            {options.map((option, key) => (
                <label key={key} className="w-1/2 text-center">
                    <input 
                        name="bgType" 
                        type="radio" 
                        value={option.value} 
                        defaultChecked={defaultValue === option.value}
                        onClick={e => onChange(e.target.value)}
                    />
                    <span>{option.label}</span>
                </label>
            ))}
            
            
        </div>
    )
}