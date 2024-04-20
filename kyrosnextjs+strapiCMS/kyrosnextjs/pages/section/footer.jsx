import React, {useState, useEffect} from 'react';

const Footer = (data) => {
    const [footerData,setFooterData] = useState(false);
    
    useEffect(() => {
        setFooterData(data.data);
    }, [data]);
  
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href={footerData?.url} target="_blank" rel="noreferrer">
                            <span className="copy">&copy; {footerData.copyright}</span>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons">
                            {footerData?.media_social_footers?.map((item) => (
                                <a key={item.id} href={item.link} target="_blank" rel="noreferrer"><i className={item.iconClassName}></i></a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;