import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({src, hash}) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    
    useEffect(()=>{
        const img = new Image();
        img.onload = () =>{
            setImageLoaded(true)
        }
        img.src = src
    }, [src])
    return ( 
        <>
            {!imageLoaded && (
                <div style={{display: imageLoaded ? "none" : "inline", width:"100%", height:"100%"}}>
                    <Blurhash
                        hash={hash}
                        width="100%"
                        height="100%"
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    >
                    </Blurhash>
                </div>
                
            )}
            {imageLoaded && (
               <img
                    src={src}
                    alt=""
                    loading="lazy"
                    style={{display: !imageLoaded ? "none" : "inline"}}
                >
                </img>
            )}
            
        </>
    );
}
 
export default ImageComponent;