import React, { useEffect } from 'react'

const Widget = (props) => {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = props.js;
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
    }, [])

    return (
        <div className="itemMainImg">

            <link href={ props.css } rel="stylesheet"/> 

            <vue-widget></vue-widget>

        </div>
    );
}

export default Widget