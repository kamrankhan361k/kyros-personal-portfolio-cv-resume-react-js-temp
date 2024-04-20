import dynamic from "next/dynamic";
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import api from '../api/api';
import { addComment, addCommentToBlog } from '../api/apiDo';

interface kComment {
    name: string;
    message: string;
    email: string;
    date: string;
}

interface Blog {
    id: number;
    title: string;
    description: string;
    likes: number,
    date: string,
    comments: [kComment],
    illustrationImage: {
        url: string;
    }
}

interface Props {
    text: string;
    maxLength: number;
}

export default function Blogmain(data: any) {
    const [blogData, setBlogData] = useState([]);

    const TrimmedText: React.FC<Props> = ({ text, maxLength }) => {
        const plainText = text.replace(/<[^>]+>/g, "");
        const trimmedText = plainText.length > maxLength ? `${plainText.slice(0, maxLength)}...` : plainText;
        return <span>{trimmedText}</span>;
    };

    const emailRegexExp: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    
    useEffect(() => {
        setBlogData(data.data);

        Aos.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, [data]);

    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);;
    const [lighbx, setlighbx] = useState(false);
    const [commentValid, setCommentValid] = useState(false);

    const handleBtnClick = (event: React.MouseEvent<HTMLDivElement>, blog: Blog): void => {
        setSelectedBlog(blog);
        setlighbx(!lighbx);

        var x = document.getElementsByTagName("BODY")[0] as HTMLDivElement;
        x.style.overflow = "hidden";
    }
    
    const handleBtnClickclose = (): void => {
        setlighbx(!lighbx);
        var x = document.getElementsByTagName("BODY")[0] as HTMLDivElement;
        x.style.overflow = "auto";
        setSelectedBlog(null);
    };

    const [newComment, setNewComment] = useState<kComment>({
        name: "",
        email: "",
        date: "",
        message: "",
    });
    
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        let updatedComment = newComment;
        if(event.target.id=="name") {
            updatedComment.name = event.target.value;
        } else {
            updatedComment.email = event.target.value;
        }
        setNewComment(updatedComment);
        setCommentValid(emailRegexExp.test(newComment.email) && newComment.message.length>0);
    }

    function handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        let updatedComment = newComment;
        updatedComment.message = event.target.value;
        setNewComment(updatedComment);
        setCommentValid(emailRegexExp.test(newComment.email) && newComment.message.length>0);
    }

    const [isLoading, setIsLoading] = useState(false);
    const handleCommentSendClick = async (event: React.MouseEvent<HTMLInputElement>)=> {
        if(commentValid) {
            setIsLoading(true);
            lockCommentForm(true);
            const addedComment = addComment(newComment.name, newComment.email, newComment.message);
            var updatedBlog = selectedBlog;
            var allComments = updatedBlog?.comments;
            allComments?.push(await addedComment);
            
            addCommentToBlog(selectedBlog?.id,allComments); 
            setSelectedBlog(updatedBlog);
            resetCommentForm();
            
            setIsLoading(false);
        }
        else {
            console.log("Incomplete");
        }
    }

    function lockCommentForm(enable:boolean) {
        const commentNameField = document.getElementById("name") as HTMLInputElement;
        const commentEmailField = document.getElementById("email") as HTMLInputElement;
        const commentMessageField = document.getElementById("message") as HTMLInputElement;

        commentNameField.disabled = enable;
        commentEmailField.disabled = enable;
        commentMessageField.disabled = enable;
    }

    function resetCommentForm() {
        const commentNameField = document.getElementById("name") as HTMLInputElement;
        const commentEmailField = document.getElementById("email") as HTMLInputElement;
        const commentMessageField = document.getElementById("message") as HTMLInputElement;

        commentNameField.value = "";
        commentEmailField.value = "";
        commentMessageField.value = "";

        let updatedComment = newComment;
        updatedComment.name = "";
        updatedComment.email = "";
        updatedComment.message = "";
        
        setNewComment(updatedComment);
        setCommentValid(false);
        lockCommentForm(false);
    }

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        return formattedDate;
    }

    return (
        <div className="container">
            <div className="spacer-single"></div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Recent Blog</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="row"
                data-aos="fade-up"
                data-aos-once="true"
            >
                {blogData?.map((item: Blog) => (
                    <div key={item.id} className="col-md-4">
                        <div key={item.id} className="bloglist item">
                            <div className="post-content">
                                <div className="post-image" onClick={(event) => handleBtnClick(event, item)}>
                                    <div className="de_modal">
                                        <Image width="100" height="100" alt="blogimg" src={`${api.baseUrl}${item.illustrationImage.url}`} className="grayscale" />
                                    </div>
                                </div>
                                <div className="post-text" onClick={(event) => handleBtnClick(event, item)}>
                                    <h4 className="de_modal">{item.title}</h4>
                                    <p><TrimmedText text={item.description} maxLength={134} /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            {/* lightbox1 */}
            {lighbx && selectedBlog && (
                <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose}></button>
                    </div>
                    <div className="v-center w-100">
                        <div className="mainLightbox container">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    <div className="blog-read">

                                        <Image width="100" height="100" alt="blogimg" src={`${api.baseUrl}${selectedBlog.illustrationImage?.url}`} className="img-fullwidth rounded" />

                                        <div className="post-info">
                                            <span className="post-date">{formatDate(selectedBlog.date)}</span>
                                            <span className="post-like">{selectedBlog.likes}</span>
                                            <span className="post-comment">{selectedBlog.comments.length}</span>
                                        </div>

                                        <h2>{selectedBlog.title}</h2>

                                        <div className="post-text" dangerouslySetInnerHTML={{__html: `${selectedBlog.description}`}} >
                                        </div>

                                    </div>
                                    <div className="blog-comment">
                                        <h4>Comments</h4>

                                        <div className="spacer-half"></div>

                                        {selectedBlog.comments.length > 0 ? (
                                            <ol>
                                                {selectedBlog.comments.map((item) => (
                                                    <li key={Math.random()}>
                                                        <div className="avatar">
                                                            <Image width="100" height="100" src="./img/blog/avatar-1.jpg" alt="blogimg" /></div>
                                                        <div className="comment-info">
                                                            <span className="c_name">{item.name}</span>
                                                            <span className="c_date id-color">{formatDate(item.date)}</span>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="comment">{item.message}</div>
                                                    </li>
                                                ))}
                                            </ol>
                                        ) : (
                                            <div>No Comments</div>
                                        )}

                                        <div className="spacer-single"></div>

                                        <div id="comment-form-wrapper">
                                            <h4>Leave a Comment</h4>
                                            <div className="comment_form_holder">
                                                <form id="contact_form" name="form1" className="form-border" action="submit">
                                                    <label>Name</label>
                                                    <input name="name" id="name" className="form-control" onChange={(event) => handleInputChange(event)}/>
                                                    <label>Email <span className="req">*</span></label>
                                                    <input name="email" id="email" className="form-control" onChange={(event) => handleInputChange(event)}/>
                                                    <label>Message <span className="req">*</span></label>
                                                    <textarea name="message" id="message" className="form-control" onChange={(event) => handleTextAreaChange(event)}>
                                                    </textarea>
                                                    <p id="btnsubmit">
                                                        <input id="send" value="Send" className="btn btn-main mt-3" 
                                                            onClick={(event) => handleCommentSendClick(event)}
                                                        />
                                                        {isLoading ? <div>Sending...</div> : !commentValid && <div>Please fill mandatory fields</div>}
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}