import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Lens-Queen`;
    },[title])
};

export default useTitle;