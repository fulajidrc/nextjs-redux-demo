function Button({text, type='button', onClick}) {
    return (
        <>
            <button class="h-10 px-6 font-semibold rounded-md bg-indigo-500 hover:bg-indigo-700 text-white" type={type} onClick={onClick}>
                {text}
            </button>
        </>
    )
}
  
export default Button